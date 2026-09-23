---
layout: page
name: Kings Room
title: Kings Room
description: The master suite, with a private balcony looking straight out over the water.
image: /rooms/kings-room.jpg
sleeps: 2
bed: King-size bed
view: Sea view
order: 1
---

<script setup>
import { withBase } from 'vitepress'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<img :src="withBase(frontmatter.image)" alt="" class="aspect-video w-full object-cover">

<div class="mx-auto flex max-w-2xl flex-wrap gap-2 px-6 pt-8">
<span class="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-600 dark:bg-brand-500/30 dark:text-white/90">Sleeps {{ frontmatter.sleeps }}</span>
<span class="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-600 dark:bg-brand-500/30 dark:text-white/90">{{ frontmatter.bed }}</span>
<span class="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-600 dark:bg-brand-500/30 dark:text-white/90">{{ frontmatter.view }}</span>
</div>

<div class="prose dark:prose-invert mx-auto max-w-2xl px-6 pb-16 pt-4">

# Kings Room

*CHANGE ME: this is an example room. Replace it, or delete all five example rooms and write your
own. The room list and home page regenerate from whatever's actually in this folder.*

The largest of the five bedrooms, and the only one with its own private balcony. Waking up here
means the sea before anything else.

**In the room.** A king-size bed, a private en-suite bathroom, blackout curtains, air
conditioning, a flat-screen TV, and a wardrobe with enough space for a proper stay, not just a
weekend bag.

[Check availability](/contact)

</div>
