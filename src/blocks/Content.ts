import { Block } from "payload/types";

export const Content: Block = {
  slug: "content",
  labels: {
    singular: "Content",
    plural: "Content Blocks",
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "width",
          label: "Column Width",
          type: "select",
          defaultValue: "full",
          required: true,
          options: [
            {
              label: "One Third",
              value: "oneThird",
            },
            {
              label: "Half",
              value: "half",
            },
            {
              label: "Two Thirds",
              value: "twoThirds",
            },
            {
              label: "Full Width",
              value: "full",
            },
          ],
          admin: {
            width: "50%",
          },
        },
        {
          name: "alignment",
          label: "Alignment",
          type: "select",
          defaultValue: "left",
          required: true,
          options: [
            {
              label: "Left",
              value: "left",
            },
            {
              label: "Center",
              value: "center",
            },
            {
              label: "Right",
              value: "right",
            },
          ],
          admin: {
            width: "50%",
          },
        },
      ],
    },
    {
      type: "richText",
      name: "content",
      admin: {
        elements: ["ol", "ul", "indent", "relationship", "upload"],
        leaves: [],
      },
    },
  ],
};
