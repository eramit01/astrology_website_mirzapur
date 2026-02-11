import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import ServiceCard from '../components/ServiceCard'
import ReviewsCarousel from '../components/ReviewsCarousel'
import FeaturedIn from '../components/FeaturedIn'
import FAQ from '../components/FAQ'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import SEO from '../components/SEO'
import { useTranslation } from 'react-i18next'

// Counter animation component
const Counter = ({ end, duration = 2, prefix = '', suffix = '', decimals = 0 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

const Home = () => {
  const { t } = useTranslation()
  const [showAllServices, setShowAllServices] = useState(false)

  const allServices = [
    {
      name: 'Horoscope Analysis',
      slug: 'horoscope-analysis',
      description: 'Complete birth chart analysis with detailed predictions about your life, career, relationships, and health based on Vedic astrology.',
      benefits: [
        'Detailed birth chart interpretation',
        'Life predictions and guidance',
        'Planetary influence analysis',
        'Personalized remedies'
      ],
    },
    {
      name: 'Marriage And Love Compatibility',
      slug: 'marriage-love-compatibility',
      description: 'Comprehensive compatibility analysis for marriage and relationships using Vedic astrology. Includes gun milan and dosha analysis.',
      benefits: [
        'Compatibility analysis for couples',
        'Gun milan and dosha checking',
        'Marriage timing predictions',
        'Relationship harmony guidance'
      ],
    },
    {
      name: 'Career & Job Astrology',
      slug: 'career-job-astrology',
      description: 'Identify your ideal career path, timing for job changes, promotions, and business ventures based on your birth chart analysis.',
      benefits: [
        'Find your ideal career direction',
        'Best timing for job changes',
        'Promotion opportunities',
        'Business venture guidance'
      ],
    },
    {
      name: 'Finance & Business Astrology',
      slug: 'finance-business-astrology',
      description: 'Get expert guidance on your financial prospects, business opportunities, and investment timing through detailed astrological analysis.',
      benefits: [
        'Identify best financial opportunities',
        'Plan investments at auspicious times',
        'Understand wealth patterns in your chart',
        'Business growth predictions'
      ],
    },
    {
      name: 'Health Medical Astrology',
      slug: 'health-medical-astrology',
      description: 'Understand your health patterns, potential health issues, and preventive measures through medical astrology and planetary influences.',
      benefits: [
        'Health pattern analysis',
        'Preventive health guidance',
        'Medical timing for treatments',
        'Wellness and healing remedies'
      ],
    },
    {
      name: 'Kundli Analysis',
      slug: 'kundli-analysis',
      description: 'Complete birth chart analysis for newborns and children. Understand their future, education, health, and personality traits.',
      benefits: [
        'Birth chart reading',
        'Education and career guidance',
        'Health and wellness predictions',
        'Personality and traits analysis'
      ],
    },
    {
      name: 'Vastu Shastra Consultation',
      slug: 'vastu-shastra-consultation',
      description: 'Expert guidance for home and office layout to enhance positive energy, prosperity, and harmony in your living and working spaces.',
      benefits: [
        'Optimize energy flow in your space',
        'Enhance prosperity and success',
        'Improve health and relationships',
        'Remedies for Vastu doshas'
      ],
    },
    {
      name: 'Kundli Matching',
      slug: 'kundli-matching',
      description: 'Professional horoscope matching for marriage compatibility. Detailed analysis of gun milan, doshas, and planetary compatibility.',
      benefits: [
        'Comprehensive gun milan analysis',
        'Dosha checking and remedies',
        'Planetary compatibility study',
        'Marriage timing guidance'
      ],
    },
    {
      name: 'Gemstone Recommendation',
      slug: 'gemstone-recommendation',
      description: 'Expert recommendations for gemstones based on your birth chart to enhance planetary influences and bring positive changes.',
      benefits: [
        'Personalized gemstone suggestions',
        'Planetary remedies and solutions',
        'Mantras and rituals guidance',
        'Enhance positive energy flow'
      ],
    },
    // Additional services
    {
      name: 'Finance Astrology',
      slug: 'finance-astrology',
      description: 'Detailed financial astrology analysis for wealth, investments, and monetary decisions based on your birth chart.',
      benefits: [
        'Wealth pattern analysis',
        'Investment timing guidance',
        'Financial planning insights',
        'Money management remedies'
      ],
    },
    {
      name: 'Medical Astrology',
      slug: 'medical-astrology',
      description: 'Health and medical guidance through astrological analysis. Understand health patterns and preventive measures.',
      benefits: [
        'Health predictions',
        'Medical timing analysis',
        'Preventive health measures',
        'Healing remedies'
      ],
    },
    {
      name: 'Marriage Astrology',
      slug: 'marriage-astrology',
      description: 'Comprehensive marriage astrology services including compatibility, timing, and relationship guidance.',
      benefits: [
        'Marriage timing predictions',
        'Compatibility analysis',
        'Relationship guidance',
        'Marriage remedies'
      ],
    },
    {
      name: 'Child Astrology',
      slug: 'child-astrology',
      description: 'Birth chart analysis for children including education, health, career, and personality predictions.',
      benefits: [
        'Child birth chart reading',
        'Education guidance',
        'Health predictions',
        'Future career insights'
      ],
    },
    {
      name: 'Love Compatibility Analysis',
      slug: 'love-compatibility-analysis',
      description: 'Detailed love and relationship compatibility analysis using Vedic astrology principles.',
      benefits: [
        'Relationship compatibility',
        'Love timing predictions',
        'Harmony guidance',
        'Relationship remedies'
      ],
    },
    {
      name: 'Matchmaking (Kundali Milan)',
      slug: 'matchmaking-kundali-milan',
      description: 'Professional matchmaking services with detailed Kundali Milan (horoscope matching) for marriage compatibility.',
      benefits: [
        'Gun milan analysis',
        'Dosha checking',
        'Compatibility scoring',
        'Remedy suggestions'
      ],
    },
    {
      name: 'Relationship Problem Solutions',
      slug: 'relationship-problem-solutions',
      description: 'Astrological solutions for relationship problems, conflicts, and harmony restoration.',
      benefits: [
        'Problem analysis',
        'Conflict resolution guidance',
        'Harmony restoration',
        'Relationship remedies'
      ],
    },
    {
      name: 'Divorce / Separation Astrology',
      slug: 'divorce-separation-astrology',
      description: 'Astrological guidance for divorce, separation, and relationship dissolution decisions.',
      benefits: [
        'Timing analysis',
        'Decision guidance',
        'Legal timing predictions',
        'Post-separation remedies'
      ],
    },
    {
      name: 'Property & Vehicle Muhurat',
      slug: 'property-vehicle-muhurat',
      description: 'Select auspicious timing for property purchase, vehicle purchase, and related investments.',
      benefits: [
        'Property muhurat selection',
        'Vehicle purchase timing',
        'Investment timing',
        'Auspicious date selection'
      ],
    },
    {
      name: 'House / Office Energy Correction',
      slug: 'house-office-energy-correction',
      description: 'Energy correction services for homes and offices using Vastu and astrological principles.',
      benefits: [
        'Energy flow optimization',
        'Vastu corrections',
        'Positive energy enhancement',
        'Remedy implementation'
      ],
    },
    {
      name: 'Puja & Ritual Remedies',
      slug: 'puja-ritual-remedies',
      description: 'Personalized Puja and ritual remedies based on your birth chart and planetary positions.',
      benefits: [
        'Customized Puja suggestions',
        'Ritual guidance',
        'Remedy implementation',
        'Spiritual enhancement'
      ],
    },
    {
      name: 'Dosha Analysis (Mangal / Kaal Sarp / Pitra)',
      slug: 'dosha-analysis',
      description: 'Comprehensive dosha analysis including Mangal Dosha, Kaal Sarp Dosha, and Pitra Dosha with remedies.',
      benefits: [
        'Complete dosha analysis',
        'Dosha impact assessment',
        'Remedy suggestions',
        'Dosha mitigation guidance'
      ],
    },
    {
      name: 'Numerology Consultation',
      slug: 'numerology-consultation',
      description: 'Numerology analysis and guidance based on your name and birth date for life path insights.',
      benefits: [
        'Life path number analysis',
        'Name numerology',
        'Lucky numbers guidance',
        'Numerology remedies'
      ],
    },
    {
      name: 'Business / Startup Astrology',
      slug: 'business-startup-astrology',
      description: 'Astrological guidance for business startups, partnerships, and business growth strategies.',
      benefits: [
        'Startup timing analysis',
        'Business partnership compatibility',
        'Growth predictions',
        'Business remedies'
      ],
    },
    {
      name: 'Education & Study Astrology',
      slug: 'education-study-astrology',
      description: 'Educational astrology guidance for students including course selection, exam timing, and academic success.',
      benefits: [
        'Course selection guidance',
        'Exam timing predictions',
        'Academic success remedies',
        'Study direction insights'
      ],
    },
    {
      name: 'Foreign Settlement Astrology',
      slug: 'foreign-settlement-astrology',
      description: 'Astrological guidance for foreign travel, settlement abroad, and migration timing.',
      benefits: [
        'Travel timing predictions',
        'Settlement guidance',
        'Migration timing',
        'Foreign success remedies'
      ],
    },
    {
      name: 'Kundali Correction & Rectification',
      slug: 'kundali-correction-rectification',
      description: 'Professional Kundali correction and rectification services for accurate birth chart analysis.',
      benefits: [
        'Birth time correction',
        'Chart rectification',
        'Accurate predictions',
        'Chart validation'
      ],
    },
    {
      name: 'Spiritual Growth & Life Purpose Reading',
      slug: 'spiritual-growth-life-purpose',
      description: 'Spiritual astrology guidance for personal growth, life purpose, and spiritual development.',
      benefits: [
        'Life purpose identification',
        'Spiritual path guidance',
        'Personal growth insights',
        'Spiritual remedies'
      ],
    },
    {
      name: 'Health & Lifestyle Remedies',
      slug: 'health-lifestyle-remedies',
      description: 'Personalized health and lifestyle remedies based on astrological analysis for better wellbeing.',
      benefits: [
        'Health improvement remedies',
        'Lifestyle adjustments',
        'Wellness guidance',
        'Preventive measures'
      ],
    },
    {
      name: 'Yearly & Monthly Predictions',
      slug: 'yearly-monthly-predictions',
      description: 'Detailed yearly and monthly predictions based on your birth chart and planetary transits.',
      benefits: [
        'Annual predictions',
        'Monthly forecasts',
        'Important event timing',
        'Planetary influence guidance'
      ],
    },
    {
      name: 'Tarot Reading (Optional)',
      slug: 'tarot-reading',
      description: 'Tarot card reading services for additional insights and guidance on life questions.',
      benefits: [
        'Card reading insights',
        'Question guidance',
        'Future insights',
        'Decision support'
      ],
    },
    {
      name: 'Palmistry Consultation',
      slug: 'palmistry-consultation',
      description: 'Professional palmistry consultation for life predictions, personality analysis, and future insights.',
      benefits: [
        'Life line analysis',
        'Personality insights',
        'Future predictions',
        'Career and health guidance'
      ],
    },
    {
      name: 'Name Correction as per Numerology',
      slug: 'name-correction-numerology',
      description: 'Name correction and suggestions based on numerology principles for positive life changes.',
      benefits: [
        'Name analysis',
        'Correction suggestions',
        'Numerology benefits',
        'Life improvement guidance'
      ],
    },
    {
      name: 'Career Counseling through Astrology',
      slug: 'career-counseling-astrology',
      description: 'Astrology-based career counseling for job selection, career changes, and professional growth.',
      benefits: [
        'Career path identification',
        'Job change timing',
        'Professional growth guidance',
        'Career remedies'
      ],
    },
    {
      name: 'Muhurat Selection for Marriage & Events',
      slug: 'muhurat-selection',
      description: 'Auspicious timing selection for marriage, events, and important ceremonies.',
      benefits: [
        'Marriage muhurat',
        'Event timing selection',
        'Auspicious date finding',
        'Ceremony timing guidance'
      ],
    },
    {
      name: 'Planetary Transit (Gochar) Analysis',
      slug: 'planetary-transit-gochar',
      description: 'Analysis of planetary transits and their effects on your life, career, and relationships.',
      benefits: [
        'Transit impact analysis',
        'Period predictions',
        'Remedy suggestions',
        'Timing guidance'
      ],
    },
    {
      name: 'Rahu–Ketu / Shani Dosh Remedies',
      slug: 'rahu-ketu-shani-dosh-remedies',
      description: 'Specialized remedies for Rahu-Ketu Dosha and Shani Dosha to mitigate negative effects.',
      benefits: [
        'Dosha analysis',
        'Personalized remedies',
        'Mitigation strategies',
        'Positive energy enhancement'
      ],
    },
    {
      name: 'Lal Kitab Consultation',
      slug: 'lal-kitab-consultation',
      description: 'Lal Kitab astrology consultation for unique remedies and solutions based on traditional principles.',
      benefits: [
        'Lal Kitab analysis',
        'Unique remedy suggestions',
        'Traditional solutions',
        'Problem resolution'
      ],
    },
    {
      name: 'Horoscope Matching for Business Partnerships',
      slug: 'business-partnership-matching',
      description: 'Horoscope matching for business partnerships and professional collaborations.',
      benefits: [
        'Partnership compatibility',
        'Business timing analysis',
        'Collaboration guidance',
        'Success predictions'
      ],
    },
    {
      name: 'Birth Chart Preparation & Explanation',
      slug: 'birth-chart-preparation',
      description: 'Professional birth chart preparation and detailed explanation of all planetary positions and aspects.',
      benefits: [
        'Accurate chart preparation',
        'Detailed explanations',
        'Planetary position analysis',
        'Chart interpretation'
      ],
    },
    {
      name: 'Personalized Life Report (Detailed Kundali Report)',
      slug: 'personalized-life-report',
      description: 'Comprehensive personalized life report with detailed Kundali analysis and predictions.',
      benefits: [
        'Complete life analysis',
        'Detailed predictions',
        'Comprehensive report',
        'Life guidance insights'
      ],
    },
    {
      name: 'Remedy Suggestion (Mantra / Yantra Guidance)',
      slug: 'remedy-suggestion-mantra-yantra',
      description: 'Personalized remedy suggestions including mantras, yantras, and spiritual practices.',
      benefits: [
        'Mantra recommendations',
        'Yantra guidance',
        'Spiritual practices',
        'Remedy implementation'
      ],
    },
    {
      name: 'Lucky Color / Gem / Number Suggestion',
      slug: 'lucky-color-gem-number',
      description: 'Personalized suggestions for lucky colors, gemstones, and numbers based on your birth chart.',
      benefits: [
        'Lucky color identification',
        'Gemstone suggestions',
        'Lucky number guidance',
        'Positive energy enhancement'
      ],
    },
    {
      name: 'Life Problem Astrology (All-purpose solution reading)',
      slug: 'life-problem-astrology',
      description: 'Comprehensive astrology reading for all life problems and challenges with holistic solutions.',
      benefits: [
        'Problem identification',
        'Root cause analysis',
        'Holistic solutions',
        'Life improvement guidance'
      ],
    },
    {
      name: 'Annual Horoscope (Varshaphal)',
      slug: 'annual-horoscope-varshaphal',
      description: 'Detailed annual horoscope (Varshaphal) predictions based on your birth chart and planetary positions.',
      benefits: [
        'Yearly predictions',
        'Important events forecast',
        'Timing guidance',
        'Remedy suggestions'
      ],
    },
    {
      name: 'Planet Strength (Graha Bala) Analysis',
      slug: 'planet-strength-graha-bala',
      description: 'Detailed analysis of planetary strength and influences in your birth chart.',
      benefits: [
        'Planetary strength assessment',
        'Influence analysis',
        'Remedy suggestions',
        'Balance enhancement'
      ],
    },
  ]

  const services = showAllServices ? allServices : allServices.slice(0, 9)

  return (
    <>
      <SEO url="/" />
      {/* Hero Section */}
      <div className="pt-28 md:pt-32">
        <HeroSlider />
      </div>

      {/* About Preview Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-white to-primary/5 relative overflow-hidden -mt-4">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center relative inline-block w-full px-4">
              <span className="relative z-10">{t('home.about.title')}</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-0 transform -skew-x-12"></span>
            </h2>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-primary/20 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 w-full">
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <p className="text-gray-800 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl">
                  {t('home.about.description1')}
                </p>

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                  {t('home.about.description2')}
                </p>

                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

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
                      <div className="text-gray-700 font-semibold text-xs md:text-sm">{t('home.about.experience')}</div>
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
                      <div className="text-gray-700 font-semibold text-xs md:text-sm">{t('home.about.clients')}</div>
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
                      <div className="text-gray-700 font-semibold text-xs md:text-sm">{t('home.about.rating')}</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="text-center mt-6 mb-0 pb-0">
              <Link
                to="/about"
                className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                {t('home.about.readFullStory')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-8 md:pt-12 pb-12 md:pb-16 bg-white -mt-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
              {t('home.services.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} showCallAndWhatsApp={true} />
            ))}
          </div>

          <div className="text-center">
            {!showAllServices ? (
              <button
                onClick={() => setShowAllServices(true)}
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t('home.services.viewMore')}
              </button>
            ) : (
              <Link
                to="/services"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t('home.services.viewAll')}
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsCarousel />

      {/* Featured In Section */}
      <FeaturedIn />

      {/* FAQ Section */}
      <FAQ />

      {/* Location Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.location.title')}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-2xl mx-auto">
              {t('home.location.description')}
            </p>
            <div className="bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 mb-1">{t('home.location.address')}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      Brahma kumari Gate, Shuklaha Road<br />
                      near Shiva Shakti Marriage Hall<br />
                      Mirzapur-cum-Vindhyachal, Uttar Pradesh 231001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 mb-1">{t('home.location.contact')}</h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      Phone: <a href="tel:+919323600011" className="text-primary hover:underline">+91 93236 00011</a><br />
                      WhatsApp: <a href={`https://wa.me/${import.meta.env.VITE_WA_NUMBER || '919323600011'}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Message Us</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">{t('home.location.servingAreas')}:</span> {t('home.location.servingAreasText')}
                </p>
              </div>
              <div className="mt-6">
                <iframe
                  title="Guru Kripa Astrologer Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5!2d82.5694!3d25.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf51%3A0x887d69c8e0c4b5b5!2sBrahma%20Kumari%20Gate%2C%20Shuklaha%20Road%2C%20near%20Shiva%20Shakti%20Marriage%20Hall%2C%20Mirzapur-cum-Vindhyachal%2C%20Uttar%20Pradesh%20231001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full rounded-xl border border-gray-200 h-64 md:h-72"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg px-4">
              {t('home.cta.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 text-white/95 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow-md px-4">
              {t('home.cta.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 px-4">
              <Link
                to="/book"
                className="group bg-white text-primary px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105 transform duration-300 flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{t('home.cta.bookNow')}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href={`https://wa.me/${import.meta.env.VITE_WA_NUMBER || '919323600011'}?text=${encodeURIComponent('नमस्ते! मैं एक परामर्श बुक करना चाहता हूं।')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all shadow-2xl hover:shadow-3xl hover:scale-105 transform duration-300 flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>WhatsApp Us</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home

