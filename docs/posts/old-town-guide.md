---
layout: page
title: An afternoon in the old town
date: 2026-07-22
author: elena
tags: [local-guide, day-trips]
image: /posts/old-town-guide.jpg
description: Where we actually send guests for lunch, and the one souvenir shop that isn't a tourist trap.
---

<script setup>
import { withBase } from 'vitepress'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<img :src="withBase(frontmatter.image)" alt="" class="aspect-video w-full object-cover">

<div class="mx-auto flex max-w-2xl flex-wrap gap-2 px-6 pt-8">
<a v-for="tag in frontmatter.tags" :key="tag" :href="withBase(`/tags/${tag}.html`)" class="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-600 hover:bg-brand-500 hover:text-white dark:bg-brand-500/30 dark:text-white/90">#{{ tag }}</a>
</div>

<div class="prose dark:prose-invert mx-auto max-w-2xl px-6 pb-16 pt-4">

# An afternoon in the old town

*CHANGE ME: another example post.*

Twenty minutes by car, and worth a half day if the weather's not beach weather, or just for a
change of pace.

**Lunch.** A small family-run place two streets back from the main square, not the ones with
photo menus out front. Ask for whatever's fresh that day.

**A walk.** The old fortress at the far end is free to enter after 4pm and empties out by then
too, unlike the middle of the day.

**One souvenir stop.** Most of the shops near the main square sell the same imported magnets. The
ceramics shop by the old market is the one actually worth stopping at.

[Back to all posts](/posts/)

</div>
