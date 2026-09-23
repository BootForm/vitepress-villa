---
layout: page
title: Rooms
---

<script setup>
import { data as rooms } from './rooms.data.ts'
</script>

<!-- This list is generated at build time by rooms.data.ts (createContentLoader). Add a new room
     file next to this one (with `name`, `description`, `image`, `sleeps`, `bed`, `view`, and
     `order` frontmatter) and a card appears here and on the home page automatically, with no
     other file to touch. -->

<div class="mx-auto max-w-6xl px-6 py-16">

<h1 class="mb-2! text-3xl! font-bold! tracking-tight">Rooms</h1>
<p class="mb-8! text-black/70! dark:text-white/70!">Five en-suite bedrooms, each with its own character. Every room has air conditioning, a flat-screen TV, and its own bathroom.</p>

<div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  <RoomCard
    v-for="room in rooms"
    :key="room.url"
    :name="room.name"
    :description="room.description"
    :image="room.image"
    :to="room.url"
  />
</div>

</div>
