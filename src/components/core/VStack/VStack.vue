<template>
  <hstack class="v-stack">
    <slot />
  </hstack>
</template>

<script setup lang="ts">
import { render, h, useSlots, computed, ComputedRef, withDefaults } from 'vue';
import {
  HTMLTag,
  Length,
  Justify,
  JustifyContent,
  justifyContent as _justifyContent,
  Align,
  AlignItems,
  alignItems as _alignItems,
} from '../utils';
const slot = useSlots();

const { as, space, justify, align } = withDefaults(
  defineProps<{
    as?: HTMLTag;
    space?: number;
    justify: Justify;
    align?: Align;
  }>(),
  {
    as: 'div',
    justify: 'normal',
    align: 'normal',
    space: 0,
  }
);

const tag: ComputedRef<HTMLTag> = computed(() => as ?? 'div');
const gap: ComputedRef<Length> = computed(() => {
  const length: Length = `${space}px`;
  return length;
});
const justifyContent: ComputedRef<JustifyContent> = computed(() => {
  return _justifyContent[justify];
});
const alignItems: ComputedRef<AlignItems> = computed(() => {
  return _alignItems[align];
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
  justify-content: v-bind(justifyContent);
  align-items: v-bind(alignItems);
}
</style>
