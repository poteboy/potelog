import { ref, onMounted, Ref, onUnmounted, watch } from 'vue';

export const useHover = () => {
  const hoverRef = ref<HTMLElement>(null);
  const isHoverd = ref(false);

  const handleMouseOver = () => {
    console.log('hello');
    return (isHoverd.value = true);
  };
  const handleMouseOut = () => (isHoverd.value = false);

  onMounted(() => {});

  watch(hoverRef, (curr, prev, cleanUp) => {
    if (curr === null) return;
    console.log(curr);
    // curr.addEventListener('mouseover', handleMouseOver);
    // curr.addEventListener('mouseout', handleMouseOut);
  });

  return { isHoverd, hoverRef };
};
