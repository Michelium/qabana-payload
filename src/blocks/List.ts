import { Block } from "payload/types";

export const List: Block = {
  slug: "list",
  labels: {
    singular: "List",
    plural: "List Blocks",
  },
  fields: [
    {
      name: "items",
      type: "array",
      minRows: 1,
      labels: {
        singular: "Item",
        plural: "Items",
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              type: "text",
              name: "leftText",
              required: true,
              admin: {
                width: "50%",
              },
            },
            {
              name: "leftLink",
              type: "relationship",
              relationTo: ["pages"],
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              type: "text",
              name: "leftSubText",
              required: false,
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          type: "radio",
          name: "type",
          required: true,
          defaultValue: "text",
          options: [
            {
              label: "Text",
              value: "text",
            },
            {
              label: "Media",
              value: "media",
            },
          ],
        },
        {
          name: "text",
          label: false,
          type: "group",
          admin: {
            condition: (_, { type } = {}) => type === "text",
          },
          fields: [
            {
              type: "richText",
              name: "content",
              required: true,
              admin: {
                elements: ["h2", "h3", "h4", "h5", "link"],
                leaves: [],
              },
            },
          ],
        },
        {
          name: "media",
          label: false,
          type: "group",
          admin: {
            condition: (_, { type } = {}) => type === "media",
          },
          fields: [
            {
              type: "array",
              name: "mediaItems",
              minRows: 1,
              labels: {
                singular: "Item",
                plural: "Items",
              },
              fields: [
                {
                  name: "media",
                  label: "Media",
                  type: "upload",
                  relationTo: "media",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
