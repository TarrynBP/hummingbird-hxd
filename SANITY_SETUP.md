---
modified: 2025-08-15T18:14:29.344Z
title: Sanity.io Setup Guide for HummingBird HXD
---

# Sanity.io Setup Guide for HummingBird HXD

## 1. Environment Setup

Create a `.env` file in your project root with your Sanity project details:

```env
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
VITE_SANITY_TOKEN=your-sanity-token
```

## 2. Sanity Studio Setup

If you haven't already, create a Sanity studio in your project:

```bash
npm create sanity@latest -- --template clean --create-project "HummingBird CMS" --dataset production
```

## 3. Content Schemas

Create these schemas in your Sanity studio (`schemas/` folder):

### Article Schema (`schemas/article.ts`)

```typescript
export default {
  name: "article",
  title: "Article",
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
      name: "readTime",
      title: "Read Time",
      type: "string",
      description: 'e.g., "5 min read"',
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
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "teamMember" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection: any) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
```

### Team Member Schema (`schemas/teamMember.ts`)

```typescript
export default {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Display order (1, 2, 3, etc.)",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
};
```

### Service Schema (`schemas/service.ts`)

```typescript
export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
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
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Monitor", value: "Monitor" },
          { title: "Palette", value: "Palette" },
          { title: "Lightbulb", value: "Lightbulb" },
          { title: "Zap", value: "Zap" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "color",
      title: "Color Theme",
      type: "string",
      options: {
        list: [
          { title: "Mint Teal", value: "mint-teal" },
          { title: "Soft Mauve", value: "soft-mauve" },
          { title: "Creamy Apricot", value: "creamy-apricot" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Display order (1, 2, 3, etc.)",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
};
```

### Testimonial Schema (`schemas/testimonial.ts`)

```typescript
export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "text",
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: any) => Rule.min(1).max(5),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Display order (1, 2, 3, etc.)",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "company",
      media: "image",
    },
  },
};
```

### Case Study Schema (`schemas/caseStudy.ts`)

```typescript
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
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "services",
      title: "Services Used",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    },
    {
      name: "challenges",
      title: "Challenges",
      type: "text",
      rows: 3,
    },
    {
      name: "solutions",
      title: "Solutions",
      type: "text",
      rows: 3,
    },
    {
      name: "results",
      title: "Results",
      type: "text",
      rows: 3,
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
      media: "mainImage",
    },
    prepare(selection: any) {
      const { client } = selection;
      return Object.assign({}, selection, {
        subtitle: client && `for ${client}`,
      });
    },
  },
};
```

### Site Settings Schema (`schemas/siteSettings.ts`)

```typescript
export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 3,
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
    },
    {
      name: "contactPhone",
      title: "Contact Phone",
      type: "string",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "twitter", title: "Twitter", type: "url" },
        { name: "linkedin", title: "LinkedIn", type: "url" },
        { name: "instagram", title: "Instagram", type: "url" },
        { name: "github", title: "GitHub", type: "url" },
      ],
    },
  ],
};
```

## 4. Update Schema Index

Add all schemas to `schemas/index.ts`:

```typescript
import article from "./article";
import teamMember from "./teamMember";
import service from "./service";
import testimonial from "./testimonial";
import caseStudy from "./caseStudy";
import siteSettings from "./siteSettings";

export const schemaTypes = [
  article,
  teamMember,
  service,
  testimonial,
  caseStudy,
  siteSettings,
];
```

## 5. Sample Content

### Articles

- "What's Slowing You Down?" - How to spot small problems before they start costing you time and energy
- "Ways to Improve How You Work" - A few easy wins to help you save time, stay organized, and set up customers better
- "Truth That Help You Do Less Admin" - Everyday tools that take small tasks off your plate without making life complicated

### Services

- Launch with Purpose (Monitor icon, mint-teal)
- Simplify Your Workflow (Zap icon, mint-teal)
- Get Set Online (Palette icon, soft-mauve)
- Grow with AI (Lightbulb icon, creamy-apricot)

### Team Members

- Emma Rodriguez - Creative Director & Founder
- David Kim - Lead UX Designer
- Sophie Laurent - Brand Strategist

## 6. Next Steps

1. **Deploy your Sanity studio** to manage content
2. **Add your project ID and dataset** to the environment variables
3. **Create content** in the Sanity studio
4. **Test the integration** by running your React app

The React components are now ready to fetch and display content from Sanity!
