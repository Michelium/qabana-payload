import { Block } from "payload/types";

export const Media: Block = {
  slug: "media",
  graphQL: {
    singularName: "MediaBlock",
  },
  labels: {
    singular: "Media Block",
    plural: "Media Blocks",
  },
  fields: [
    {
      name: "media",
      label: "Media",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "Maximum upload file size: 12MB. Recommended file size for images is <500KB.",
      },
    },
    {
      name: "caption",
      label: "Caption",
      type: "text",
    },
  ],
};
