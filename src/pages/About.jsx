import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import ReviewsCarousel from '../components/ReviewsCarousel'
import { motion, useInView } from 'framer-motion'
import SEO from '../components/SEO'
import { createBreadcrumbSchema } from '../utils/seo'
import { useTranslation } from 'react-i18next'

// Counter component for animated numbers
const Counter = ({ end, duration = 2, suffix = '', prefix = '', decimals = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime = null
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = easeOutQuart * end
      
      if (decimals > 0) {
        setCount(parseFloat(currentCount.toFixed(decimals)))
      } else {
        setCount(Math.floor(currentCount))
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isInView, end, duration, decimals])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

const About = () => {
  const { t } = useTranslation()

  const services = [
    {
      name: t('service.financeAstrology.name'),
      description: t('service.financeAstrology.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: t('service.horoscopeAnalysis.name'),
      description: t('service.horoscopeAnalysis.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      name: t('service.vastuConsultation.name'),
      description: t('service.vastuConsultation.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: t('service.careerAstrology.name'),
      description: t('service.careerAstrology.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      name: t('service.marriageCompatibility.name'),
      description: t('service.marriageCompatibility.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      name: t('service.gemstoneRecommendation.name'),
      description: t('service.gemstoneRecommendation.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      name: t('service.numerologyConsultation.name'),
      description: t('service.numerologyConsultation.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      name: t('service.remedies.name'),
      description: t('service.remedies.description'),
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ]

  const siteOrigin = import.meta.env.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '')
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: `${siteOrigin}/` },
    { name: 'About', item: `${siteOrigin}/about` },
  ])

  return (
    <div className="min-h-screen">
      <SEO
        title="About Pandit Gulabchand - Best Astrologer in Mirzapur, Uttar Pradesh | 30+ Years Experience"
        description="Learn about Pandit Gulabchand, the best astrologer in Mirzapur, Uttar Pradesh with 30+ years of experience in Vedic astrology, Vastu Shastra, and Gemstone consultancy. Located in Mirzapur-cum-Vindhyachal. Serving 5000+ happy clients across Mirzapur, Varanasi, and Allahabad."
        url="/about"
        structuredData={breadcrumbSchema}
      />
      {/* Hero Section */}
      <section className="pt-36 pb-4 md:pb-6 bg-gradient-to-br from-primary/5 via-white to-primary/5 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {t('aboutPage.title')}
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg md:text-xl">
              {t('aboutPage.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-4 md:py-6 bg-gradient-to-br from-primary/5 via-white to-primary/5 relative overflow-hidden -mt-6">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-primary/20 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 w-full mb-8">
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                {/* Introduction */}
                <div>
                  <p className="text-gray-800 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl mb-6">
                    {t('aboutPage.intro1')}
                  </p>

                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg mb-6">
                    {t('aboutPage.intro2')}
                  </p>

                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                    {t('aboutPage.intro3')}
                  </p>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                {/* Statistics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 md:p-5 border border-primary/20 transition-all"
                    style={{
                      boxShadow: '0 10px 25px -5px rgba(227, 208, 156, 0.5), 0 10px 10px -5px rgba(227, 208, 156, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 20px 35px -5px rgba(227, 208, 156, 0.6), 0 10px 15px -5px rgba(227, 208, 156, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(227, 208, 156, 0.5), 0 10px 10px -5px rgba(227, 208, 156, 0.3)'
                    }}
                  >
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                        <Counter end={30} duration={2} suffix="+" />
                      </div>
                      <div className="text-gray-700 font-semibold text-xs md:text-sm">{t('aboutPage.yearsExperience')}</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 md:p-5 border border-primary/20 transition-all"
                    style={{
                      boxShadow: '0 10px 25px -5px rgba(227, 208, 156, 0.5), 0 10px 10px -5px rgba(227, 208, 156, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 20px 35px -5px rgba(227, 208, 156, 0.6), 0 10px 15px -5px rgba(227, 208, 156, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(227, 208, 156, 0.5), 0 10px 10px -5px rgba(227, 208, 156, 0.3)'
                    }}
                  >
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                        <Counter end={5000} duration={2.5} suffix="+" />
                      </div>
                      <div className="text-gray-700 font-semibold text-xs md:text-sm">{t('aboutPage.happyClients')}</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 md:p-5 border border-primary/20 transition-all"
                    style={{
                      boxShadow: '0 10px 25px -5px rgba(227, 208, 156, 0.5), 0 10px 10px -5px rgba(227, 208, 156, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 20px 35px -5px rgba(227, 208, 156, 0.6), 0 10px 15px -5px rgba(227, 208, 156, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(227, 208, 156, 0.5), 0 10px 10px -5px rgba(227, 208, 156, 0.3)'
                    }}
                  >
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1.5 mb-1">
                        <div className="text-2xl md:text-3xl font-bold text-primary">
                          <Counter end={4.9} duration={2} decimals={1} />
                        </div>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <div className="text-gray-700 font-semibold text-xs md:text-sm">{t('aboutPage.clientRating')}</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              {t('aboutPage.areasOfExpertise')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Vedic Astrology Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-all transform hover:-translate-y-1"
                style={{
                  boxShadow: '0 10px 30px -5px rgba(227, 208, 156, 0.3), 0 10px 15px -5px rgba(227, 208, 156, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">{t('aboutPage.vedicAstrology')}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('aboutPage.vedicAstrologyDesc1')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('aboutPage.vedicAstrologyDesc2')}
                </p>
              </motion.div>

              {/* Vastu Shastra Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-all transform hover:-translate-y-1"
                style={{
                  boxShadow: '0 10px 30px -5px rgba(227, 208, 156, 0.3), 0 10px 15px -5px rgba(227, 208, 156, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">{t('aboutPage.vastuShastra')}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('aboutPage.vastuDesc1')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('aboutPage.vastuDesc2')}
                </p>
              </motion.div>

              {/* Gemstone Consultancy Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-all transform hover:-translate-y-1"
                style={{
                  boxShadow: '0 10px 30px -5px rgba(227, 208, 156, 0.3), 0 10px 15px -5px rgba(227, 208, 156, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">{t('aboutPage.gemstoneConsultancy')}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('aboutPage.gemstoneDesc1')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('aboutPage.gemstoneDesc2')}
                </p>
              </motion.div>

              {/* Numerology & Remedies Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-all transform hover:-translate-y-1"
                style={{
                  boxShadow: '0 10px 30px -5px rgba(227, 208, 156, 0.3), 0 10px 15px -5px rgba(227, 208, 156, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">{t('aboutPage.numerologyRemedies')}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('aboutPage.numerologyDesc1')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('aboutPage.numerologyDesc2')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              {t('aboutPage.ourServices')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border-2 border-primary/20 rounded-xl px-6 py-5 hover:border-primary hover:shadow-xl transition-all text-center group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-gray-900 font-bold text-base leading-tight mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy & Approach Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
              {t('aboutPage.philosophyApproach')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Ethical & Practical Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-all transform hover:-translate-y-1 text-center"
                style={{
                  boxShadow: '0 10px 30px -5px rgba(227, 208, 156, 0.3), 0 10px 15px -5px rgba(227, 208, 156, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-4 text-xl">{t('aboutPage.ethicalPractical')}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {t('aboutPage.ethicalDesc')}
                </p>
              </motion.div>

              {/* Traditional Wisdom Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-all transform hover:-translate-y-1 text-center"
                style={{
                  boxShadow: '0 10px 30px -5px rgba(227, 208, 156, 0.3), 0 10px 15px -5px rgba(227, 208, 156, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-4 text-xl">{t('aboutPage.traditionalWisdom')}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {t('aboutPage.traditionalDesc')}
                </p>
              </motion.div>

              {/* Personalized Care Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-all transform hover:-translate-y-1 text-center"
                style={{
                  boxShadow: '0 10px 30px -5px rgba(227, 208, 156, 0.3), 0 10px 15px -5px rgba(227, 208, 156, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-4 text-xl">{t('aboutPage.personalizedCare')}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {t('aboutPage.personalizedDesc')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 drop-shadow-lg leading-tight">
                {t('aboutPage.readyToDiscover')}
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
                {t('aboutPage.ctaSubtitle')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href={`https://wa.me/${import.meta.env.VITE_WA_NUMBER || '919323600011'}?text=${encodeURIComponent('नमस्ते! मैं पंडित गुलाबचंद के साथ एक परामर्श बुक करना चाहता हूं।')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-primary text-secondary px-8 sm:px-10 md:px-12 py-3.5 md:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <span>{t('aboutPage.bookYourConsultation')}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 sm:px-10 md:px-12 py-3.5 md:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-white/15 hover:border-white/50 transition-all shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{t('aboutPage.viewAllServices')}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="mt-16 md:mt-20">
        <ReviewsCarousel />
      </div>
    </div>
  )
}

export default About
