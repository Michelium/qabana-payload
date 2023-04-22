import { CollectionConfig } from "payload/types";
import path from "path";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    useAsTitle: "filename",
    group: "Content",
  },
  upload: {
    adminThumbnail: "thumbnail",
    staticDir: path.resolve(__dirname, "../../media"),
    mimeTypes: ["image/png", "image/jpeg"],
    imageSizes: [
      {
        name: "thumbnail",
        width: 480,
        height: 320,
      },
      {
        name: "portrait",
        width: 768,
        height: 1024,
      },
      {
        name: "hero",
        width: 1920,
        height: 1080,
      },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: "Alt Text",
      localized: true,
      required: true,
    },
  ],
};
