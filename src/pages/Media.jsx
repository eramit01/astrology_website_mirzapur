import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getAllArticles } from '../data/articles'
import SEO from '../components/SEO'
import { createBreadcrumbSchema } from '../utils/seo'
import { useTranslation } from 'react-i18next'

const Media = () => {
  const { t } = useTranslation()
  // All interview videos
  const interviews = [
    {
      id: '0SVDR1mcd-4',
      title: t('media.interviews.interview1.title'),
      description: t('media.interviews.interview1.description'),
    },
    {
      id: 'XjVMmQ4vZns',
      title: t('media.interviews.interview2.title'),
      description: t('media.interviews.interview2.description'),
    },
    {
      id: 'LKywj-fn0dw',
      title: t('media.interviews.interview3.title'),
      description: t('media.interviews.interview3.description'),
    },
    {
      id: 'Ng8M0VZfGW0',
      title: t('media.interviews.interview4.title'),
      description: t('media.interviews.interview4.description'),
    },
  ]

  // Get 6 related articles
  const allArticles = [...getAllArticles()].sort((a, b) => new Date(b.date) - new Date(a.date))
  const blogArticles = allArticles.slice(0, 6)

  const siteOrigin = import.meta.env.VITE_SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '')
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: `${siteOrigin}/` },
    { name: 'Media', item: `${siteOrigin}/media` },
  ])

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <SEO
        title="Media & Insights - Astrology Consultation | Pandit Gulabchand"
        description="Watch exclusive interviews with Pandit Gulabchand and explore insights on astrology, Vastu Shastra, gemstones, and spiritual guidance."
        url="/media"
        structuredData={breadcrumbSchema}
      />
      {/* ---------- INTERVIEWS GRID ---------- */}
      <section className="pt-36 pb-12 md:pt-40 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
              {t('media.videoInterviews')}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t('media.exclusiveConversations')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('media.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-7xl mx-auto">
            {interviews.map((interview, index) => (
              <motion.div
                key={interview.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
              >
                {/* Video area */}
                <div className="relative aspect-video bg-gray-900">
                  <iframe
                    className="w-full h-full absolute inset-0"
                    src={`https://www.youtube.com/embed/${interview.id}?rel=0&modestbranding=1`}
                    title={interview.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  {/* Play button overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 transform scale-90 group-hover:scale-100 transition-transform">
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M10 8.64L15.27 12 10 15.36V8.64z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 md:p-8">
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-4">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                    </svg>
                    <span className="text-xs font-semibold">{t('media.videoInterview')}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {interview.title}
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base line-clamp-2">
                    {interview.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- RELATED ARTICLES ---------- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
              {t('media.relatedContent')}
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t('media.exploreMore')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('media.relatedSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {blogArticles.map((article, index) => (
              <motion.article
                key={article.id ?? index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transform hover:-translate-y-2 transition-all flex flex-col"
              >
                <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <img
                    src={
                      article.image ||
                      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80&auto=format'
                    }
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80&auto=format'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                      {article.category || 'Astrology'}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base mb-4 flex-grow line-clamp-3">
                    {article.excerpt ||
                      'Read our latest thoughts on astrology, practical tips, and spiritual tools to help you navigate life.'}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 12a3 3 0 100-6 3 3 0 000 6zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z" />
                      </svg>
                      <span>{article.author || 'Pandit Gulabchand'}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        aria-hidden
                      >
                        <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{article.readTime || '6 min read'}</span>
                    </div>
                  </div>

                  {/* ✅ Fixed Read More button */}
                  <div className="mt-auto pt-4">
                    <Link
                      to={`/articles/${article.slug}`}
                      className="block w-full text-center bg-primary text-white px-5 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                    >
                      <span>{t('media.readMore')}</span>
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden
                      >
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Media
