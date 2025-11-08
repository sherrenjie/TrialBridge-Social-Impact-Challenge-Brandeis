/**
 * TrialBridge API Service
 *
 */

const API_BASE_URL = 'https://clinicaltrials.gov/api/v2'

const CONDITION_MAP = {
  'cardiovascular': 'cardiovascular disease',
  'cancer': 'cancer',
  'osteoporosis': 'osteoporosis',
  'autoimmune': 'autoimmune disease',
  'diabetes': 'diabetes',
  'menopause': 'menopause',
  'mental-health': 'mental health',
  'reproductive-health': 'reproductive health',
  'other': ''
}

const TRAVEL_DISTANCE_MAP = {
  'within-10-miles': '10mi',
  'within-25-miles': '25mi',
  'within-50-miles': '50mi',
  'within-100-miles': '100mi',
  'any-distance': '500mi'
}

/**
 * Search for clinical trials based on form data
 */
export const searchTrials = async (formData) => {
  try {
    console.log('🔍 Starting trial search with form data:', formData)
    
    const params = buildSearchParams(formData)
    const url = `${API_BASE_URL}/studies?${params}`
    
    console.log('📡 API URL:', url)
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    })
    
    console.log('📥 Response status:', response.status, response.statusText)
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error('❌ API Error Response:', errorText)
      throw new Error(`API returned ${response.status}: ${response.statusText}`)
    }
    
    const data = await response.json()
    console.log('✅ API Response received, studies count:', data.studies?.length || 0)
    
    if (!data.studies || data.studies.length === 0) {
      console.log('⚠️ No studies found in response')
      return []
    }
    
    // Transform API response
    const transformed = data.studies.map(study => transformStudyData(study, formData))
    console.log(`✅ Transformed ${transformed.length} trials`)
    
    return transformed
  } catch (error) {
    console.error('❌ Error in searchTrials:', error)
    throw error
  }
}

/**
 * Build URL search parameters
 */
const buildSearchParams = (formData) => {
  const params = new URLSearchParams()
  
  console.log('🔧 Building search params...')
  
  // Condition search
  if (formData.primaryCondition && formData.primaryCondition !== 'other') {
    const condition = CONDITION_MAP[formData.primaryCondition]
    if (condition) {
      params.append('query.cond', condition)
      console.log('  ✓ Condition:', condition)
    }
  }
  
  // Geographic search
  if (formData.latitude && formData.longitude) {
    const distance = TRAVEL_DISTANCE_MAP[formData.willingToTravel] || '50mi'
    const geoFilter = `distance(${formData.latitude},${formData.longitude},${distance})`
    params.append('filter.geo', geoFilter)
    console.log('  ✓ Location:', geoFilter)
  }
  
  // Only show recruiting trials
  params.append('filter.overallStatus', 'RECRUITING')
  console.log('  ✓ Status: RECRUITING')
  
  // Explicitly request fields we need (including location data)
  const fields = [
    'NCTId',
    'BriefTitle',
    'OfficialTitle',
    'OverallStatus',
    'BriefSummary',
    'DetailedDescription',
    'Condition',
    'Phase',
    'EligibilityCriteria',
    'Sex',
    'Gender',
    'LocationFacility',
    'LocationCity',
    'LocationState',
    'LocationCountry',
    'LocationZip',
    'LocationStatus',
    'LocationGeoPoint',
    'CentralContactName',
    'CentralContactPhone',
    'CentralContactEMail',
    'OverallOfficialName',
    'OverallOfficialRole',
    'LocationContactName',
    'LocationContactPhone',
    'LocationContactEMail'
  ].join(',')
  
  params.append('fields', fields)
  console.log('  ✓ Fields requested')
  
  // Pagination
  params.append('pageSize', '20')
  params.append('format', 'json')
  
  console.log('📋 Final URL params:', params.toString())
  
  return params
}

/**
 * Transform ClinicalTrials.gov API response to TrialCard format
 */
