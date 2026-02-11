import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { getTranslatedService } from '../utils/serviceTranslations'

const ServiceCard = ({ service, index = 0, showCallAndWhatsApp = false }) => {
  const { t } = useTranslation()
  const translatedService = getTranslatedService(t, service)
  const phoneNumber = import.meta.env.VITE_PHONE || '+919323600011'
  const waNumber = import.meta.env.VITE_WA_NUMBER || '919323600011'

  // Service-specific WhatsApp messages
  const getWhatsAppMessage = (serviceName) => {
    return `नमस्ते! मैं आपकी वेबसाइट से आया हूं। मुझे ${serviceName} सेवा में रुचि है। कृपया मेरी मदद करें।`
  }

  // Service-specific WhatsApp messages for booking
  const getBookingWhatsAppMessage = (serviceName) => {
    return `नमस्ते! मैं आपकी वेबसाइट से आया हूं। मुझे ${serviceName} सेवा बुक करने में रुचि है। कृपया मुझे बुकिंग प्रक्रिया में मदद करें।`
  }

  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(getWhatsAppMessage(translatedService.name))}`
  const bookingWaUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(getBookingWhatsAppMessage(translatedService.name))}`
  const telUrl = `tel:${phoneNumber}`

  // Unique images for each service based on their purpose
  const getServiceImage = (serviceName) => {
    // First check if service has explicit image property
    if (service.image) {
      return service.image
    }

    // Map each service to a unique relevant image
    // Services Page Services
    const images = {
      // Services Page Services
      'Kundali Reading': 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80&auto=format',
      'Matchmaking': 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&q=80&auto=format',
      'Career Guidance': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format',
      'Financial Forecast': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format',
      'Vastu Consultation': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format',
      'Remedies & Solutions': 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&q=80&auto=format',
      'Gemstone Suggestion': '/servicesImg/download.jpeg',
      'Muhurat Selection': 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80&auto=format',
      'Panchang Reading': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80&auto=format',
      'Online Consultation': 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=80&auto=format',
      'In-person Consultation': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80&auto=format',
      'Numerology Consultation': 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80&auto=format',
      
      // Home Page Services - Unique images for each
      'Horoscope Analysis': 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80&auto=format',
      'Marriage And Love Compatibility': 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&q=80&auto=format',
      'Career & Job Astrology': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format',
      'Finance & Business Astrology': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format',
      'Health Medical Astrology': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80&auto=format',
      'Kundli Analysis': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80&auto=format',
      'Vastu Shastra Consultation': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format',
      'Kundli Matching': 'https://images.unsplash.com/photo-1522673607200-164f1f0c8b3a?w=800&q=80&auto=format',
      'Gemstone Recommendation': '/servicesImg/download.jpeg',
      'Finance Astrology': 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80&auto=format',
      'Medical Astrology': 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&q=80&auto=format',
      'Marriage Astrology': 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format',
      'Child Astrology': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80&auto=format',
      'Love Compatibility Analysis': 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80&auto=format',
      'Matchmaking (Kundali Milan)': 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&q=80&auto=format',
      'Relationship Problem Solutions': 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format',
      'Divorce / Separation Astrology': 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format',
      'Vastu Consultation': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format',
      'Property & Vehicle Muhurat': 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80&auto=format',
      'House / Office Energy Correction': 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80&auto=format',
      'Puja & Ritual Remedies': 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&q=80&auto=format',
      'Dosha Analysis (Mangal / Kaal Sarp / Pitra)': 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&q=80&auto=format',
      'Numerology Consultation': 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80&auto=format',
      'Business / Startup Astrology': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format',
      'Education & Study Astrology': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80&auto=format',
      'Foreign Settlement Astrology': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80&auto=format',
      'Kundali Correction & Rectification': 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80&auto=format',
      'Spiritual Growth & Life Purpose Reading': 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&q=80&auto=format',
      'Health & Lifestyle Remedies': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format',
      'Yearly & Monthly Predictions': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80&auto=format',
      'Tarot Reading (Optional)': 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&q=80&auto=format',
      'Palmistry Consultation': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80&auto=format',
      'Name Correction as per Numerology': 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80&auto=format',
      'Career Counseling through Astrology': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format',
      'Muhurat Selection for Marriage & Events': 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80&auto=format',
      'Planetary Transit (Gochar) Analysis': 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80&auto=format',
      'Horoscope Matching for Business Partnerships': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format',
      'Birth Chart Preparation & Explanation': 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80&auto=format',
      'Personalized Life Report (Detailed Kundali Report)': 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80&auto=format',
      'Remedy Suggestion (Mantra / Yantra Guidance)': 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&q=80&auto=format',
      'Lucky Color / Gem / Number Suggestion': 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&q=80&auto=format',
      'Life Problem Astrology (All-purpose solution reading)': 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80&auto=format',
      'Annual Horoscope (Varshaphal)': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80&auto=format',
      'Planet Strength (Graha Bala) Analysis': 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80&auto=format',
    }
    
    return images[serviceName] || 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80&auto=format'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2 flex flex-col h-full"
      style={{
        boxShadow: '0 10px 30px -5px rgba(227, 208, 156, 0.3), 0 10px 15px -5px rgba(227, 208, 156, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 20px 40px -5px rgba(227, 208, 156, 0.6), 0 15px 25px -5px rgba(227, 208, 156, 0.4), 0 10px 10px -5px rgba(227, 208, 156, 0.3)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(227, 208, 156, 0.3), 0 10px 15px -5px rgba(227, 208, 156, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      }}
    >
      {/* Service Image */}
      <div className="relative h-48 md:h-56 overflow-hidden flex-shrink-0">
        <img
          src={getServiceImage(service.name)}
          alt={translatedService.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80&auto=format'
          }}
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
        {/* Service Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">{translatedService.name}</h3>
        
        {/* Description */}
        <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{translatedService.description}</p>

        {/* Benefits */}
        {translatedService.benefits && translatedService.benefits.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">{t('common.benefits')}</h4>
            <ul className="space-y-1">
              {translatedService.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}


        {/* CTA Buttons */}
        <div className={`mt-auto pt-4 sm:pt-6 ${showCallAndWhatsApp ? 'flex flex-col sm:flex-row gap-2 sm:gap-3' : ''}`}>
          {showCallAndWhatsApp ? (
            // Home page version: Call and WhatsApp buttons
            <>
              <a
                href={telUrl}
                className="flex-1 bg-primary hover:bg-primary/90 text-secondary px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base text-center transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{t('common.callNow')}</span>
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base text-center transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>{t('common.whatsapp')}</span>
              </a>
            </>
          ) : (
            // Services page version: Only Book Now button (redirects to WhatsApp)
            <a
              href={bookingWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary hover:bg-primary/90 text-secondary px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base text-center transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>{t('common.bookNow')}</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard

