export const servicePackageSchema = {
  name: 'servicePackage',
  title: 'Service Package',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Package Name',
      type: 'string',
      description: 'e.g., "Essential", "Professional", "Enterprise Custom"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g., "R5,750", "R16,000", "Custom"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Brief description of the package',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'servicesIncluded',
      title: 'Services Included',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of services included in this package',
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'popular',
      title: 'Popular Package',
      type: 'boolean',
      description: 'Mark this package as popular (will show "Most Popular" badge)',
      initialValue: false,
    },
    {
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'string',
      description: 'Where the CTA button should link to (e.g., "/contact", "/booking", external URL)',
      initialValue: '/contact',
    },
    {
      name: 'service',
      title: 'Parent Service',
      type: 'reference',
      to: [{ type: 'service' }],
      description: 'Which service this package belongs to',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this package appears (1, 2, 3, etc.)',
      validation: (Rule: any) => Rule.required().min(1),
    },
  ],
  preview: {
    select: {
      name: 'name',
      price: 'price',
      order: 'order',
      service: 'service.title',
    },
    prepare(selection: any) {
      const { name, price, order, service } = selection;
      return {
        title: `${order}. ${name}`,
        subtitle: `${price} - ${service || 'No service'}`,
      };
    },
  },
};
