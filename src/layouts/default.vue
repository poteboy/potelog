<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import Icon from '@src/assets/poteboy.jpeg';
import { useHead } from '#imports';

const description =
  'poteboyのお気持ち表明ブログ。技術の話から日常の話までなんでも書きます。';

useHead({
  title: 'potelog | ぽてろぐ',
  description: description,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: Icon,
    },
  ],
});
</script>
