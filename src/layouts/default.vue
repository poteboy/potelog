<template>
  <div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import Icon from '@src/assets/poteboy.jpeg';

useHead({
  title: 'potelog | ぽてろぐ',
  description:
    'poteboyのお気持ち表明ポエムブログ。技術の話から日常の話までなんでも書きます。',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: Icon,
    },
  ],
});
</script>
