/**
 * SEO utility functions
 * Updates meta tags and document title for better SEO
 */

export const updateSEO = ({ title, description, image, url }) => {
  // Update document title
  if (title) {
    document.title = title
  }

  // Update or create meta tags
  const updateMetaTag = (name, content, isProperty = false) => {
    if (!content) return

    const attribute = isProperty ? 'property' : 'name'
    let element = document.querySelector(`meta[${attribute}="${name}"]`)

    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attribute, name)
      document.head.appendChild(element)
    }

    element.setAttribute('content', content)
  }

  // Basic meta tags
  updateMetaTag('description', description)
  updateMetaTag('keywords', 'astrology Mirzapur, best astrologer Mirzapur, kundali reading Mirzapur, vedic astrology Mirzapur, vastu consultant Mirzapur, remedies Mirzapur, numerology Mirzapur, pandit Gulabchand, astrology consultation Mirzapur, jyotish Mirzapur, horoscope reading Mirzapur, marriage astrology Mirzapur, career astrology Mirzapur, business astrology Mirzapur, astrologer in Uttar Pradesh, best astrologer Vindhyachal')

  // Open Graph tags
  updateMetaTag('og:title', title, true)
  updateMetaTag('og:description', description, true)
  updateMetaTag('og:image', image, true)
  updateMetaTag('og:url', url, true)
  updateMetaTag('og:type', 'website', true)

  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image', true)
  updateMetaTag('twitter:title', title, true)
  updateMetaTag('twitter:description', description, true)
  updateMetaTag('twitter:image', image, true)

  // Canonical URL
  let canonical = document.querySelector('link[rel="canonical"]')
  if (url) {
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)
  }
}

export const generateStructuredData = (data) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://gurukripajyotishkendra.in'
  const phone = import.meta.env.VITE_PHONE || '+919323600011'

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: data.name || 'Pandit Gulabchand - Best Astrologer in Mirzapur, Uttar Pradesh',
    description: data.description || 'Professional astrology consultation services in Mirzapur-cum-Vindhyachal, Uttar Pradesh. Expert Vedic astrology, Kundali reading, Vastu Shastra, and Gemstone consultancy with 30+ years of experience.',
    url: siteUrl,
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Brahma kumari Gate, Shuklaha Road, near Shiva Shakti Marriage Hall',
      addressLocality: 'Mirzapur-cum-Vindhyachal',
      addressRegion: 'Uttar Pradesh',
      postalCode: '231001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.1458',
      longitude: '82.5694',
    },
    areaServed: {
      '@type': 'City',
      name: 'Mirzapur-cum-Vindhyachal',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '09:00',
      closes: '20:00',
    },
    ...data,
  }

  return structuredData
}

export const generateLocalBusinessSchema = ({ description, url, ...data }) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://gurukripajyotishkendra.in'
  const phone = import.meta.env.VITE_PHONE || '+919323600011'

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Pandit Gulabchand - Best Astrologer in Mirzapur, Uttar Pradesh',
    description: description || 'Professional astrology consultation services in Mirzapur-cum-Vindhyachal, Uttar Pradesh. Expert Vedic astrology, Kundali reading, Vastu Shastra, and Gemstone consultancy with 30+ years of experience.',
    url: url || siteUrl,
    telephone: phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Brahma kumari Gate, Shuklaha Road, near Shiva Shakti Marriage Hall',
      addressLocality: 'Mirzapur-cum-Vindhyachal',
      addressRegion: 'Uttar Pradesh',
      postalCode: '231001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.1458',
      longitude: '82.5694',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Mirzapur-cum-Vindhyachal',
      },
      {
        '@type': 'City',
        name: 'Varanasi',
      },
      {
        '@type': 'City',
        name: 'Allahabad',
      },
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '09:00',
      closes: '20:00',
    },
    ...data,
  }
}

export const createBreadcrumbSchema = (items) => {
  if (!Array.isArray(items) || items.length === 0) {
    return null
  }

  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://gurukripajyotishkendra.in'

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item || `${siteUrl}${item.path || ''}`,
    })),
  }
}

export const createArticleSchema = ({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = 'Pandit Gulabchand',
  keywords = [],
  articleSection = 'Astrology',
}) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://gurukripajyotishkendra.in'

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: headline,
    description: description,
    image: image || `${siteUrl}/logo/logo1.png`,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Guru Kripa Astrologer',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo/logo1.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: keywords.join(', '),
    articleSection: articleSection,
  }
}


