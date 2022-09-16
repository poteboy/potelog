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
import { fontFamilies, HTMLTag, htmlTags, Length } from '../utils';
import { colors } from '@src/style';
const props = withDefaults(
  defineProps<{
    as?: HTMLTag;
    size?: number | Length;
    href?: string;
    color?: string;
    font?: 'monospace' | 'verdana' | 'wotfard'
  }>(),
  {
    as: htmlTags.p,
    size: '1rem' as Length,
    href: '',
    color: colors.Gray[800],
    font: 'verdana'
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

const fontColor = ref(props.color);

const fontSize: ComputedRef<Length> = computed(() => {
  if (typeof props.size !== 'number') return props.size;
  const length: Length = `${props.size}px`;
  return length;
});

const fontFamily = ref(
  props.font === 'monospace' ? fontFamilies.monospace : props.font === 'verdana' ? fontFamilies.verdana : fontFamilies.wotfard
)

</script>

<style scoped>
.text {
  font-family: v-bind(fontFamily);
  color: v-bind(fontColor);
  font-size: v-bind(fontSize);
  text-decoration: none;
}
</style>
