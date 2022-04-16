import { HiOutlineDocumentAdd } from "react-icons/hi";

export default {
  name: "work-experience",
  title: "Work Experience",
  icon: HiOutlineDocumentAdd,
  type: "document",
  fields: [
    {
      name: "job_title",
      title: "Job Title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "company_name",
      title: "Company Name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "company_full_name",
      description:
        "Can be the same as the Company Name, but you can add on things like the location, or the industry.",
      title: "Company Full Name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "excerpt",
      description:
        "Write a short pararaph of what you did there.",
      title: "Excerpt",
      rows: 5,
      type: "text",
      validation: Rule => Rule.required()
    },
    {
      name: "present",
      title: "Present",
      description: "Is this the current job? It will be shown first if so.",
      type: "boolean",
      validation: Rule => Rule.required()
    }
  ]
};