const transformStudyData = (study, formData) => {
  try {
    const protocol = study.protocolSection || {}
    const derived = study.derivedSection || {}
    const identification = protocol.identificationModule || {}
    const status = protocol.statusModule || {}
    const description = protocol.descriptionModule || {}
    const conditions = protocol.conditionsModule || {}
    const design = protocol.designModule || {}
    const eligibility = protocol.eligibilityModule || {}
    const contacts = protocol.contactsModule || {}
    
    console.log('📋 Processing trial:', identification.nctId)
    
    // Get locations
    const locations = contacts.locations || []
    console.log('  📍 Locations found:', locations.length)
    
    const firstLocation = locations[0] || {}
    
    if (locations.length > 0) {
      console.log('  📍 First location details:', {
        facility: firstLocation.facility,
        city: firstLocation.city,
        state: firstLocation.state,
        hasGeoPoint: !!firstLocation.geoPoint
      })
    }
    
    // Calculate distance
    let distance = null
    if (formData.latitude && formData.longitude && firstLocation.geoPoint) {
      distance = calculateDistance(
        formData.latitude,
        formData.longitude,
        firstLocation.geoPoint.lat,
        firstLocation.geoPoint.lon
      )
      console.log('  📏 Calculated distance:', distance)
    }
    
    // Get contact information - try multiple sources
    const centralContact = contacts.centralContacts?.[0] || {}
    const overallOfficial = contacts.overallOfficials?.[0] || {}
    const locationContact = firstLocation.contacts?.[0] || {}
    
    // Build contact object with available information
    const contact = {
      name: centralContact.name || overallOfficial.name || locationContact.name || null,
      phone: centralContact.phone || locationContact.phone || null,
      email: centralContact.email || locationContact.email || null
    }
    
    console.log('  📞 Contact found:', {
      name: contact.name || 'None',
      hasPhone: !!contact.phone,
      hasEmail: !!contact.email
    })
    
    // Get description
    const trialDescription = description.briefSummary || 
                            description.detailedDescription || 
                            'Visit ClinicalTrials.gov for full study details'
    
    // Parse eligibility
    let eligibilityCriteria = ['See full criteria on ClinicalTrials.gov']
    if (eligibility.eligibilityCriteria) {
      eligibilityCriteria = parseEligibilityCriteria(eligibility.eligibilityCriteria)
    }
    
    // Check if female inclusive
    const sex = eligibility.sex || eligibility.gender || 'ALL'
    const femaleInclusive = sex === 'ALL' || sex === 'FEMALE'
    
    // Format location
    const locationString = formatLocation(firstLocation)
    console.log('  📍 Formatted location:', locationString)
    
    return {
      id: identification.nctId || 'Unknown',
      title: identification.briefTitle || identification.officialTitle || 'No title available',
      nctId: identification.nctId || 'N/A',
      condition: conditions.conditions?.[0] || 'Not specified',
      phase: design.phases?.[0] || 'Not specified',
      location: locationString,
      distance: distance,
      status: formatStatus(status.overallStatus),
      femaleInclusive: femaleInclusive,
      description: trialDescription,
      eligibility: eligibilityCriteria,
      contact: contact
    }
  } catch (error) {
    console.error('❌ Error transforming study:', error)
    return {
      id: 'error',
      title: 'Error loading trial',
      nctId: 'N/A',
      condition: 'Not specified',
      phase: 'N/A',
      location: 'Location not available',
      distance: null,
      status: 'Unknown',
      femaleInclusive: true,
      description: 'Unable to load full details.',
      eligibility: ['See ClinicalTrials.gov for details'],
      contact: {
        name: null,
        phone: null,
        email: null
      }
    }
  }
}

/**
 * Parse eligibility criteria text into array
 */
const parseEligibilityCriteria = (criteriaText) => {
  if (!criteriaText) return ['Eligibility criteria not provided']
  
  const inclusionMatch = criteriaText.match(/Inclusion Criteria:([\s\S]*?)(?:Exclusion Criteria:|$)/i)
  
  if (inclusionMatch) {
    const criteria = inclusionMatch[1]
      .split(/\n/)
      .map(line => line.trim())
      .filter(line => line.length > 10 && !line.match(/^[-•\d.)\s]+$/))
      .slice(0, 5)
    
    if (criteria.length > 0) return criteria
  }
  
  const lines = criteriaText.split(/\n/).map(line => line.trim()).filter(line => line.length > 20).slice(0, 3)
  return lines.length > 0 ? lines : ['See full eligibility on ClinicalTrials.gov']
}

/**
 * Format location for display
 */
const formatLocation = (location) => {
  if (!location || Object.keys(location).length === 0) {
    return 'Location not specified'
  }
  
  const facility = location.facility
  const city = location.city
  const state = location.state
  const country = location.country
  
  const parts = []
  
  // Prefer city, state over facility name (more concise)
  if (city) parts.push(city)
  if (state) parts.push(state)
  
  if (parts.length > 0) {
    return parts.join(', ')
  }
  
  // Fallback to facility if no city/state
  if (facility) return facility
  if (country) return country
  
  return 'Location not specified'
}

/**
 * Format status for display
 */
const formatStatus = (status) => {
  const statusMap = {
    'RECRUITING': 'Recruiting',
    'NOT_YET_RECRUITING': 'Not Yet Recruiting',
    'ACTIVE_NOT_RECRUITING': 'Active, Not Recruiting',
    'COMPLETED': 'Completed',
    'SUSPENDED': 'Suspended',
    'TERMINATED': 'Terminated',
    'WITHDRAWN': 'Withdrawn'
  }
  return statusMap[status] || status
}

/**
 * Calculate distance between two points using Haversine formula
 */
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 3959
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return `${(R * c).toFixed(1)} miles away`
}

const toRad = (degrees) => degrees * (Math.PI / 180)

export default {
  searchTrials
}