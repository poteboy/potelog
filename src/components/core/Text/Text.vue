<template>
  <typograpy class="text" ref="textRef">
    <slot />
  </typograpy>
</template>

<script setup lang="ts">
import {
  h,
  useSlots,
  computed,
  ComputedRef,
  withDefaults,
  onMounted,
  ref,
} from 'vue';
import { HTMLTag, htmlTags, Length } from '../utils';
import { colors } from '@src/style';
const { as, size, href } = withDefaults(
  defineProps<{
    as?: HTMLTag;
    size?: number;
    href?: string;
  }>(),
  {
    as: htmlTags.p,
    size: 16,
  }
);
const slot = useSlots();
const typograpy = () => {
  return h(as, {}, slot);
};
const textRef = ref<HTMLAnchorElement>();
onMounted(() => {
  if (!textRef.value) return;
  if (as === 'a') {
    textRef.value.href = href ?? '';
    textRef.value.style.textDecoration = 'none';
  }
});

const fontColor = computed(() => colors.Gray[800]);

const fontSize: ComputedRef<Length> = computed(() => {
  const length: Length = `${size}px`;
  return length;
});
</script>

<style scoped>
.text {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  color: v-bind(fontColor);
  font-size: v-bind(fontSize);
}
</style>
