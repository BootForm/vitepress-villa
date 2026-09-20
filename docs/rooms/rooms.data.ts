import { createContentLoader } from 'vitepress'

export interface Room {
  name: string
  description: string
  image: string
  sleeps: number
  bed: string
  view: string
  order: number
  url: string
}

declare const data: Room[]
export { data }

// The glob is relative to docs/ (VitePress's srcDir), not to this file, and matches every room
// file next to this one, but not this file itself (a .ts file, never matched by *.md) and not
// rooms/index.md, filtered out below by URL. Runs at build time (and on save in `npm run dev`),
// so adding a new room file adds both a homepage card and a Rooms page card automatically, with
// no other file to touch. Copied from vitepress-portfolio's own work.data.ts, the same underlying
// mechanism, just with room-specific fields (sleeps, bed, view) instead of case-study fields.
export default createContentLoader('rooms/*.md', {
  transform(raw): Room[] {
    return raw
      .filter(({ url }) => url !== '/rooms/')
      .map(({ url, frontmatter }) => ({
        name: frontmatter.name ?? 'Untitled',
        description: frontmatter.description ?? '',
        image: frontmatter.image ?? '',
        sleeps: frontmatter.sleeps ?? 0,
        bed: frontmatter.bed ?? '',
        view: frontmatter.view ?? '',
        order: frontmatter.order ?? 0,
        url,
      }))
      // Frontmatter `order` keeps the room order intentional (biggest/best suite first) instead
      // of alphabetical by filename.
      .sort((a, b) => a.order - b.order)
  },
})
