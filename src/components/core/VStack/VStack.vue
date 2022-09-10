<template>
  <hstack class="v-stack">
    <slot />
  </hstack>
</template>

<script setup lang="ts">
import { render, h, useSlots, computed, ComputedRef, withDefaults } from 'vue';
import { HTMLTag, Length } from '../utils';
const slot = useSlots();

const { as, space } = withDefaults(
  defineProps<{
    as?: HTMLTag;
    space?: number;
  }>(),
  {
    as: 'div',
  }
);

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
.v-stack {
  display: flex;
  flex-direction: column;
  gap: v-bind(gap);
}
</style>
