<template>
  <typograpy
    ref="textRef"
    class="text"
  >
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
const props = withDefaults(
  defineProps<{
    as?: HTMLTag;
    size?: number | Length;
    href?: string;
  }>(),
  {
    as: htmlTags.p,
    size: 16,
    href: '',
  }
);
const slot = useSlots();
const typograpy = () => {
  return h(props.as, {}, slot);
};
const textRef = ref<HTMLAnchorElement>();
onMounted(() => {
  if (!textRef.value) return;
  if (props.as === 'a') {
    textRef.value.href = props.href;
    textRef.value.target = '_blank';
  }
});

const fontColor = computed(() => colors.Gray[800]);

const fontSize: ComputedRef<Length> = computed(() => {
  if (typeof props.size !== 'number') return props.size;
  const length: Length = `${props.size}px`;
  return length;
});
</script>

<style scoped>
.text {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    'Liberation Mono', 'Courier New', monospace;
  color: v-bind(fontColor);
  font-size: v-bind(fontSize);
  text-decoration: none;
}
</style>
