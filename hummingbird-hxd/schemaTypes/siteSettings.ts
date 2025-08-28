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