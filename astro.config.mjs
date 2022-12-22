import { defineConfig } from 'astro/config';
import prefetch from "@astrojs/prefetch"
import sitemap from "@astrojs/sitemap"
import tailwindIntegration from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [
        prefetch(),
        sitemap(),
        tailwindIntegration(),
        mdx()
    ]
});
