<template>
  <hstack class="h-stack">
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

const props = withDefaults(
  defineProps<{
    as?: HTMLTag;
    space?: number;
    justify?: Justify;
    align?: Align;
  }>(),
  {
    as: 'div',
    justify: 'normal',
    align: 'normal',
  }
);

const tag: ComputedRef<HTMLTag> = computed(() => props.as ?? 'div');
const gap: ComputedRef<Length> = computed(() => {
  const length: Length = props.space ? `${props.space}px` : `${0}px`;
  return length;
});
const justifyContent: ComputedRef<JustifyContent> = computed(() => {
  return _justifyContent[props.justify];
});
const alignItems: ComputedRef<AlignItems> = computed(() => {
  return _alignItems[props.align];
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
  justify-content: v-bind(justifyContent);
  align-items: v-bind(align);
}
</style>
