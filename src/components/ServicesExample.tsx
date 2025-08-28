import React from 'react'
import { useSanityDocuments } from '../hooks/useSanity'
import { servicesQuery } from '../lib/sanity-queries'
import { Service } from '../types/sanity'

export function ServicesExample() {
  const { data: services, loading, error } = useSanityDocuments<Service>(servicesQuery)

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">Loading services...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-md p-4">
        <h3 className="text-red-800 font-medium">Error loading services</h3>
        <p className="text-red-600 mt-1">{error}</p>
      </div>
    )
  }

  if (!services || services.length === 0) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
        <h3 className="text-yellow-800 font-medium">No services found</h3>
        <p className="text-yellow-600 mt-1">No services found in Sanity. Please create some content.</p>
      </div>
    )
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'mint-teal':
        return 'bg-teal-50 border-teal-200 text-teal-800'
      case 'soft-mauve':
        return 'bg-purple-50 border-purple-200 text-purple-800'
      case 'creamy-apricot':
        return 'bg-orange-50 border-orange-200 text-orange-800'
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800'
    }
  }

  const getIconComponent = (icon: string) => {
    const iconClasses = "w-6 h-6"
    switch (icon) {
      case 'Monitor':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      case 'Palette':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
        )
      case 'Lightbulb':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      case 'Zap':
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      default:
        return (
          <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Services from Sanity</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div 
            key={service._id} 
            className={`p-6 rounded-lg border-2 ${getColorClasses(service.color)} transition-transform hover:scale-105`}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-white/50 mr-3">
                {getIconComponent(service.icon)}
              </div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
            
            <p className="text-sm mb-4 leading-relaxed">
              {service.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wide">
                {service.color.replace('-', ' ')}
              </span>
              {service.order && (
                <span className="text-xs text-gray-500">Order: {service.order}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
