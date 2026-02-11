const FeaturedIn = () => {
  // Only use existing logos from featured folder to avoid blank boxes
  // Add more logos (lg4.jpeg, lg5.jpeg, etc.) to the featured folder as needed
  const mediaLogos = [
    '/featured/lg1.jpeg',
    '/featured/lg2.jpeg',
    '/featured/lg3.jpeg',
  ]

  // Duplicate logos multiple times for seamless infinite scroll
  const duplicatedLogos = [...mediaLogos, ...mediaLogos, ...mediaLogos, ...mediaLogos, ...mediaLogos, ...mediaLogos]

  return (
    <section className="py-12 bg-black relative overflow-hidden rounded-2xl mx-4 my-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 px-4">
            Featured In
          </h2>
        </div>

        {/* Continuous Scrolling Logos */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 scroll-logos">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center">
                {/* Fixed size container for consistent logo sizing with black background */}
                <div className="w-28 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 bg-black p-2 sm:p-2.5 md:p-3 rounded-xl border border-gray-800">
                  <img
                    src={logo}
                    alt={`Featured Media ${(index % mediaLogos.length) + 1}`}
                    className="w-full h-full object-contain"
                    style={{ 
                      maxWidth: '100%', 
                      maxHeight: '100%',
                      objectFit: 'contain',
                      filter: 'brightness(1.2) contrast(1.1)'
                    }}
                    loading="lazy"
                    onError={(e) => {
                      // Hide the entire container if image fails to load
                      const container = e.target.closest('.flex-shrink-0')
                      if (container) {
                        container.style.display = 'none'
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 2rem));
          }
        }
        .scroll-logos {
          animation: scrollLogos 25s linear infinite;
          will-change: transform;
        }
        .scroll-logos:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default FeaturedIn

