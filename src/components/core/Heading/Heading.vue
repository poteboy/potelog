<template>
  <heading class="heading">
    <slot />
  </heading>
</template>

<script setup lang="ts">
import { h, useSlots, computed, ComputedRef, withDefaults, ref } from 'vue';
import { HeadingTag, headingTags, Length } from '../utils';
import { colors } from '@src/style';
const props = withDefaults(
  defineProps<{
    as?: HeadingTag;
    size?: number | Length;
    color?: string;
  }>(),
  {
    as: headingTags.h1,
    size: 30,
    color: colors.Gray[900],
  }
);
const slot = useSlots();
const heading = () => {
  return h(props.as, {}, slot);
};

const fontColor = ref(props.color);

const fontSize: ComputedRef<Length> = computed(() => {
  if (typeof props.size !== 'number') return props.size;
  const length: Length = `${props.size}px`;
  return length;
});
</script>

<style scoped>
.heading {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  color: v-bind(fontColor);
  font-size: v-bind(fontSize);
  font-weight: 700;
}
</style>
