/**
 * Service translations utility
 * Maps service slugs to translation keys
 */

export const getServiceTranslation = (t, serviceSlug, field = 'name') => {
  const translations = {
    // Home page services
    'horoscope-analysis': {
      name: t('service.horoscopeAnalysis.name'),
      description: t('service.horoscopeAnalysis.description'),
      benefits: [
        t('service.horoscopeAnalysis.benefit1'),
        t('service.horoscopeAnalysis.benefit2'),
        t('service.horoscopeAnalysis.benefit3'),
        t('service.horoscopeAnalysis.benefit4'),
      ],
    },
    'marriage-love-compatibility': {
      name: t('service.marriageCompatibility.name'),
      description: t('service.marriageCompatibility.description'),
      benefits: [
        t('service.marriageCompatibility.benefit1'),
        t('service.marriageCompatibility.benefit2'),
        t('service.marriageCompatibility.benefit3'),
        t('service.marriageCompatibility.benefit4'),
      ],
    },
    'career-job-astrology': {
      name: t('service.careerAstrology.name'),
      description: t('service.careerAstrology.description'),
      benefits: [
        t('service.careerAstrology.benefit1'),
        t('service.careerAstrology.benefit2'),
        t('service.careerAstrology.benefit3'),
        t('service.careerAstrology.benefit4'),
      ],
    },
    'finance-business-astrology': {
      name: t('service.financeAstrology.name'),
      description: t('service.financeAstrology.description'),
      benefits: [
        t('service.financeAstrology.benefit1'),
        t('service.financeAstrology.benefit2'),
        t('service.financeAstrology.benefit3'),
        t('service.financeAstrology.benefit4'),
      ],
    },
    'health-medical-astrology': {
      name: t('service.healthAstrology.name'),
      description: t('service.healthAstrology.description'),
      benefits: [
        t('service.healthAstrology.benefit1'),
        t('service.healthAstrology.benefit2'),
        t('service.healthAstrology.benefit3'),
        t('service.healthAstrology.benefit4'),
      ],
    },
    'kundli-analysis': {
      name: t('service.kundliAnalysis.name'),
      description: t('service.kundliAnalysis.description'),
      benefits: [
        t('service.kundliAnalysis.benefit1'),
        t('service.kundliAnalysis.benefit2'),
        t('service.kundliAnalysis.benefit3'),
        t('service.kundliAnalysis.benefit4'),
      ],
    },
    'vastu-shastra-consultation': {
      name: t('service.vastuConsultation.name'),
      description: t('service.vastuConsultation.description'),
      benefits: [
        t('service.vastuConsultation.benefit1'),
        t('service.vastuConsultation.benefit2'),
        t('service.vastuConsultation.benefit3'),
        t('service.vastuConsultation.benefit4'),
      ],
    },
    'kundli-matching': {
      name: t('service.kundliMatching.name'),
      description: t('service.kundliMatching.description'),
      benefits: [
        t('service.kundliMatching.benefit1'),
        t('service.kundliMatching.benefit2'),
        t('service.kundliMatching.benefit3'),
        t('service.kundliMatching.benefit4'),
      ],
    },
    'gemstone-recommendation': {
      name: t('service.gemstoneRecommendation.name'),
      description: t('service.gemstoneRecommendation.description'),
      benefits: [
        t('service.gemstoneRecommendation.benefit1'),
        t('service.gemstoneRecommendation.benefit2'),
        t('service.gemstoneRecommendation.benefit3'),
        t('service.gemstoneRecommendation.benefit4'),
      ],
    },
    // Services page services
    'kundali-reading': {
      name: t('service.kundaliReading.name'),
      description: t('service.kundaliReading.description'),
      benefits: [
        t('service.kundaliReading.benefit1'),
        t('service.kundaliReading.benefit2'),
        t('service.kundaliReading.benefit3'),
        t('service.kundaliReading.benefit4'),
      ],
    },
    'matchmaking': {
      name: t('service.matchmaking.name'),
      description: t('service.matchmaking.description'),
      benefits: [
        t('service.matchmaking.benefit1'),
        t('service.matchmaking.benefit2'),
        t('service.matchmaking.benefit3'),
        t('service.matchmaking.benefit4'),
      ],
    },
    'career-guidance': {
      name: t('service.careerGuidance.name'),
      description: t('service.careerGuidance.description'),
      benefits: [
        t('service.careerGuidance.benefit1'),
        t('service.careerGuidance.benefit2'),
        t('service.careerGuidance.benefit3'),
        t('service.careerGuidance.benefit4'),
      ],
    },
    'financial-forecast': {
      name: t('service.financialForecast.name'),
      description: t('service.financialForecast.description'),
      benefits: [
        t('service.financialForecast.benefit1'),
        t('service.financialForecast.benefit2'),
        t('service.financialForecast.benefit3'),
        t('service.financialForecast.benefit4'),
      ],
    },
    'vastu-consultation': {
      name: t('service.vastuConsultation.name'),
      description: t('service.vastuConsultation.description'),
      benefits: [
        t('service.vastuConsultation.benefit1'),
        t('service.vastuConsultation.benefit2'),
        t('service.vastuConsultation.benefit3'),
        t('service.vastuConsultation.benefit4'),
      ],
    },
    'remedies': {
      name: t('service.remedies.name'),
      description: t('service.remedies.description'),
      benefits: [
        t('service.remedies.benefit1'),
        t('service.remedies.benefit2'),
        t('service.remedies.benefit3'),
        t('service.remedies.benefit4'),
      ],
    },
    'gemstone-suggestion': {
      name: t('service.gemstoneSuggestion.name'),
      description: t('service.gemstoneSuggestion.description'),
      benefits: [
        t('service.gemstoneSuggestion.benefit1'),
        t('service.gemstoneSuggestion.benefit2'),
        t('service.gemstoneSuggestion.benefit3'),
        t('service.gemstoneSuggestion.benefit4'),
      ],
    },
  }

  const serviceTranslation = translations[serviceSlug]
  if (!serviceTranslation) {
    return null
  }

  if (field === 'all') {
    return serviceTranslation
  }

  return serviceTranslation[field] || null
}

/**
 * Get translated service data
 */
export const getTranslatedService = (t, service) => {
  const translation = getServiceTranslation(t, service.slug, 'all')
  
  if (translation) {
    return {
      ...service,
      name: translation.name || service.name,
      description: translation.description || service.description,
      benefits: translation.benefits || service.benefits,
    }
  }
  
  return service
}

