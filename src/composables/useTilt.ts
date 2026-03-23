import { ref, onMounted, onUnmounted } from 'vue'

export function useTilt(intensity = 8) {
  const cardRef = ref<HTMLElement | null>(null)

  function onMouseMove(e: MouseEvent) {
    const el = cardRef.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale3d(1.02, 1.02, 1.02)`
  }

  function onMouseLeave() {
    const el = cardRef.value
    if (!el) return
    el.style.transform = ''
  }

  onMounted(() => {
    cardRef.value?.addEventListener('mousemove', onMouseMove)
    cardRef.value?.addEventListener('mouseleave', onMouseLeave)
  })

  onUnmounted(() => {
    cardRef.value?.removeEventListener('mousemove', onMouseMove)
    cardRef.value?.removeEventListener('mouseleave', onMouseLeave)
  })

  return { cardRef }
}
