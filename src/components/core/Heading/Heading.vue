<template>
  <heading class="heading">
    <slot />
  </heading>
</template>

<script setup lang="ts">
import { h, useSlots, computed, ComputedRef, withDefaults } from 'vue';
import { HeadingTag, headingTags, Length } from '../utils';
import { colors } from '@src/style';
const { as, size } = withDefaults(
  defineProps<{
    as?: HeadingTag;
    size?: number;
  }>(),
  {
    as: headingTags.h1,
    size: 28,
  }
);
const slot = useSlots();
const heading = () => {
  return h(as, {}, slot);
};

const fontColor = computed(() => colors.Gray[800]);

const fontSize: ComputedRef<Length> = computed(() => {
  const length: Length = `${size}px`;
  return length;
});
</script>

<style scoped>
.heading {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  /* color: v-bind(fontColor); */
  font-size: v-bind(fontSize);
  font-weight: 700;
}
</style>
