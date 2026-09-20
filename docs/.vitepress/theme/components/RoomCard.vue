<script setup lang="ts">
import { withBase } from 'vitepress'

// A reusable card: an image, a room name, a short description, and the whole card as one link to
// its own page. Used on both the home page and the Rooms page, fed by rooms.data.ts. See that
// file's own comment for how a new room file becomes a new card automatically.
//
// The `!`-suffixed classes force this past the same unlayered element resets documented in
// AGENTS.md's CSS-layering note: on the home page (wrapped in VitePress's own `.vp-doc`), the
// plain versions of these classes silently lose to `.vp-doc`'s own link/heading styling; on the
// Rooms page (not `.vp-doc`-wrapped) they'd work either way, so using the forced versions
// everywhere keeps the component identical regardless of which page renders it.
defineProps<{
  name: string
  description: string
  image: string
  to: string
}>()
</script>

<template>
  <a
    :href="withBase(to)"
    class="group flex flex-col overflow-hidden rounded-lg border border-black/10 no-underline! transition hover:border-brand-500 dark:border-white/10"
  >
    <img
      :src="withBase(image)"
      :alt="name"
      class="aspect-video w-full object-cover"
    >
    <div class="flex flex-col gap-1 p-4">
      <h3 class="font-semibold text-black! group-hover:text-brand-500! dark:text-white!">{{ name }}</h3>
      <p class="text-sm leading-snug text-black/70! dark:text-white/70!">{{ description }}</p>
    </div>
  </a>
</template>
