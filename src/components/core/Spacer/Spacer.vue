<template>
  <div :class="`spacer-${direction}`" />
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue';
import { Length } from '../utils';

const props = defineProps<{
  horizontal?: boolean;
  size: number | Length;
}>();

const direction: ComputedRef<'horizontal' | 'vertical'> = computed(() => {
  return props.horizontal ? 'horizontal' : 'vertical';
});

const length: ComputedRef<Length> = computed(() => {
  if (typeof props.size !== 'number') return props.size;
  const length: Length = `${props.size}px`;
  return length;
});
</script>

<style scoped>
.spacer-horizontal {
  height: auto;
  width: v-bind(length);
  display: inline-block;
  flex-shrink: 0;
}

.spacer-vertical {
  height: v-bind(length);
  width: auto;
  display: block;
  flex-shrink: 0;
}
</style>
