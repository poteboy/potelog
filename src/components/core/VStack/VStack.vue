<template>
  <vstack class="v-stack">
    <slot />
  </vstack>
</template>

<script setup lang="ts">
import {
  h,
  useSlots,
  computed,
  ComputedRef,
  withDefaults,
  Ref,
  useAttrs,
} from 'vue';
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
    space?: number | Length;
    justify?: Justify;
    align?: Align;
  }>(),
  {
    as: 'div',
    justify: 'normal',
    align: 'normal',
    space: 0,
  }
);

const tag: ComputedRef<HTMLTag> = computed(() => props.as ?? 'div');
const gap: ComputedRef<Length> = computed(() => {
  if (typeof props.space !== 'number') return props.space;
  const length: Length = `${props.space}px`;
  return length;
});
const justifyContent: ComputedRef<JustifyContent> = computed(() => {
  return _justifyContent[props.justify];
});
const alignItems: ComputedRef<AlignItems> = computed(() => {
  return _alignItems[props.align];
});

const vstack = () => {
  return h(tag.value, props, slot);
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
