import { Block } from "payload/types";
import { Media } from "./Media";

export const MediaContent: Block = {
  slug: "mediaContent",
  graphQL: {
    singularName: "MediaContent",
  },
  labels: {
    singular: "Media + Content",
    plural: "Media + Content Blocks",
  },
  fields: [
    {
      name: "alignment",
      label: "Alignment",
      type: "radio",
      defaultValue: "mediaOnLeft",
      required: true,
      options: [
        {
          label: "Media on Left",
          value: "mediaOnLeft",
        },
        {
          label: "Media on Right",
          value: "mediaOnRight",
        },
      ],
      admin: {
        layout: "horizontal",
      },
    },
    {
      type: "richText",
      name: "text",
      localized: true,
      admin: {
        elements: ["h2", "h3", "h4", "h5", "link"],
        leaves: [],
      },
    },
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
