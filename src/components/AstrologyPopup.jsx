import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const AstrologyPopup = () => {
  const { i18n } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = import.meta.env.VITE_PHONE || '+919323600011'
  const waNumber = import.meta.env.VITE_WA_NUMBER || '919323600011'

  // Show popup only in Hindi language
  useEffect(() => {
    if (i18n.language === 'hi') {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000) // Show after 3 seconds

      return () => clearTimeout(timer)
    } else {
      setIsVisible(false)
    }
  }, [i18n.language])

  const handleClose = () => {
    setIsVisible(false)
  }

  const waMessage = encodeURIComponent('नमस्ते! मैं एक परामर्श बुक करना चाहता हूं।')
  const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`
  const telUrl = `tel:${phoneNumber}`

  if (!isVisible || i18n.language !== 'hi') return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[10000] backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Popup Card */}
      <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4">
        <div
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Title - Golden Background, Black Text */}
          <div className="bg-[#E3D09C] px-6 py-4 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-black">
              विशेषज्ञ ज्योतिषी से अभी बात करें
            </h3>
          </div>

          {/* Content */}
          <div className="px-6 py-5">
            {/* Subtitle with bold keywords */}
            <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
              <strong>प्रेम</strong>, <strong>विवाह</strong>, <strong>करियर</strong>, <strong>व्यापार</strong> और <strong>स्वास्थ्य</strong> के लिए सटीक मार्गदर्शन प्राप्त करें
            </p>

            {/* Experience Text with Tick - Very Low Golden Background */}
            <div className="bg-[#F5EED3] rounded-lg px-4 py-3 mb-5 flex items-start gap-3">
              <svg
                className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-gray-800 text-sm sm:text-base font-medium">
                30+ वर्षों के ज्योतिष अनुभव द्वारा समर्थित
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              {/* Call Now Button - Golden */}
              <a
                href={telUrl}
                className="flex-1 bg-[#E3D09C] hover:bg-[#D4C08A] text-black px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>अभी कॉल करें</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Features Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs sm:text-sm text-gray-700 font-medium">100% गोपनीय</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fillRule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs sm:text-sm text-gray-700 font-medium">हजारों द्वारा विश्वसनीय</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-orange-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs sm:text-sm text-gray-700 font-medium">त्वरित उपचार</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AstrologyPopup

