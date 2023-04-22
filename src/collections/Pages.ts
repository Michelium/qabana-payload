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
      localized: true,
      required: true,
    },
    {
      type: "richText",
      name: "intro",
      localized: true,
      admin: {
        elements: ["h2", "h3", "link"],
        leaves: [],
      },
    },
    {
      name: "body",
      type: "blocks",
      minRows: 1,
      localized: true,
      blocks: [Content, List, Media, MediaContent],
    },
    slug(),
  ],
};
