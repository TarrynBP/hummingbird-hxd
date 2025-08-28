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