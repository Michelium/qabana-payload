import { CollectionConfig } from "payload/types";
import slug from "../fields/slug";
import { Content } from "../blocks/Content";
import { List } from "../blocks/List";
import { Media } from "../blocks/Media";
import { MediaContent } from "../blocks/MediaContent";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug"],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      type: "richText",
      name: "intro",
      admin: {
        elements: ["h2", "h3", "link"],
        leaves: [],
      },
    },
    {
      name: "body",
      type: "blocks",
      minRows: 1,
      blocks: [Content, List, Media, MediaContent],
    },
    slug(),
    {
      type: "checkbox",
      name: "mainPage",
      label: "Is website main page",
      admin: {
        position: "sidebar",
      },
      defaultValue: false,
    },
  ],
};
