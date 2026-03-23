<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)
const visible = ref(false)

function onMouseMove(e: MouseEvent) {
  x.value = e.clientX
  y.value = e.clientY
  visible.value = true
}

function onMouseLeave() {
  visible.value = false
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseleave', onMouseLeave)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseleave', onMouseLeave)
})
</script>

<template>
  <div
    class="pointer-events-none fixed inset-0 z-40 transition-opacity duration-300"
    :class="visible ? 'opacity-100' : 'opacity-0'"
  >
    <div
      class="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      :style="{
        left: `${x}px`,
        top: `${y}px`,
        background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
      }"
    />
  </div>
</template>
