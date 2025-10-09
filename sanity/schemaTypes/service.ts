export const serviceSchema = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Name',
      type: 'string',
      description: 'e.g., "Web Design", "Productivity Services"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'URL-friendly version (e.g., "web-design", "productivity-services")',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of the service',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main title for the service page (e.g., "Web Design Packages")',
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      description: 'Subtitle for the service page (e.g., "Packages")',
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3,
      description: 'Description shown in the hero section',
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g., "Monitor", "Settings", "Lightbulb", "Zap")',
    },
    {
      name: 'serviceType',
      title: 'Service Type',
      type: 'string',
      options: {
        list: [
          { title: 'Web Design', value: 'web-design' },
          { title: 'Productivity Services', value: 'productivity-services' },
        ],
      },
      description: 'Type of service for styling purposes',
    },
    {
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      description: 'Title for the call-to-action section',
    },
    {
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      rows: 2,
      description: 'Description for the call-to-action section',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which services appear in navigation',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
      order: 'order',
    },
    prepare(selection: any) {
      const { title, slug, order } = selection;
      return {
        title: `${order}. ${title}`,
        subtitle: `/${slug}`,
      };
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};
