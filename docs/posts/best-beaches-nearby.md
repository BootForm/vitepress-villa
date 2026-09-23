---
layout: page
title: The best beaches within a short drive
date: 2026-06-10
author: elena
tags: [local-guide]
image: /posts/best-beaches.jpg
description: You don't have to leave the pool to have a good day, but if you do, here's where we send guests first.
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

# The best beaches within a short drive

*CHANGE ME: this is an example post. Replace it, or delete both example posts and write your own.
The post list and tag pages regenerate from whatever's actually in this folder.*

Most guests don't leave the property much in the first day or two; the pool takes care of that.
By day three, people start asking where to go, so here's the short list we actually give out.

**Closest.** A quiet cove about ten minutes by car, usually empty on weekday mornings.

**Best for families.** A longer stretch of sand with shallow water and a taverna right on the
beach, about twenty minutes away.

**Worth the drive.** A well-known bay on the other side of the island, an hour each way, but the
kind of view that ends up in every photo from the trip.

[Back to all posts](/posts/)

</div>
