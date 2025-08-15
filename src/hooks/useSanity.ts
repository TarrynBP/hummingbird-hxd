import { useState, useEffect } from 'react'
import { fetchSanityData } from '../lib/sanity'

export function useSanity<T>(query: string, params?: any) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const result = await fetchSanityData(query, params)
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [query, params])

  return { data, loading, error }
}

// Hook for fetching a single document
export function useSanityDocument<T>(query: string, params?: any) {
  return useSanity<T>(query, params)
}

// Hook for fetching multiple documents
export function useSanityDocuments<T>(query: string) {
  return useSanity<T[]>(query)
}
