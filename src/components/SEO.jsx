import { useEffect } from 'react'
import { updateSEO, generateLocalBusinessSchema } from '../utils/seo'

const defaultDescription =
  'Best astrologer in Mirzapur, Uttar Pradesh. Pandit Gulabchand offers expert Vedic astrology, Kundali reading, Vastu Shastra, and Gemstone consultancy. 30+ years experience. Book consultation now!'

const defaultTitle = 'Best Astrologer in Mirzapur, Uttar Pradesh | Pandit Gulabchand - 30+ Years Experience'

const getStructuredDataArray = ({ description, includeLocalBusiness, structuredData, siteUrl }) => {
  const snippets = []

  if (includeLocalBusiness) {
    snippets.push(
      generateLocalBusinessSchema({
        description,
        url: siteUrl,
      }),
    )
  }

  if (Array.isArray(structuredData)) {
    snippets.push(...structuredData.filter(Boolean))
  } else if (structuredData) {
    snippets.push(structuredData)
  }

  return snippets
}

const SEO = ({
  title,
  description = defaultDescription,
  image,
  url,
  type = 'website',
  structuredData,
  includeLocalBusiness = false,
  publishedTime,
  modifiedTime,
}) => {
  useEffect(() => {
    const siteOrigin = import.meta.env.VITE_SITE_URL || window.location.origin
    const fullUrl = url ? `${siteOrigin}${url}` : window.location.href
    const ogImage = image || `${siteOrigin}/logo/logo1.png`
    const computedTitle = title ? `${title} - Best Astrologer in Mirzapur | Pandit Gulabchand` : defaultTitle

    updateSEO({
      title: computedTitle,
      description,
      image: ogImage,
      url: fullUrl,
      type,
      publishedTime,
      modifiedTime,
    })

    const snippets = getStructuredDataArray({
      description,
      includeLocalBusiness,
      structuredData,
      siteUrl: fullUrl,
    })

    const existingDynamicScripts = document.querySelectorAll('script[data-seo="dynamic"]')
    existingDynamicScripts.forEach((node) => node.remove())

    const createdScripts = []

    snippets.forEach((data) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-seo', 'dynamic')
      script.text = JSON.stringify(data)
      document.head.appendChild(script)
      createdScripts.push(script)
    })

    return () => {
      createdScripts.forEach((script) => {
        if (script && script.parentNode) {
          script.parentNode.removeChild(script)
        }
      })
    }
  }, [title, description, image, url, type, structuredData, includeLocalBusiness, publishedTime, modifiedTime])

  return null
}

export default SEO