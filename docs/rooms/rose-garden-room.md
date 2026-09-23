---
layout: page
name: Rose Garden Room
title: Rose Garden Room
description: The quiet one, looking out over the garden instead of the water.
image: /rooms/rose-garden-room.jpg
sleeps: 2
bed: Queen-size bed
view: Garden view
order: 4
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

# Rose Garden Room

*CHANGE ME: another example room.*

Set at the back of the villa, away from the pool and the road. Not everyone wants a sea view; some
guests specifically ask for this one instead.

**In the room.** A queen-size bed, a private en-suite bathroom, air conditioning, a flat-screen
TV, and windows onto the garden instead of the water.

[Check availability](/contact)

</div>
