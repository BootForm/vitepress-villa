---
layout: page
name: Queens Room
title: Queens Room
description: Twin singles that push together into a king, a few steps from the water.
image: /rooms/queens-room.jpg
sleeps: 2
bed: Twin singles (or one king)
view: Sea view
order: 2
---

<script setup>
import { withBase } from 'vitepress'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<img :src="withBase(frontmatter.image)" alt="" class="aspect-video w-full object-cover">

<div class="mx-auto flex max-w-2xl flex-wrap gap-2 px-6 pt-8">
<span class="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-500">Sleeps {{ frontmatter.sleeps }}</span>
<span class="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-500">{{ frontmatter.bed }}</span>
<span class="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-600 dark:bg-brand-500/20 dark:text-brand-500">{{ frontmatter.view }}</span>
</div>

<div class="prose dark:prose-invert mx-auto max-w-2xl px-6 pb-16 pt-4">

# Queens Room

*CHANGE ME: another example room.*

Two singles that push together into a king, so it works equally well for a couple or for two
friends travelling together who'd rather not share a bed.

**In the room.** Twin singles (pushed together on request), a private en-suite bathroom, air
conditioning, a flat-screen TV, and direct sea views from the window.

[Check availability](/contact)

</div>
