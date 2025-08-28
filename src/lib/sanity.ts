import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'hquuom5o',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01', // Use today's date or your preferred version
  useCdn: false, // Set to false for development, true for production
  token: import.meta.env.VITE_SANITY_TOKEN
})

// Image URL builder for Sanity images
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Helper function to fetch data from Sanity
export async function fetchSanityData(query: string, params?: any) {
  try {
    const data = await client.fetch(query, params)
    return data
  } catch (error) {
    console.error('Error fetching data from Sanity:', error)
    return null
  }
}
