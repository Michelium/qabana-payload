import { buildConfig } from "payload/config";
import path from "path";
import { Users } from "./collections/Users";
import { Pages } from "./collections/Pages";
import { Media } from "./collections/Media";
import MainMenu from "./globals/MainMenu";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Pages, Media, Users],
  globals: [MainMenu],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    disable: true,
  },
});
