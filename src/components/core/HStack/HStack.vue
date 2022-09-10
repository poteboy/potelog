<template>
  <hstack class="h-stack">
    <slot />
  </hstack>
</template>

<script setup lang="ts">
import { render, h, useSlots, computed, ComputedRef } from 'vue';
import { HTMLTag, Length } from '../utils';
const slot = useSlots();

const { as, space } = defineProps<{
  as?: HTMLTag;
  space?: number;
}>();

const tag: ComputedRef<HTMLTag> = computed(() => as ?? 'div');
const gap: ComputedRef<Length> = computed(() => {
  const length: Length = space ? `${space}px` : `${0}px`;
  return length;
});

const hstack = () => {
  return h(tag.value, {}, slot);
};
</script>

<style scoped>
.h-stack {
  display: flex;
  flex-direction: row;
  gap: v-bind(gap);
}
</style>
