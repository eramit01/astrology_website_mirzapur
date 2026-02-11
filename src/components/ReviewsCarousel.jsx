import { useTranslation } from 'react-i18next'

const ReviewsCarousel = ({ reviews = [] }) => {
  const { t } = useTranslation()
  // If no reviews provided, show placeholder
  const defaultReviews = [
    {
      rating: 5,
      text: 'Excellent consultation! Very accurate predictions and helpful remedies.',
      author_name: 'Priya S.',
      relative_time_description: '2 weeks ago',
      image: '/reviews/gr1.png',
    },
    {
      rating: 5,
      text: 'Best astrologer I have consulted. The guidance changed my life.',
      author_name: 'Rajesh K.',
      relative_time_description: '1 month ago',
      image: '/reviews/gr2.png',
    },
    {
      rating: 5,
      text: 'Professional and knowledgeable. Highly recommend for kundali reading.',
      author_name: 'Anita M.',
      relative_time_description: '3 weeks ago',
      image: '/reviews/gr3.png',
    },
    {
      rating: 5,
      text: 'Amazing experience! Got accurate predictions about my career and marriage timing.',
      author_name: 'Suresh P.',
      relative_time_description: '3 weeks ago',
      image: '/reviews/gr4.png',
    },
    {
      rating: 5,
      text: 'Very helpful Vastu consultation. My home energy has improved significantly.',
      author_name: 'Meera D.',
      relative_time_description: '1 month ago',
      image: '/reviews/gr5.png',
    },
    {
      rating: 5,
      text: 'Best financial astrology guidance. Helped me make right investment decisions.',
      author_name: 'Kiran R.',
      relative_time_description: '2 months ago',
      image: '/reviews/gr6.png',
    },
    {
      rating: 5,
      text: 'Excellent gemstone recommendations. Positive changes visible in my life.',
      author_name: 'Vikram S.',
      relative_time_description: '1 month ago',
      image: '/reviews/gr7.png',
    },
    {
      rating: 5,
      text: 'Wonderful horoscope matching service. Perfect compatibility analysis.',
      author_name: 'Deepa K.',
      relative_time_description: '3 weeks ago',
      image: '/reviews/gr8.png',
    },
  ]

  const reviewsToShow = reviews.length > 0 ? reviews : defaultReviews

  // Create a list of all review images
  const reviewImages = reviewsToShow.map((review, index) => review.image || `/reviews/gr${(index % 8) + 1}.png`)
  
  // Duplicate images for seamless infinite scroll (like the reference site)
  const duplicatedImages = [...reviewImages, ...reviewImages, ...reviewImages, ...reviewImages]

  // Create multiple rows - at least 3 rows
  const createRow = (rowIndex, reverse = false) => {
    // Shuffle images slightly for each row to create variety
    const shuffledImages = reverse ? [...duplicatedImages].reverse() : duplicatedImages
    return (
      <div key={rowIndex} className={`flex gap-6 scroll-container ${reverse ? 'scroll-reverse' : ''}`}>
        {shuffledImages.map((image, index) => (
          <div key={`${rowIndex}-${index}`} className="flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80">
            <img
              src={image}
              alt={`Client Review ${rowIndex + 1}-${index + 1}`}
              className="w-full h-auto object-contain rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <section className="py-8 md:py-12 mb-0 md:mb-4 lg:mb-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden -my-8">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 relative inline-block px-4">
            <span className="relative z-10">{t('reviews.title')}</span>
            <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-0 transform -skew-x-12"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg mt-4 sm:mt-6 px-4">
            {t('reviews.subtitle')}
          </p>
        </div>

        {/* Continuous Scrolling Grid - Multiple Rows - Similar to "What Keeps Us Inspired" */}
        <div className="relative overflow-hidden space-y-3 sm:space-y-4 py-3 sm:py-4 bg-white rounded-2xl shadow-2xl border border-primary/10 transform -translate-y-2 mx-2 sm:mx-4">
          {createRow(0, false)}
          {createRow(1, true)}
          {createRow(2, false)}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 1.5rem));
          }
        }
        @keyframes scrollReverse {
          0% {
            transform: translateX(calc(-50% - 1.5rem));
          }
          100% {
            transform: translateX(0);
          }
        }
        .scroll-container {
          animation: scroll 30s linear infinite;
          will-change: transform;
        }
        .scroll-reverse {
          animation: scrollReverse 30s linear infinite;
        }
        .scroll-container:hover,
        .scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default ReviewsCarousel

