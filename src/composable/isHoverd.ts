import { ref, onMounted, Ref, onUnmounted, watch } from 'vue';

export const useHoverd = (elm: Ref<HTMLElement>) => {
  const isHoverd = ref(false);

  const checkHover = (e: MouseEvent) => {
    isHoverd.value =
      elm.value.parentElement.querySelector(':hover') === elm.value;
  };

  watch(
    elm,
    () => {
      if (!!elm.value) {
        elm.value.addEventListener('mousemove', checkHover);
      }
    },
    { immediate: true }
  );

  onUnmounted(() => {
    elm.value.removeEventListener('mousemove', checkHover);
  });

  return { isHoverd };
};
