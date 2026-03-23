<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ParticleCanvas from './ParticleCanvas.vue'

const roles = [
  'Software Engineer',
  'Data Enthusiast',
  'Backend Developer',
  'Problem Solver',
]
const currentRole = ref('')
const roleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
let timeout: ReturnType<typeof setTimeout>

function tick() {
  const full = roles[roleIndex.value]
  if (!isDeleting.value) {
    currentRole.value = full.slice(0, charIndex.value + 1)
    charIndex.value++
    if (charIndex.value === full.length) {
      timeout = setTimeout(() => {
        isDeleting.value = true
        tick()
      }, 2000)
      return
    }
    timeout = setTimeout(tick, 80)
  } else {
    currentRole.value = full.slice(0, charIndex.value - 1)
    charIndex.value--
    if (charIndex.value === 0) {
      isDeleting.value = false
      roleIndex.value = (roleIndex.value + 1) % roles.length
      timeout = setTimeout(tick, 400)
      return
    }
    timeout = setTimeout(tick, 40)
  }
}

onMounted(() => {
  timeout = setTimeout(tick, 600)
})

onUnmounted(() => clearTimeout(timeout))

function scrollToProjects() {
  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <ParticleCanvas />

    <div class="relative z-10 text-center px-6 max-w-3xl mx-auto">
      <p class="font-mono text-accent text-sm mb-4 tracking-widest uppercase opacity-0 animate-[fadeInUp_0.6s_0.2s_forwards]">
        Hello, I'm
      </p>
      <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 opacity-0 animate-[fadeInUp_0.6s_0.4s_forwards]">
        Maksim Vasilev
      </h1>
      <div class="h-10 md:h-12 flex items-center justify-center opacity-0 animate-[fadeInUp_0.6s_0.6s_forwards]">
        <span class="font-mono text-xl md:text-2xl text-slate-300">
          {{ currentRole }}<span class="animate-pulse text-accent">|</span>
        </span>
      </div>
      <p class="text-slate-400 mt-6 text-lg max-w-xl mx-auto opacity-0 animate-[fadeInUp_0.6s_0.8s_forwards]">
        Building robust software with C#, C++, SQL, and modern web technologies.
        Passionate about data engineering and clean architecture.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 opacity-0 animate-[fadeInUp_0.6s_1s_forwards]">
        <button
          class="px-8 py-3 bg-accent/10 border border-accent/50 text-accent font-mono text-sm rounded-lg
                 hover:bg-accent/20 hover:border-accent hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]
                 transition-all duration-300"
          @click="scrollToProjects"
        >
          View My Work
        </button>
        <a
          href="/resume.pdf"
          target="_blank"
          class="px-8 py-3 bg-glass border border-glass-border text-slate-300 font-mono text-sm rounded-lg
                 hover:border-slate-500 hover:text-white transition-all duration-300 flex items-center gap-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Resume
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-[fadeInUp_0.6s_1.2s_forwards]">
      <div class="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
        <div class="w-1.5 h-3 bg-accent rounded-full mt-2 animate-bounce" />
      </div>
    </div>
  </section>
</template>

<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
