export const servicePackageSchema = {
  name: 'servicePackage',
  title: 'Service Package',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Lucide icon name (e.g., Monitor, Settings, Lightbulb, Zap)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g., "Starting at R5,750" or "Starting at R20,000 p/m"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of features included in this service package',
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'color',
      title: 'Color Theme',
      type: 'string',
      options: {
        list: [
          { title: 'Mint Teal', value: 'mint-teal' },
          { title: 'Soft Mauve', value: 'soft-mauve' },
          { title: 'Creamy Apricot', value: 'creamy-apricot' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this package appears on the services page',
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
      description: 'Button text (e.g., "Start Your Project", "Get Quote")',
      initialValue: 'Start Your Project',
    },
    {
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'string',
      description: 'Where the CTA button should link to',
      initialValue: '/contact',
    },
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      order: 'order',
    },
    prepare(selection: any) {
      const { title, price, order } = selection;
      return {
        title: `${order}. ${title}`,
        subtitle: price,
      };
    },
  },
};
