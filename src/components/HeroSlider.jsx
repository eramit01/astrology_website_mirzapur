import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Keyboard } from 'swiper/modules'
import 'swiper/css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const HeroSlider = ({ slides = [] }) => {
  const { t } = useTranslation()
  const phoneNumber = import.meta.env.VITE_PHONE || '+919323600011'
  const waNumber = import.meta.env.VITE_WA_NUMBER || '919323600011'
  const [imageErrors, setImageErrors] = useState({})

  // Astrology-themed gradient backgrounds as fallback
  const gradientBackgrounds = [
    'linear-gradient(135deg, #e3d09c 0%, #d4c08a 50%, #000000 100%)', // Primary to secondary
    'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #0f2027 100%)', // Deep blue cosmic
    'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)', // Dark cosmic
  ]

  const defaultSlides = [
    {
      // Professional astrology chart / kundali theme
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80&auto=format',
      fallbackGradient: gradientBackgrounds[0],
      headline: t('hero.slide1.headline'),
      subheadline: t('hero.slide1.subheadline'),
      ctas: ['phone', 'whatsapp'],
      showServices: true, // Show service buttons only on first slide
    },
    {
      // Starry night sky - cosmic astrology
      image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80&auto=format',
      fallbackGradient: gradientBackgrounds[1],
      headline: t('hero.slide2.headline'),
      subheadline: t('hero.slide2.subheadline'),
      ctas: ['phone', 'whatsapp'],
    },
    {
      // Galaxy/nebula - spiritual guidance
      image: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1920&q=80&auto=format',
      fallbackGradient: gradientBackgrounds[2],
      headline: t('hero.slide3.headline'),
      subheadline: t('hero.slide3.subheadline'),
      ctas: ['phone', 'whatsapp'],
    },
  ]

  const slidesToUse = slides.length > 0 ? slides : defaultSlides

  const getCtaUrl = (type) => {
    if (type === 'book') return '/book'
    if (type === 'whatsapp') return `https://wa.me/${waNumber}?text=${encodeURIComponent('नमस्ते! मैं आपकी वेबसाइट से आया हूं। मुझे ज्योतिष परामर्श में रुचि है। कृपया मेरी मदद करें।')}`
    if (type === 'phone') return `tel:${phoneNumber}`
    return '#'
  }

  const getCtaLabel = (type) => {
    if (type === 'book') return t('hero.cta.bookNow')
    if (type === 'whatsapp') return t('hero.cta.whatsapp')
    if (type === 'phone') return t('hero.cta.callNow')
    return t('hero.cta.learnMore')
  }

  return (
    <Swiper
      modules={[Autoplay, Keyboard]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      speed={500}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        waitForTransition: false,
      }}
      navigation={false}
      keyboard={{ enabled: true }}
      className="h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen w-full"
      aria-label="Hero image slider"
    >
      {slidesToUse.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen w-full"
            style={{
              backgroundImage: imageErrors[index]
                ? slide.fallbackGradient || gradientBackgrounds[index]
                : `url(${slide.image})`,
              backgroundColor: '#1a1a2e', // Fallback dark color for astrology theme
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Hidden img for error handling */}
            <img
              src={slide.image}
              alt=""
              className="hidden"
              onError={() => {
                // Mark this image as failed and use gradient fallback
                setImageErrors((prev) => ({ ...prev, [index]: true }))
              }}
              onLoad={() => {
                // Clear error if image loads successfully
                setImageErrors((prev) => {
                  const newErrors = { ...prev }
                  delete newErrors[index]
                  return newErrors
                })
              }}
            />
            {/* Gradient Overlay - Enhanced for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60" />

            {/* Content - Centered */}
            <div className="relative container mx-auto h-full flex items-center justify-center px-2 sm:px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-7xl w-full text-center text-white px-2 sm:px-4 md:px-8"
              >
                {/* Headline with enhanced styling - responsive */}
                <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 md:mb-6 lg:mb-8 leading-tight drop-shadow-2xl">
                  <span className="bg-gradient-to-r from-white via-purple-100 to-purple-200 bg-clip-text text-transparent">
                    {slide.headline}
                  </span>
                </h1>
                
                {/* Subheadline with better styling - only show if subheadline exists */}
                {slide.subheadline && (
                  <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl mb-3 sm:mb-4 md:mb-6 lg:mb-10 text-gray-100 font-medium drop-shadow-lg max-w-3xl mx-auto leading-relaxed px-1">
                    {slide.subheadline}
                  </p>
                )}
                
                {/* Service Buttons - Only show on first slide */}
                {slide.showServices && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5 mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto px-2 sm:px-4"
                  >
                    {[
                      t('hero.services.horoscope'),
                      t('hero.services.finance'),
                      t('hero.services.marriage')
                    ].map((service, serviceIndex) => (
                      <motion.button
                        key={serviceIndex}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + serviceIndex * 0.1 }}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-white/25 backdrop-blur-md text-white border-2 border-white/40 rounded-full font-bold text-xs sm:text-sm md:text-base hover:bg-white/35 hover:border-white/60 hover:shadow-2xl transition-all duration-300 text-center"
                        title={service}
                      >
                        <span className="block">{service}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
                
                {/* Redesigned CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-5">
                  {slide.ctas.map((cta, ctaIndex) => (
                    <motion.a
                      key={ctaIndex}
                      href={getCtaUrl(cta)}
                      {...(cta === 'book' ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: slide.showServices ? 0.9 + ctaIndex * 0.1 : 0.4 + ctaIndex * 0.1 }}
                      className={`group relative px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 overflow-visible leading-normal ${
                        cta === 'whatsapp'
                          ? 'bg-green-500 hover:bg-green-600 text-white shadow-2xl shadow-green-500/50 hover:shadow-green-600/70'
                          : cta === 'phone'
                          ? 'bg-primary hover:bg-primary/90 text-secondary shadow-2xl shadow-primary/50 hover:shadow-primary/70'
                          : cta === 'book'
                          ? 'bg-primary text-secondary shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:bg-primary/90'
                          : 'bg-white/20 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/30 hover:border-white/50 shadow-xl'
                      }`}
                    >
                      {/* Animated background effect for primary button */}
                      {cta === 'book' && (
                        <span className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                      
                      {/* Button content */}
                      <span className="relative flex items-center justify-center gap-1 sm:gap-2 leading-normal">
                        {cta === 'whatsapp' && (
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                        )}
                        {cta === 'phone' && (
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        )}
                        {cta === 'book' && (
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        )}
                        <span className="leading-normal">{getCtaLabel(cta)}</span>
                        {/* Arrow icon for hover effect */}
                        {cta !== 'whatsapp' && cta !== 'phone' && (
                          <svg 
                            className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        )}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HeroSlider

