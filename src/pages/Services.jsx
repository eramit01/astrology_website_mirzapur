import { useState } from 'react'
import ServiceCard from '../components/ServiceCard'
import ReviewsCarousel from '../components/ReviewsCarousel'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { createBreadcrumbSchema } from '../utils/seo'
import { useTranslation } from 'react-i18next'

const Services = () => {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const allServices = [
    {
      name: 'Kundali Reading',
      slug: 'kundali-reading',
      category: 'astrology',
      description: 'Complete birth chart analysis with detailed predictions about your life, career, relationships, and health. Includes dasha periods and planetary influences.',
      price: '500',
      benefits: [
        'Detailed birth chart interpretation',
        'Life predictions and guidance',
        'Planetary period analysis',
        'Personalized remedies'
      ],
    },
    {
      name: 'Matchmaking',
      slug: 'matchmaking',
      category: 'astrology',
      description: 'Comprehensive compatibility analysis for marriage and relationships using Vedic astrology. Includes gun milan and dosha analysis.',
      price: '800',
      benefits: [
        'Compatibility analysis for couples',
        'Gun milan and dosha checking',
        'Marriage timing predictions',
        'Relationship harmony guidance'
      ],
    },
    {
      name: 'Career Guidance',
      slug: 'career-guidance',
      category: 'astrology',
      description: 'Identify your ideal career path and timing for job changes, promotions, and business ventures based on your birth chart.',
      price: '600',
      benefits: [
        'Find your ideal career direction',
        'Best timing for job changes',
        'Promotion opportunities',
        'Business venture guidance'
      ],
    },
    {
      name: 'Financial Forecast',
      slug: 'financial-forecast',
      category: 'astrology',
      description: 'Understand your financial prospects and best times for investments and major purchases. Wealth analysis and remedies.',
      price: '700',
      benefits: [
        'Financial planning insights',
        'Investment timing guidance',
        'Wealth pattern analysis',
        'Money management remedies'
      ],
    },
    {
      name: 'Vastu Consultation',
      slug: 'vastu-consultation',
      category: 'vastu',
      description: 'Expert guidance for home and office layout to enhance positive energy and prosperity. Includes remedies and corrections.',
      price: '1000',
      benefits: [
        'Home and office Vastu analysis',
        'Energy optimization',
        'Vastu remedies and corrections',
        'Prosperity enhancement'
      ],
    },
    {
      name: 'Remedies & Solutions',
      slug: 'remedies',
      category: 'remedies',
      description: 'Personalized remedies including mantras, gemstones, yantras, and rituals to overcome challenges and enhance positive energy.',
      price: '400',
      benefits: [
        'Personalized remedy suggestions',
        'Mantras and rituals guidance',
        'Yantra recommendations',
        'Positive energy enhancement'
      ],
    },
    {
      name: 'Gemstone Suggestion',
      slug: 'gemstone-suggestion',
      category: 'remedies',
      description: 'Expert recommendations for gemstones based on your birth chart to enhance planetary influences and bring positive changes.',
      price: '1200',
      benefits: [
        'Personalized gemstone suggestions',
        'Planetary enhancement',
        'Quality guidance',
        'Wearing instructions'
      ],
    },
    {
      name: 'Muhurat Selection',
      slug: 'muhurat',
      category: 'astrology',
      description: 'Select auspicious dates and times for important events like marriage, housewarming, business launch, and travel.',
      price: '500',
      benefits: [
        'Auspicious date selection',
        'Timing for important events',
        'Marriage muhurat',
        'Business launch timing'
      ],
    },
    {
      name: 'Panchang Reading',
      slug: 'panchang',
      category: 'astrology',
      description: 'Daily, weekly, and monthly panchang readings to plan your activities according to auspicious timings.',
      price: '300',
      benefits: [
        'Daily panchang information',
        'Auspicious timing guidance',
        'Activity planning',
        'Monthly predictions'
      ],
    },
    {
      name: 'Online Consultation',
      slug: 'online-consultation',
      category: 'packages',
      description: 'One-on-one video or phone consultation from the comfort of your home. Flexible scheduling and detailed follow-up.',
      price: '600',
      benefits: [
        'Video or phone consultation',
        'Flexible scheduling',
        'Detailed follow-up',
        'Comfort of your home'
      ],
    },
    {
      name: 'In-person Consultation',
      slug: 'in-person-consultation',
      category: 'packages',
      description: 'Face-to-face consultation at our office. Includes detailed chart analysis and personalized remedies discussion.',
      price: '800',
      benefits: [
        'Face-to-face consultation',
        'Detailed chart analysis',
        'Personalized discussion',
        'Office visit'
      ],
    },
    {
      name: 'Numerology Consultation',
      slug: 'numerology consultation',
      category: 'astrology',
      description: 'Numerology analysis based on your name and date of birth to understand your life path, destiny, and personality traits.',
      price: '500',
      benefits: [
        'Life path analysis',
        'Name numerology',
        'Destiny number calculation',
        'Personality insights'
      ],
    },
    
  ]

  const categories = [
    { id: 'all', label: t('services.categories.all') },
    { id: 'astrology', label: t('services.categories.astrology') },
    { id: 'vastu', label: t('services.categories.vastu') },
    { id: 'remedies', label: t('services.categories.remedies') },
    { id: 'packages', label: t('services.categories.packages') },
  ]

  // Get service count for each category
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'all') return allServices.length
    return allServices.filter((service) => service.category === categoryId).length
  }

  // Filter services by category and search query
  const filteredServices = allServices.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory
    const matchesSearch = searchQuery === '' || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const siteOrigin = import.meta.env.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '')
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: `${siteOrigin}/` },
    { name: 'Services', item: `${siteOrigin}/services` },
  ])

  return (
    <div className="pt-36 pb-16 min-h-screen">
      <SEO
        title="Astrology Services in Mirzapur, Uttar Pradesh | Kundali, Vastu, Remedies"
        description="Expert astrology services in Mirzapur-cum-Vindhyachal, Uttar Pradesh. Kundali reading, Vastu Shastra, marriage matching, career guidance, gemstone consultation, and more. Book consultation with Pandit Gulabchand."
        url="/services"
        structuredData={breadcrumbSchema}
      />
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <input
              type="text"
              placeholder={t('services.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-12 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-all text-lg"
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-3 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2 sm:px-0"
        >
          {categories.map((category) => {
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 rounded-full font-medium text-xs sm:text-sm md:text-base transition-all duration-300 text-center whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label={`Filter by ${category.label}`}
              >
                {category.label}
              </button>
            )
          })}
        </motion.div>

        {/* Results Count */}
        {filteredServices.length > 0 && (
          <div className="text-center mb-6">
            <p className="text-gray-600 text-sm">
              {t('services.results.showing')} <span className="font-semibold text-primary">{filteredServices.length}</span> {filteredServices.length === 1 ? t('services.results.service') : t('services.results.services')}
              {searchQuery && ` ${t('services.results.for')} "${searchQuery}"`}
            </p>
          </div>
        )}

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredServices.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <svg
              className="w-24 h-24 mx-auto text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-500 text-lg mb-2">{t('services.results.noResults')}</p>
            <p className="text-gray-400 text-sm mb-4">
              {t('services.results.tryDifferent')}
            </p>
            {(searchQuery || activeCategory !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('all')
                }}
                className="text-primary hover:text-primary/80 font-medium underline"
              >
                {t('common.clearFilters')}
              </button>
            )}
          </motion.div>
        )}
      </div>

      {/* Testimonials Section */}
      <div className="mt-8 md:mt-12 lg:mt-16">
        <ReviewsCarousel />
      </div>
    </div>
  )
}

export default Services


