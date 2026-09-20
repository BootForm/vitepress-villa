---
layout: page
title: Gallery
---

<script setup>
import { withBase } from 'vitepress'
</script>

<!-- CHANGE ME: replace docs/public/gallery/*.jpg with your own photos, in any quantity; each
     <img> below is a literal file, not generated from a folder listing, so add or remove <img>
     tags here to match whatever you actually have. Each `src` is a runtime binding (`:src`), not
     a literal markdown image, so it needs withBase() by hand: see AGENTS.md's link-handling
     section for why a plain `<img src="/gallery/1.jpg">` here would 404 once this site is
     deployed to a subpath. -->

<div class="mx-auto max-w-6xl px-6 py-16">

<h1 class="mb-2 text-3xl! font-bold! tracking-tight">Gallery</h1>
<p class="mb-8 text-black/70! dark:text-white/70!">The villa, the pool, and the coast around it.</p>

<div class="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>img]:mb-4 [&>img]:w-full [&>img]:rounded-lg [&>img]:break-inside-avoid">
  <img :src="withBase('/gallery/1.jpg')" alt="">
  <img :src="withBase('/gallery/2.jpg')" alt="">
  <img :src="withBase('/gallery/3.jpg')" alt="">
  <img :src="withBase('/gallery/4.jpg')" alt="">
  <img :src="withBase('/gallery/5.jpg')" alt="">
  <img :src="withBase('/gallery/6.jpg')" alt="">
  <img :src="withBase('/gallery/7.jpg')" alt="">
</div>

</div>
