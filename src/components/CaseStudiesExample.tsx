import React from 'react'
import { useSanityDocuments } from '../hooks/useSanity'
import { caseStudiesQuery } from '../lib/sanity-queries'
import { CaseStudy } from '../types/sanity'

export function CaseStudiesExample() {
  const { data: caseStudies, loading, error } = useSanityDocuments<CaseStudy>(caseStudiesQuery)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">Loading case studies...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-4">
        <h3 className="text-red-800 font-medium">Error loading case studies</h3>
        <p className="text-red-600 mt-1">{error}</p>
      </div>
    )
  }

  if (!caseStudies || caseStudies.length === 0) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
        <h3 className="text-yellow-800 font-medium">No case studies found</h3>
        <p className="text-yellow-600 mt-1">No case studies found in Sanity. Please create some content.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Case Studies from Sanity</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((caseStudy) => (
          <div key={caseStudy._id} className="bg-white rounded-lg shadow-md overflow-hidden">
            {caseStudy.mainImage && (
              <img 
                src={caseStudy.mainImage} 
                alt={caseStudy.title}
                className="w-full h-48 object-cover"
              />
            )}
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {caseStudy.category}
                </span>
                {caseStudy.client && (
                  <span className="text-sm text-gray-500">Client: {caseStudy.client}</span>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {caseStudy.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {caseStudy.description}
              </p>
              
              <div className="space-y-2 text-sm text-gray-500">
                {caseStudy.duration && (
                  <p>Duration: {caseStudy.duration}</p>
                )}
                {caseStudy.team && (
                  <p>Team: {caseStudy.team}</p>
                )}
                {caseStudy.platforms && (
                  <p>Platforms: {caseStudy.platforms}</p>
                )}
              </div>
              
              {caseStudy.results && (
                <div className="mt-4 p-3 bg-green-50 rounded-md">
                  <h4 className="text-sm font-medium text-green-800 mb-1">Results</h4>
                  <p className="text-sm text-green-700">{caseStudy.results}</p>
                </div>
              )}
              
              {caseStudy.colorPalette && caseStudy.colorPalette.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-800 mb-2">Color Palette</h4>
                  <div className="flex space-x-2">
                    {caseStudy.colorPalette.slice(0, 4).map((color, index) => (
                      <div 
                        key={index}
                        className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: color.color }}
                        title={`${color.name}: ${color.psychology}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
