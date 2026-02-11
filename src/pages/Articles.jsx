import { useState } from 'react'
import { Link } from 'react-router-dom'
import ReviewsCarousel from '../components/ReviewsCarousel'
import { motion } from 'framer-motion'
import { getAllArticles } from '../data/articles'
import SEO from '../components/SEO'
import { createBreadcrumbSchema } from '../utils/seo'
import { useTranslation } from 'react-i18next'
import { getTranslatedArticle } from '../utils/articleTranslations'

const Articles = () => {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const allArticles = getAllArticles()
  const articles = allArticles.map(a => getTranslatedArticle(t, a)).sort((a, b) => new Date(b.date) - new Date(a.date))

  // Get unique categories
  const categories = ['All', ...new Set(allArticles.map(article => article.category))]

  // Filter articles by category (match against original category for filtering)
  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter((article) => {
        const originalArticle = allArticles.find(a => a.slug === article.slug)
        return originalArticle && originalArticle.category === selectedCategory
      })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  const siteOrigin = import.meta.env.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '')
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: `${siteOrigin}/` },
    { name: 'Articles', item: `${siteOrigin}/articles` },
  ])

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Astrology Articles & Blog - Mirzapur, Uttar Pradesh | Pandit Gulabchand"
        description="Read expert astrology articles and blog posts about Kundali reading, Vastu Shastra, marriage compatibility, career guidance, and remedies. Location-specific guides for Mirzapur-cum-Vindhyachal, Uttar Pradesh by Pandit Gulabchand."
        url="/articles"
        structuredData={breadcrumbSchema}
      />
      {/* Hero Section - Professional */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YTQgNCAwIDEgMSAwLTggNCA0IDAgMCAxIDAgOHptLTI0IDBhNCA0IDAgMSAxIDAtOCA0IDQgMCAwIDEgMCA4em0yOCA0YTQgNCAwIDEgMSAwLTggNCA0IDAgMCAxIDAgOHptLTggMjBhNCA0IDAgMSAxIDAtOCA0IDQgMCAwIDEgMCA4eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                {t('articles.knowledgeHub')}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              {t('articles.latestArticles')}
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              {t('articles.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-8 md:py-12 bg-white border-b border-gray-200 sticky top-20 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-secondary shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
                {category !== 'All' && (
                  <span className="ml-2 text-xs opacity-70">
                    ({articles.filter(a => a.category === category).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid Section - Premium Design */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col group"
                >
                  {/* Article Image */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80&auto=format'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-5 left-5">
                      <span className="bg-primary text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                        {article.category}
                      </span>
                    </div>
                    
                    {/* Date Badge */}
                    <div className="absolute top-5 right-5">
                      <div className="bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg">
                        <span className="text-xs font-semibold text-gray-700">{formatDate(article.date)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base flex-grow">
                      {article.excerpt}
                    </p>
                    <Link
                      to={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-base group/link"
                    >
                      <span>{t('articles.readArticle')}</span>
                      <svg 
                        className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">{t('articles.noArticles')}</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Professional */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YTQgNCAwIDEgMSAwLTggNCA0IDAgMCAxIDAgOHptLTI0IDBhNCA0IDAgMSAxIDAtOCA0IDQgMCAwIDEgMCA4em0yOCA0YTQgNCAwIDEgMSAwLTggNCA0IDAgMCAxIDAgOHptLTggMjBhNCA0IDAgMSAxIDAtOCA0IDQgMCAwIDEgMCA4eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        </div>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block mb-6">
              <span className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                {t('articles.getStarted')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              {t('articles.needGuidance')}
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-10 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
              {t('articles.ctaSubtitle')}
            </p>
            <a
              href={`https://wa.me/${import.meta.env.VITE_WA_NUMBER || '919323600011'}?text=${encodeURIComponent('नमस्ते! मैं पंडित गुलाबचंद के साथ एक परामर्श बुक करना चाहता हूं।')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-secondary px-10 md:px-12 py-4 md:py-5 rounded-xl font-bold text-base sm:text-lg md:text-xl hover:bg-primary/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 group"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>{t('articles.bookConsultation')}</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
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

export default Articles
