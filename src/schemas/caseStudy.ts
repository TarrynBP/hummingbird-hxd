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
      name: 'designProcess',
      title: 'Design Process',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
          rows: 2,
        },
        {
          name: 'steps',
          title: 'Process Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'number',
                  title: 'Step Number',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'title',
                  title: 'Step Title',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'duration',
                  title: 'Step Duration',
                  type: 'string',
                  description: 'e.g., "2 weeks", "1 month", "3 days"',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'activities',
                  title: 'Step Activities',
                  type: 'array',
                  of: [{ type: 'string' }],
                  validation: (Rule: any) => Rule.required().min(1),
                },
                {
                  name: 'keyInsight',
                  title: 'Step Key Insight',
                  type: 'text',
                  rows: 2,
                  validation: (Rule: any) => Rule.required(),
                },
              ],
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
    // Additional fields that were removed
    {
      name: 'duration',
      title: 'Project Duration',
      type: 'string',
    },
    {
      name: 'keyInsights',
      title: 'Key Insights',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'solutionVisual',
      title: 'Solution Visual',
      type: 'object',
      fields: [
        {
          name: 'desktopImage',
          title: 'Desktop Mockup',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'mobileImage',
          title: 'Mobile Mockup',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'figmaEmbedUrl',
          title: 'Figma Embed URL',
          type: 'url',
          description: 'Figma embed URL for interactive demo (e.g., https://www.figma.com/embed?embed_host=share&url=...)',
        },
        {
          name: 'demoButtonText',
          title: 'Demo Button Text',
          type: 'string',
          initialValue: 'Explore Demo',
        },
      ],
    },
    {
      name: 'measurableImpact',
      title: 'Measurable Impact',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Section Description',
          type: 'text',
          rows: 2,
        },
        {
          name: 'metrics',
          title: 'Metrics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Metric Title',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'value',
                  title: 'Value (e.g., +26%, -22%)',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 2,
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Name of the Lucide React icon (e.g., Eye, Clock, MousePointer)',
                  validation: (Rule: any) => Rule.required(),
                },
              ],
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
              name: 'behaviours',
              title: 'Behaviours',
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
