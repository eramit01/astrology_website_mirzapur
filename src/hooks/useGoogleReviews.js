import { useState, useEffect } from 'react'
import axios from 'axios'

/**
 * Hook to fetch Google Reviews
 * Note: This should be called from a server-side endpoint to protect API keys
 * For now, this is a placeholder that can be used with a backend proxy
 */
const useGoogleReviews = (placeId = null) => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!placeId) {
      // If no placeId, use placeholder reviews
      setReviews([])
      return
    }

    const fetchReviews = async () => {
      setLoading(true)
      setError(null)

      try {
        // TODO: Replace with your actual API endpoint
        // This endpoint should be server-side to protect your Google API key
        // Example: /api/reviews?placeId=${placeId}
        const response = await axios.get(`/api/reviews`, {
          params: { placeId },
        })

        if (response.data && response.data.reviews) {
          setReviews(response.data.reviews)
        }
      } catch (err) {
        console.error('Error fetching reviews:', err)
        setError(err.message)
        // Fallback to empty array on error
        setReviews([])
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [placeId])

  return { reviews, loading, error }
}

export default useGoogleReviews


