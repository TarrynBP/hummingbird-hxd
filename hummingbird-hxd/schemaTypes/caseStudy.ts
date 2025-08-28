export default {
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "E-commerce",
          "Professional Services", 
          "Restaurant",
          "Healthcare",
          "Agency",
          "Technology",
          "Education",
          "Finance",
          "Real Estate",
          "Non-profit"
        ],
      },
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "duration",
      title: "Project Duration",
      type: "string",
      description: "e.g., '8 weeks', '3 months'",
    },
    {
      name: "team",
      title: "Team",
      type: "string",
      description: "e.g., 'Lead Designer, UX Researcher, 2 Developers'",
    },
    {
      name: "platforms",
      title: "Platforms",
      type: "string",
      description: "e.g., 'Desktop, Mobile, Tablet'",
    },
    {
      name: "overview",
      title: "Project Overview",
      type: "text",
      rows: 4,
    },
    {
      name: "problemStatement",
      title: "Problem Statement",
      type: "text",
      rows: 3,
    },
    {
      name: "challenge",
      title: "The Challenge",
      type: "text",
      rows: 4,
    },
    {
      name: "solution",
      title: "Our Solution",
      type: "text",
      rows: 4,
    },
    {
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "results",
      title: "Results Summary",
      type: "text",
      rows: 3,
    },
    {
      name: "colorPalette",
      title: "Color Palette",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "color",
              title: "Color Code",
              type: "string",
              description: "e.g., '#77cebb'",
            },
            {
              name: "name",
              title: "Color Name",
              type: "string",
              description: "e.g., 'Mint Teal'",
            },
            {
              name: "psychology",
              title: "Psychological Impact",
              type: "string",
              description: "e.g., 'Trust, freshness, natural healing'",
            },
            {
              name: "usage",
              title: "Usage",
              type: "string",
              description: "e.g., 'Primary CTAs, navigation, trust indicators'",
            },
          ],
        },
      ],
    },
    {
      name: "userPersonas",
      title: "User Personas",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Persona Name",
              type: "string",
            },
            {
              name: "age",
              title: "Age Range",
              type: "string",
            },
            {
              name: "goals",
              title: "Goals",
              type: "text",
              rows: 2,
            },
            {
              name: "painPoints",
              title: "Pain Points",
              type: "text",
              rows: 2,
            },
            {
              name: "behavior",
              title: "Behavior",
              type: "text",
              rows: 2,
            },
          ],
        },
      ],
    },
    {
      name: "designProcess",
      title: "Design Process",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "phase",
              title: "Phase Name",
              type: "string",
            },
            {
              name: "duration",
              title: "Duration",
              type: "string",
            },
            {
              name: "activities",
              title: "Activities",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "insights",
              title: "Key Insights",
              type: "text",
              rows: 2,
            },
          ],
        },
      ],
    },
    {
      name: "keyInsights",
      title: "Key Insights",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "measurableImpact",
      title: "Measurable Impact",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "metric",
              title: "Metric",
              type: "string",
            },
            {
              name: "value",
              title: "Value",
              type: "string",
              description: "e.g., '+40%', '3x'",
            },
            {
              name: "description",
              title: "Description",
              type: "string",
            },
            {
              name: "icon",
              title: "Icon",
              type: "string",
              options: {
                list: [
                  "TrendingUp",
                  "Clock", 
                  "CheckCircle",
                  "Heart",
                  "MousePointer",
                  "Eye",
                  "Users",
                  "Target",
                  "Zap",
                  "Lightbulb"
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: "lessonsLearned",
      title: "Lessons Learned",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "nextSteps",
      title: "Next Steps",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "clientFeedback",
      title: "Client Feedback",
      type: "object",
      fields: [
        {
          name: "quote",
          title: "Quote",
          type: "text",
          rows: 3,
        },
        {
          name: "author",
          title: "Author Name",
          type: "string",
        },
        {
          name: "role",
          title: "Role",
          type: "string",
        },
        {
          name: "details",
          title: "Additional Details",
          type: "text",
          rows: 2,
        },
      ],
    },
    {
      name: "services",
      title: "Services Used",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      client: "client",
      category: "category",
      media: "mainImage",
    },
    prepare(selection: any) {
      const { client, category } = selection;
      return Object.assign({}, selection, {
        subtitle: `${category}${client ? ` • ${client}` : ''}`,
      });
    },
  },
}; 