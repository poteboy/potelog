import { ref, computed, onMounted, onUnmounted, Ref} from 'vue'

export const BREAK_POINT = 768

type Size = {
    width: number,
    height: number
}

export function useWindowSize() {

    const windowSize: Ref<Size> = ref({ width: window.innerWidth, height: window.innerHeight })
    const isMobile = computed(() => windowSize.value.width < BREAK_POINT)

    const resize = () => windowSize.value = { width: window.innerWidth, height: window.innerHeight }

    onMounted(() => window.addEventListener('resize', resize))
    onUnmounted(() => window.removeEventListener('resize', resize))

    return { windowSize, isMobile }
} 