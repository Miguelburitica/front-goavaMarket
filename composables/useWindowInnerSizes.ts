import { onMounted, onUnmounted } from 'vue'

export const useWindowInnerSizes = () => {
  const innerWidth = ref(window?.innerWidth)
  const innerHeight = ref(window?.innerHeight)

  const onResize = () => {
    innerWidth.value = window?.innerWidth
    innerHeight.value = window?.innerHeight
  }

  onMounted(() => {
    if (window) window.addEventListener('resize', onResize)
  })

  onUnmounted(() => {
    if (window) window.removeEventListener('resize', onResize)
  })

  return { innerWidth, innerHeight }
}
