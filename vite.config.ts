import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// GitHub Pages serves the site from /<repo>/; the deploy workflow sets BASE_PATH (e.g. "/akashganga-homepage/").
const base = process.env["BASE_PATH"] ?? "/";

export default defineConfig({
  base,
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      server: { entry: "server" },
      // Render every page to static HTML at build time so the site can be hosted on GitHub Pages.
      prerender: { enabled: true, crawlLinks: true },
    }),
    viteReact(),
    // Builds the deployable server bundle. No preset is pinned, so Nitro
    // auto-detects the target platform (Vercel/Netlify/Cloudflare/Node) at
    // build time; set NITRO_PRESET to pin one explicitly for your host.
    nitro(),
  ],
});
