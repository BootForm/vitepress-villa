// The default theme, plus Tailwind and one small override: a site-wide footer. Every page in
// docs/ sets `layout: home` or `layout: page` explicitly (see AGENTS.md's "one rule"), which is
// what keeps this reading as a real site, not documentation, without needing a custom theme
// otherwise.
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { withBase } from 'vitepress'
import RoomCard from './components/RoomCard.vue'
import './style.css'

// VitePress's own `themeConfig.footer` option only renders on `layout: doc` pages. It never shows
// on `layout: home` or `layout: page`, which is every page in this repo. `layout-bottom` is the
// slot that actually renders on every layout, so a custom Layout override is the only way to get
// a footer here at all, not a config option away. Copied from vitepress-marketing's own
// theme/index.ts, the canonical version of this pattern in this org.
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('RoomCard', RoomCard)
  },
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'layout-bottom': () =>
        h(
          'footer',
          { class: 'flex flex-wrap items-center justify-center gap-2 border-t border-black/10 px-6 py-8 text-center text-sm opacity-60 dark:border-white/10' },
          [
            h('img', { src: withBase('/logo.svg'), alt: '', class: 'h-6 w-6 shrink-0' }),
            h('p', null, [
              'Built with ',
              h(
                'a',
                { href: 'https://github.com/BootForm/vitepress-villa', class: 'text-brand-500 hover:underline', target: '_blank', rel: 'noopener' },
                'vitepress-villa',
              ),
              '. The form runs on ',
              h(
                'a',
                { href: 'https://bootform.com', class: 'text-brand-500 hover:underline', target: '_blank', rel: 'noopener' },
                'BootForm',
              ),
              '.',
            ]),
          ],
        ),
    }),
}
