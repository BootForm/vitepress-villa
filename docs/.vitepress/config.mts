import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // CHANGE ME: your villa's name and description.
  title: 'Five Palms Villa',
  description: '5-bedroom villa on the coast, private pool, direct booking, no platform fees.',

  // CHANGE ME if you rename the repo, or set to '/' once you're serving from a custom domain.
  // Also update SITE_URL in scripts/generate-rss.mjs to match.
  base: '/vitepress-villa/',

  vite: {
    plugins: [tailwindcss()],
  },

  head: [
    ['link', { rel: 'alternate', type: 'application/rss+xml', title: 'Five Palms Villa', href: '/vitepress-villa/feed.xml' }],
  ],

  themeConfig: {
    // CHANGE ME: replace docs/public/logo.svg with your own image.
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rooms', link: '/rooms/' },
      { text: 'Gallery', link: '/gallery' },
      { text: 'Journal', link: '/posts/' },
      { text: 'Contact', link: '/contact' },
    ],

    // No `sidebar` key here either, same reasoning as every other template in this org: a villa
    // site is a booking/marketing surface, not documentation.
  },
})
