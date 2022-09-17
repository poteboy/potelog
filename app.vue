<template>
  <NuxtPage />
</template>

<script setup lang="ts">
import Icon from '@src/assets/poteboy.jpeg';
import { useHead } from '#imports';
import { NuxtLayout } from '#components'
import { meta, links} from '@src/constants'
import OGP from '@src/assets/ogp.jpg'

useHead({
  title: meta.title,
  description: meta.description,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: Icon,
    },
  ],
  meta: [
    { hid: 'og:image',
      property: 'og:image',
      content: OGP
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      property: 'og:title',
      content: meta.title
    }
  ]
});

</script>
