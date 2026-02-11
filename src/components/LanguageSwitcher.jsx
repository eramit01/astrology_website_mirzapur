import { useTranslation } from 'react-i18next'
import { useState, useRef, useEffect } from 'react'

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const buttonRef = useRef(null)

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  ]

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]
  
  // Show "Change Language" by default (English), or language name when changed
  const getButtonText = () => {
    // If language is English (default), show "Change Language"
    if (i18n.language === 'en') {
      return 'Change Language'
    }
    // If language is changed to Hindi, show language name
    return currentLanguage.name
  }

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Calculate dropdown position - position it above the NavBar (below TopHeader)
  const getDropdownPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      // TopHeader height: ~32-40px (py-1.5 sm:py-2 = ~24-32px + text height)
      // Position dropdown just below TopHeader, above NavBar
      const topHeaderHeight = window.innerWidth >= 640 ? 40 : 32
      const dropdownTop = topHeaderHeight + 8 // 8px gap below TopHeader
      
      return {
        top: dropdownTop,
        right: window.innerWidth - rect.right,
      }
    }
    // Fallback: position below TopHeader
    const fallbackTop = window.innerWidth >= 640 ? 48 : 40
    return { top: fallbackTop, right: 20 }
  }

  const position = isOpen ? getDropdownPosition() : { top: 0, right: 0 }

  return (
    <>
      <div className="relative" ref={buttonRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors text-xs sm:text-sm font-medium text-white z-[100] relative"
          aria-label="Change language"
        >
          {i18n.language !== 'en' && (
            <span className="text-sm sm:text-base flex-shrink-0">{currentLanguage.flag}</span>
          )}
          <span className="whitespace-nowrap">{getButtonText()}</span>
          <svg
            className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[9998] bg-black/20"
            onClick={() => setIsOpen(false)}
          />
          {/* Dropdown */}
          <div
            ref={dropdownRef}
            className="fixed w-44 bg-white rounded-lg shadow-2xl border-2 border-primary/30 z-[9999]"
            style={{
              top: `${position.top}px`,
              right: `${position.right}px`,
            }}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  i18n.language === lang.code ? 'bg-primary/10 text-primary font-semibold' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {i18n.language === lang.code && (
                  <svg
                    className="w-5 h-5 ml-auto text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default LanguageSwitcher

