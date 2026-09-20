---
# CHANGE ME: everything in this frontmatter block. `layout: home` is what makes this a marketing
# homepage instead of a documentation page. See AGENTS.md's "one rule" section.
layout: home

# No `hero:` or `features:` key here on purpose: VitePress's default theme always renders its own
# frontmatter-driven sections (hero, then features) BEFORE the page's own markdown body, with no
# way to reorder them. The custom backdrop hero below needs to come first, so it's hand-built in
# the body instead, the same pattern vitepress-blog's own home page uses.
---

<script setup>
import { withBase } from 'vitepress'
import { data as rooms } from './rooms/rooms.data.ts'

const featuredRooms = rooms.slice(0, 3)
</script>

<!-- ───── Backdrop hero ─────
     CHANGE ME: your own photo, name and tagline. A photo as a full-width backdrop with a dark
     overlay for contrast, shorter than the default theme's hero, reads more like a real villa's
     homepage than a text-only hero. The `!`-suffixed classes force this past the unlayered
     element resets documented in AGENTS.md's CSS-layering note. -->
<div
  class="relative flex h-[360px] items-center justify-center overflow-hidden bg-cover bg-center text-center sm:h-[440px]"
  :style="{ backgroundImage: `url(${withBase('/home/hero.jpg')})` }"
>
  <div class="absolute inset-0 bg-black/50"></div>
  <div class="relative px-6">
    <h1 class="text-3xl! font-bold! tracking-tight text-white! sm:text-5xl!">Five Palms Villa</h1>
    <p class="mx-auto! mt-3 max-w-lg text-center text-white/85!">
      A 5-bedroom villa for up to 12 guests. Private pool, terrace, and garden, on the coast.
      Book directly with us, no platform fees.
    </p>
    <div class="mt-6 flex flex-wrap justify-center gap-3">
      <a href="/rooms/" class="rounded-md bg-brand-500 px-5 py-2.5 font-medium text-white! no-underline! hover:bg-brand-600">See the rooms</a>
      <a href="/contact" class="rounded-md bg-white/10 px-5 py-2.5 font-medium text-white! no-underline! ring-1 ring-white/40 hover:bg-white/20">Check availability</a>
    </div>
  </div>
</div>

<!-- ───── Facilities ───── -->
<div class="mx-auto max-w-5xl px-6 py-16">

<h2 class="mb-6 text-2xl! font-bold! tracking-tight">Facilities</h2>

<div class="grid gap-6 grid-cols-2 sm:grid-cols-3">
  <div class="flex flex-col items-center gap-2 rounded-lg border border-black/10 p-4 text-center dark:border-white/10">
    <span class="text-brand-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20M2 17h20M4 12v-1a4 4 0 0 1 8 0 4 4 0 0 1 8 0v1"/></svg>
    </span>
    <p class="text-sm font-medium">Private pool</p>
  </div>
  <div class="flex flex-col items-center gap-2 rounded-lg border border-black/10 p-4 text-center dark:border-white/10">
    <span class="text-brand-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18M3 12h18"/></svg>
    </span>
    <p class="text-sm font-medium">Tennis court</p>
  </div>
  <div class="flex flex-col items-center gap-2 rounded-lg border border-black/10 p-4 text-center dark:border-white/10">
    <span class="text-brand-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5 17.5 17.5M6.5 17.5 17.5 6.5"/><circle cx="12" cy="12" r="10"/></svg>
    </span>
    <p class="text-sm font-medium">Home gym</p>
  </div>
  <div class="flex flex-col items-center gap-2 rounded-lg border border-black/10 p-4 text-center dark:border-white/10">
    <span class="text-brand-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13M4 21h16M9 12h6"/></svg>
    </span>
    <p class="text-sm font-medium">BBQ &amp; terrace</p>
  </div>
  <div class="flex flex-col items-center gap-2 rounded-lg border border-black/10 p-4 text-center dark:border-white/10">
    <span class="text-brand-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="10" r="1.5"/><circle cx="16" cy="10" r="1.5"/><circle cx="8" cy="14" r="1.5"/></svg>
    </span>
    <p class="text-sm font-medium">Pool table</p>
  </div>
  <div class="flex flex-col items-center gap-2 rounded-lg border border-black/10 p-4 text-center dark:border-white/10">
    <span class="text-brand-500">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="1"/><path d="M9 6h6M9 18h6"/></svg>
    </span>
    <p class="text-sm font-medium">Elevator, all floors</p>
  </div>
</div>

</div>

<!-- ───── Rooms teaser ─────
     Same data source as the Rooms page, just capped to 3 so the home page reads as a preview,
     not a duplicate of the full list. -->
<div class="mx-auto max-w-6xl px-6 py-16">

<h2 class="mb-6 text-2xl! font-bold! tracking-tight">Rooms</h2>

<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  <RoomCard
    v-for="room in featuredRooms"
    :key="room.url"
    :name="room.name"
    :description="room.description"
    :image="room.image"
    :to="room.url"
  />
</div>

<p class="mt-6 text-center">

[See all 5 rooms](/rooms/)

</p>

</div>

<!-- ───── Testimonial ───── -->
<div class="mx-auto max-w-2xl px-6 py-16">

<h2 class="mb-6 text-2xl! font-bold! tracking-tight">What guests say</h2>

<blockquote class="border-l-2 border-brand-500 pl-5 text-lg italic opacity-80">
We booked direct after finding the villa online, and it was the easiest part of the whole trip.
The pool alone was worth it, but the extra bedroom for the kids sealed it.
</blockquote>

<p class="mt-4 text-sm opacity-50">(a happy guest, not yet you)</p>

</div>

<!-- ───── FAQ ───── -->
<div class="mx-auto max-w-2xl px-6 py-16">

<h2 class="mb-6 text-2xl! font-bold! tracking-tight">Common questions</h2>

<details class="group rounded-lg border border-black/10 p-4 dark:border-white/10">
  <summary class="cursor-pointer list-none font-medium marker:content-none">How many guests can the villa hold?</summary>
  <p class="mt-2 text-sm opacity-70">Up to 12, across 5 en-suite bedrooms.</p>
</details>

<details class="mt-3 group rounded-lg border border-black/10 p-4 dark:border-white/10">
  <summary class="cursor-pointer list-none font-medium marker:content-none">Is the pool private?</summary>
  <p class="mt-2 text-sm opacity-70">Yes, the pool and grounds are exclusive to your booking.</p>
</details>

<details class="mt-3 group rounded-lg border border-black/10 p-4 dark:border-white/10">
  <summary class="cursor-pointer list-none font-medium marker:content-none">Can I book directly instead of through a platform?</summary>
  <p class="mt-2 text-sm opacity-70">Yes, every booking on this site is direct: no platform fees, no middlemen.</p>
</details>

</div>

<!-- ───── Call to action ───── -->
<div class="mx-auto max-w-6xl px-6 py-16">
  <div class="rounded-2xl bg-brand-500 px-6 py-8 text-center shadow-lg sm:px-10 sm:py-10">
    <h2 class="border-t-0! pt-0! text-2xl! font-bold! tracking-tight text-white! sm:text-3xl!">Ready to check availability?</h2>
    <p class="mx-auto! mt-3 max-w-md text-center text-white/80!">
      Send us your dates and the number of guests. We usually reply within a day.
    </p>

[<span class="mt-6 inline-block rounded-md bg-white px-6 py-3 font-medium text-brand-600! hover:bg-white/90">Check availability</span>](/contact)

  </div>
</div>
