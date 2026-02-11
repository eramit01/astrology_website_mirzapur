import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReviewsCarousel from '../components/ReviewsCarousel'
import { getArticleBySlug, getAllArticles } from '../data/articles'
import SEO from '../components/SEO'
import { createArticleSchema, createBreadcrumbSchema } from '../utils/seo'
import { useTranslation } from 'react-i18next'
import { getTranslatedArticle } from '../utils/articleTranslations'

const ArticleDetail = () => {
  const { t } = useTranslation()
  const { slug } = useParams()
  const navigate = useNavigate()
  const originalArticle = getArticleBySlug(slug)
  const article = originalArticle ? getTranslatedArticle(t, originalArticle) : null
  const allArticles = getAllArticles().map(a => getTranslatedArticle(t, a))

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = allArticles
    .filter(a => a.category === article?.category && a.slug !== slug)
    .slice(0, 3)

  const siteOrigin = import.meta.env.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '')
  const pageUrl = `${siteOrigin}/articles/${slug}`

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <SEO
          title="Article Not Found - Astrology Articles | Pandit Gulabchand"
          description="The requested article could not be found. Explore more astrology insights, guides, and remedies from Pandit Gulabchand."
          url={`/articles/${slug}`}
        />
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('articles.articleNotFound')}</h1>
          <p className="text-gray-600 mb-8 text-lg">{t('articles.articleNotFoundDesc')}</p>
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 bg-primary text-secondary px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('articles.backToArticles')}
          </Link>
        </div>
      </div>
    )
  }

  const publishedISO = new Date(article.date).toISOString()
  const structuredData = [
    createBreadcrumbSchema([
      { name: 'Home', item: `${siteOrigin}/` },
      { name: 'Articles', item: `${siteOrigin}/articles` },
      { name: article.title, item: pageUrl },
    ]),
    createArticleSchema({
      headline: article.title,
      description: article.excerpt,
      url: pageUrl,
      image: article.image,
      datePublished: publishedISO,
      dateModified: publishedISO,
      author: article.author || 'Pandit Gulabchand',
      keywords: [article.category, 'Astrology', 'Pandit Gulabchand'],
      articleSection: article.category,
    }),
  ].filter(Boolean)

  return (
    <div className="min-h-screen">
      <SEO
        title={`${article.title} - Astrology Articles | Pandit Gulabchand`}
        description={article.excerpt}
        url={`/articles/${slug}`}
        image={article.image}
        type="article"
        structuredData={structuredData}
        publishedTime={publishedISO}
        modifiedTime={publishedISO}
      />
      {/* Hero Section */}
      <section className="pt-36 pb-8 md:pb-12 bg-gradient-to-br from-primary/5 via-white to-primary/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link to="/" className="hover:text-primary transition-colors">{t('articles.home')}</Link>
                <span>/</span>
                <Link to="/articles" className="hover:text-primary transition-colors">{t('articles.articles')}</Link>
                <span>/</span>
                <span className="text-gray-900">{article.category}</span>
              </div>
            </nav>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="bg-primary text-secondary px-4 py-2 rounded-full text-sm font-bold">
                {article.category}
              </span>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              {article.title}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{formatDate(article.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>5 {t('articles.minRead')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-[400px] md:h-[500px] object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80&auto=format'
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg max-w-none"
            >
              <div 
                className="article-content text-gray-700 leading-relaxed text-base sm:text-lg"
                dangerouslySetInnerHTML={{ __html: article.content }}
                style={{
                  lineHeight: '1.8',
                }}
              />
            </motion.article>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 p-6 md:p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 rounded-2xl border border-primary/20"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t('articles.needGuidance')}
              </h3>
              <p className="text-gray-700 mb-6 text-base sm:text-lg">
                {t('articles.ctaSubtitle')}
              </p>
              <a
                href={`https://wa.me/${import.meta.env.VITE_WA_NUMBER || '919323600011'}?text=${encodeURIComponent('नमस्ते! मैं पंडित गुलाबचंद के साथ एक परामर्श बुक करना चाहता हूं।')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-secondary px-6 sm:px-8 md:px-10 py-3 md:py-3.5 rounded-xl font-bold text-base sm:text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                {t('articles.bookConsultation')}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                {t('articles.relatedArticles')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {relatedArticles.map((relatedArticle, index) => (
                  <motion.article
                    key={relatedArticle.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1 flex flex-col group cursor-pointer"
                    onClick={() => navigate(`/articles/${relatedArticle.slug}`)}
                    style={{
                      boxShadow: '0 10px 30px -5px rgba(227, 208, 156, 0.3), 0 10px 15px -5px rgba(227, 208, 156, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 20px 40px -5px rgba(227, 208, 156, 0.5), 0 15px 25px -5px rgba(227, 208, 156, 0.3), 0 10px 10px -5px rgba(227, 208, 156, 0.2)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 10px 30px -5px rgba(227, 208, 156, 0.3), 0 10px 15px -5px rgba(227, 208, 156, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80&auto=format'
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-secondary px-3 py-1 rounded-full text-xs font-bold">
                          {relatedArticle.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">
                        {relatedArticle.excerpt}
                      </p>
                      <Link
                        to={`/articles/${relatedArticle.slug}`}
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm group/link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>{t('articles.readArticle')}</span>
                        <svg 
                          className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" 
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
            </motion.div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <div className="mt-16 md:mt-20">
        <ReviewsCarousel />
      </div>
    </div>
  )
}

export default ArticleDetail


