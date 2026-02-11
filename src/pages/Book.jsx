import { useSearchParams } from 'react-router-dom'
import BookingForm from '../components/BookingForm'
import ReviewsCarousel from '../components/ReviewsCarousel'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { createBreadcrumbSchema } from '../utils/seo'
import { useTranslation } from 'react-i18next'

const Book = () => {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const serviceParam = searchParams.get('service') || ''

  const phoneNumber = import.meta.env.VITE_PHONE || '+919323600011'
  const waNumber = import.meta.env.VITE_WA_NUMBER || '919323600011'
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('नमस्ते! मैं एक परामर्श बुक करना चाहता हूं।')}`
  const siteOrigin = import.meta.env.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '')
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: `${siteOrigin}/` },
    { name: 'Book Consultation', item: `${siteOrigin}/book` },
  ])

  return (
    <div className="pt-36 pb-16 min-h-screen bg-gray-50">
      <SEO
        title="Book Astrology Consultation in Navi Mumbai, Kharghar | Pandit Gulabchand"
        description="Book astrology consultation with Pandit Gulabchand in Navi Mumbai, Kharghar. In-person and online consultations available. Located in Sector 20, Kharghar. Expert Vedic astrology, Kundali reading, and Vastu services."
        url="/book"
        structuredData={breadcrumbSchema}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('book.title')}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('book.subtitle')}
            </p>
          </motion.div>

          {/* Quick Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
          >
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg flex items-center justify-center gap-3 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span className="font-medium">{t('book.whatsappUs')}</span>
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="bg-primary hover:bg-primary/90 text-secondary px-6 py-4 rounded-lg flex items-center justify-center gap-3 transition-colors font-semibold"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">{t('book.callUs')}</span>
            </a>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <BookingForm defaultService={serviceParam} />
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6"
          >
            <h3 className="font-semibold text-gray-900 mb-3">{t('book.whatToExpect')}</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>{t('book.expect1')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>{t('book.expect2')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>{t('book.expect3')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>{t('book.expect4')}</span>
              </li>
            </ul>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 text-center text-sm text-gray-600"
          >
            <p>
              <strong>{t('book.businessHours')}</strong> {t('book.businessHoursTime')}
            </p>
            <p className="mt-2">
              {t('book.urgentConsultation')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Testimonials Section */}
      <ReviewsCarousel />
    </div>
  )
}

export default Book

