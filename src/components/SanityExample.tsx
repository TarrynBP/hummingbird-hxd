import React from 'react'
import { useSanityDocument } from '../hooks/useSanity'
import { siteSettingsQuery } from '../lib/sanity-queries'
import { SiteSettings } from '../types/sanity'

export function SanityExample() {
  const { data: siteSettings, loading, error } = useSanityDocument<SiteSettings>(siteSettingsQuery)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">Loading site settings...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-4">
        <h3 className="text-red-800 font-medium">Error loading data</h3>
        <p className="text-red-600 mt-1">{error}</p>
      </div>
    )
  }

  if (!siteSettings) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
        <h3 className="text-yellow-800 font-medium">No data found</h3>
        <p className="text-yellow-600 mt-1">No site settings found in Sanity. Please check your content.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Site Settings from Sanity</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Title</h3>
          <p className="text-gray-600">{siteSettings.title}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Description</h3>
          <p className="text-gray-600">{siteSettings.description}</p>
        </div>
        
        {siteSettings.logo && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Logo</h3>
            <img 
              src={siteSettings.logo} 
              alt="Site logo" 
              className="h-12 w-auto"
            />
          </div>
        )}
        
        {siteSettings.socialLinks && siteSettings.socialLinks.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Social Links</h3>
            <ul className="space-y-1">
              {siteSettings.socialLinks.map((link, index) => (
                <li key={index} className="text-gray-600">
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    {link.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {siteSettings.contactInfo && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Contact Information</h3>
            <div className="space-y-1 text-gray-600">
              {siteSettings.contactInfo.email && (
                <p>Email: {siteSettings.contactInfo.email}</p>
              )}
              {siteSettings.contactInfo.phone && (
                <p>Phone: {siteSettings.contactInfo.phone}</p>
              )}
              {siteSettings.contactInfo.address && (
                <p>Address: {siteSettings.contactInfo.address}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
