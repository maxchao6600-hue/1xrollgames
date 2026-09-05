import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Cloudflare Workers Builds runs `npm run build`, then `npx wrangler deploy`.
// Keep package.json "build" as `opennextjs-cloudflare build`, and point OpenNext
// at a dedicated Next.js script so it does not recurse into itself.
const config = {
  ...defineCloudflareConfig({}),
  buildCommand: "npm run build:next",
};

export default config;
