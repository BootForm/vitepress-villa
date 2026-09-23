---
layout: page
title: Gallery
---

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { withBase } from 'vitepress'

// A hand-rolled lightbox: clicking a thumbnail opens it full screen, click anywhere (or Escape)
// to close. No library needed for something this small; ref()/withBase() are already imported on
// every other page in this repo.
const openImage = ref(null)

function onKeydown(event) {
  if (event.key === 'Escape') openImage.value = null
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<!-- CHANGE ME: replace docs/public/gallery/*.jpg with your own photos, in any quantity; each
     <img> below is a literal file, not generated from a folder listing, so add or remove <img>
     tags here (and their matching entries below, if you keep the lightbox) to match whatever you
     actually have. Each `src` is a runtime binding (`:src`), not a literal markdown image, so it
     needs withBase() by hand: see AGENTS.md's link-handling section for why a plain
     `<img src="/gallery/1.jpg">` here would 404 once this site is deployed to a subpath. -->

<div class="mx-auto max-w-6xl px-6 py-16">

<h1 class="mb-2! text-3xl! font-bold! tracking-tight">Gallery</h1>
<p class="mb-8! text-black/70! dark:text-white/70!">The villa, the pool, and the coast around it. Click any photo to see it full screen.</p>

<div class="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>img]:mb-4 [&>img]:w-full [&>img]:cursor-zoom-in [&>img]:rounded-lg [&>img]:break-inside-avoid [&>img]:transition [&>img]:hover:opacity-90">
  <img :src="withBase('/gallery/1.jpg')" alt="" @click="openImage = withBase('/gallery/1.jpg')">
  <img :src="withBase('/gallery/2.jpg')" alt="" @click="openImage = withBase('/gallery/2.jpg')">
  <img :src="withBase('/gallery/3.jpg')" alt="" @click="openImage = withBase('/gallery/3.jpg')">
  <img :src="withBase('/gallery/4.jpg')" alt="" @click="openImage = withBase('/gallery/4.jpg')">
  <img :src="withBase('/gallery/5.jpg')" alt="" @click="openImage = withBase('/gallery/5.jpg')">
  <img :src="withBase('/gallery/6.jpg')" alt="" @click="openImage = withBase('/gallery/6.jpg')">
  <img :src="withBase('/gallery/7.jpg')" alt="" @click="openImage = withBase('/gallery/7.jpg')">
</div>

</div>

<!-- The lightbox itself: fixed, full-viewport, closes on a click anywhere (the backdrop or the
     image, since there's nothing else to interact with here) or on Escape (see the script above).
     `@click.stop` isn't needed on the image itself since clicking it should also close it, unlike
     a lightbox with its own next/previous controls, which would need to stop propagation there. -->
<div
  v-if="openImage"
  class="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/90 p-6"
  @click="openImage = null"
>
  <img :src="openImage" alt="" class="max-h-full max-w-full rounded-lg object-contain">
  <button
    type="button"
    class="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
    aria-label="Close"
    @click="openImage = null"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
  </button>
</div>
