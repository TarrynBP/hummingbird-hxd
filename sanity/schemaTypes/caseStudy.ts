export const caseStudySchema = {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'color',
      title: 'Theme Color',
      type: 'string',
      description: 'CSS color value (e.g., #10B981, #8B5CF6)',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'keyFeatures',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'projectedResults',
      title: 'Projected Results',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    // Case study specific fields
    {
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'solution',
      title: 'Solution',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'process',
      title: 'Design Process',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'results',
      title: 'Results',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Metric Label',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'value',
              title: 'Metric Value',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'colorPalette',
      title: 'Color Palette',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Color Name',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'color',
              title: 'Color Value',
              type: 'string',
              description: 'CSS color value (e.g., #3E2353)',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'hex',
              title: 'Hex Value',
              type: 'string',
              description: 'Alternative hex value field',
            },
            {
              name: 'psychology',
              title: 'Color Psychology',
              type: 'string',
              description: 'What this color represents (e.g., "Creativity, sophistication, innovation")',
            },
          ],
        },
      ],
    },
    {
      name: 'userResearch',
      title: 'User Research',
      type: 'text',
      rows: 4,
    },
    {
      name: 'designProcess',
      title: 'Design Process',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Step Number',
              type: 'string',
            },
            {
              name: 'title',
              title: 'Step Title',
              type: 'string',
            },
            {
              name: 'items',
              title: 'Step Items',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    },
    // Additional fields that were removed
    {
      name: 'clientFeedback',
      title: 'Client Feedback',
      type: 'object',
      fields: [
        {
          name: 'author',
          title: 'Author/Company',
          type: 'string',
        },
        {
          name: 'quote',
          title: 'Quote',
          type: 'text',
          rows: 3,
        },
        {
          name: 'role',
          title: 'Role',
          type: 'string',
        },
      ],
    },
    {
      name: 'duration',
      title: 'Project Duration',
      type: 'string',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'keyInsights',
      title: 'Key Insights',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'measurableImpact',
      title: 'Measurable Impact',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'metric',
              title: 'Metric Name',
              type: 'string',
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'Name of the Lucide React icon',
            },
          ],
        },
      ],
    },
    {
      name: 'overview',
      title: 'Project Overview',
      type: 'text',
      rows: 4,
    },
    {
      name: 'platforms',
      title: 'Platforms',
      type: 'string',
    },
    {
      name: 'problemStatement',
      title: 'Problem Statement',
      type: 'text',
      rows: 3,
    },
    {
      name: 'team',
      title: 'Team',
      type: 'string',
    },
    {
      name: 'userPersonas',
      title: 'User Personas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Persona Name',
              type: 'string',
            },
            {
              name: 'age',
              title: 'Age Range',
              type: 'string',
            },
            {
              name: 'goals',
              title: 'Goals',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'motivations',
              title: 'Motivations',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'painPoints',
              title: 'Pain Points',
              type: 'array',
              of: [{ type: 'string' }],
            },
            {
              name: 'behavior',
              title: 'Behavior',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
    prepare(selection: any) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle,
      };
    },
  },
};
