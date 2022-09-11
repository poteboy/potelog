<template>
  <img
    :src="src"
    :alt="alt"
  >
</template>

<script setup lang="ts">
import { withDefaults, computed, ComputedRef } from 'vue';
import { Length } from '../utils';

const props = withDefaults(
  defineProps<{
    src: string;
    width?: number;
    height?: number;
    alt: string; // alt is required for the sake of a11y
    borderRadius?: number | Length;
  }>(),
  {
    width: 30,
    height: 30,
    borderRadius: 0,
  }
);

const w: ComputedRef<Length> = computed(() => {
  const length: Length = `${props.width}px`;
  return length;
});

const h: ComputedRef<Length> = computed(() => {
  const length: Length = `${props.height}px`;
  return length;
});

const br: ComputedRef<Length> = computed(() => {
  if (typeof props.borderRadius !== 'number') return props.borderRadius;
  const radius: Length = `${props.borderRadius}px`;
  return radius;
});
</script>

<style scoped>
img {
  height: v-bind(h);
  width: v-bind(w);
  border-radius: v-bind(br);
}
</style>
