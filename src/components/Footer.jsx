import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  // Defaults updated per request; env vars still override if set
  const phoneNumber = import.meta.env.VITE_PHONE || '+919323600011'
  const waNumber = import.meta.env.VITE_WA_NUMBER || '919323600011'
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent('नमस्ते! मैं आपकी सेवाओं के बारे में अधिक जानना चाहता हूं।')}`
  const address = 'Brahma kumari Gate, Shuklaha Road, near Shiva Shakti Marriage Hall, Mirzapur-cum-Vindhyachal, Uttar Pradesh 231001'

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gray-900 text-white">
      {/* Background Image - Optional, can be added later */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/footer-bg.jpg')" }}
      ></div> */}

      {/* Footer Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-7xl">
        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* About Section */}
          <div className="flex flex-col items-start space-y-2 sm:space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-primary">Guru Kripa Astrologer</h2>
            <p className="text-gray-300 text-xs leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white">{t('footer.contact')}</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-300">
              <li className="flex items-start space-x-2 sm:space-x-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5c.4.13.68.5.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
                </svg>
                <a
                  href={`tel:${phoneNumber}`}
                  className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full text-sm sm:text-base"
                >
                  {phoneNumber}
                </a>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full text-sm sm:text-base"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8 2 4.5 5 4.5 9c0 5.25 7.5 13 7.5 13s7.5-7.75 7.5-13c0-4-3.5-7-7.5-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                <span className="text-sm sm:text-base leading-relaxed">
                  {address}
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links and Office Hours - Side by side on mobile */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:col-span-1 lg:col-span-1">
            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white">{t('footer.quickLinks')}</h3>
              <ul className="space-y-1.5 text-gray-300">
                <li>
                  <Link to="/" className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full text-sm sm:text-base">
                    {t('footer.home')}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full text-sm sm:text-base">
                    {t('footer.services')}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full text-sm sm:text-base">
                    {t('footer.about')}
                  </Link>
                </li>
                <li>
                  <Link to="/articles" className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full text-sm sm:text-base">
                    {t('footer.articles')}
                  </Link>
                </li>
                <li>
                  <Link to="/media" className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full text-sm sm:text-base">
                    {t('footer.media')}
                  </Link>
                </li>
                <li>
                  <Link to="/book" className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full text-sm sm:text-base">
                    {t('footer.bookNow')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Office Hours & Social Media */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white">{t('footer.hours')}</h3>
              <ul className="space-y-1.5 text-gray-300 mb-3 sm:mb-4">
                <li className="text-xs sm:text-sm">
                  <span className="font-medium">{t('footer.weekdays')}</span>
                  <div className="text-gray-400 mt-0.5 text-[10px] sm:text-xs">{t('footer.weekdaysTime')}</div>
                </li>
                <li className="text-xs sm:text-sm">
                  <span className="font-medium">{t('footer.sunday')}</span>
                  <div className="text-gray-400 mt-0.5 text-[10px] sm:text-xs">{t('footer.sundayTime')}</div>
                </li>
              </ul>

              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-white">{t('footer.followUs')}</h3>
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Facebook */}
                <div className="social-button">
                  <a
                    href="https://www.facebook.com/people/Pandit-Gulabchand-Maurya/100057486577659/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full group">
                      <div className="floater w-full h-full absolute top-0 left-0 bg-blue-500 rounded-full duration-300 group-hover:-top-4 sm:group-hover:-top-5 group-hover:shadow-2xl"></div>
                      <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-500 rounded-full">
                        <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:fill-gray-900 fill-white duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                    </button>
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="social-button">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full group">
                      <div className="floater w-full h-full absolute top-0 left-0 bg-green-500 rounded-full duration-300 group-hover:-top-4 sm:group-hover:-top-5 group-hover:shadow-2xl"></div>
                      <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-green-500 rounded-full">
                        <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:fill-gray-900 fill-white duration-300" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                        </svg>
                      </div>
                    </button>
                  </a>
                </div>

                {/* YouTube */}
                <div className="social-button">
                  <a
                    href="https://youtu.be/zydJKHnPm6w?si=UaOqk5PmOQPa72_N"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full group">
                      <div className="floater w-full h-full absolute top-0 left-0 bg-red-500 rounded-full duration-300 group-hover:-top-4 sm:group-hover:-top-5 group-hover:shadow-2xl"></div>
                      <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-red-500 rounded-full">
                        <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 group-hover:fill-gray-900 fill-white duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative text-center border-t border-gray-700 py-3 text-gray-400 text-xs sm:text-sm">
        © {currentYear} Guru Kripa Astrologer And Gemstones. {t('footer.copyright')}
      </div>
    </footer>
  )
}

export default Footer
