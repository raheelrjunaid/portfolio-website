export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: Rule => Rule.required()
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: Rule => Rule.required()
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags"
      },
      validation: Rule => Rule.unique()
    },
    {
      name: "source_url",
      title: "Source URL",
      type: "url",
    },
    {
      name: "demo_url",
      title: "Demo URL",
      type: "url",
    },
    {
      name: "date",
      title: "Date",
      description: "The date the project was completed",
      type: "date",
      validation: Rule => Rule.required()
    }
  ]
};