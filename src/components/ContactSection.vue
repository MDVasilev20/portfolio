<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'
import SectionHeading from './SectionHeading.vue'

const { elementRef, isVisible } = useScrollReveal()
</script>

<template>
  <section id="contact" class="py-24 px-6">
    <div
      ref="elementRef"
      :class="[
        'max-w-3xl mx-auto text-center transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      ]"
    >
      <SectionHeading number="04" title="Get In Touch" />

      <p class="text-slate-400 mt-8 text-lg leading-relaxed max-w-xl mx-auto">
        I'm currently looking for opportunities in data engineering and backend development.
        Whether you have a question or just want to say hello — my inbox is always open.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
        <a
          href="mailto:maksim.vasilev.dev@gmail.com"
          class="px-8 py-3 bg-accent/10 border border-accent/50 text-accent font-mono text-sm rounded-lg
                 hover:bg-accent/20 hover:border-accent hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]
                 transition-all duration-300 flex items-center gap-2"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Say Hello
        </a>

        <a
          href="https://github.com/MDVasilev20"
          target="_blank"
          rel="noopener noreferrer"
          class="px-8 py-3 bg-glass border border-glass-border text-slate-300 font-mono text-sm rounded-lg
                 hover:border-slate-500 hover:text-white transition-all duration-300 flex items-center gap-2"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>

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

    <!-- Footer -->
    <div class="mt-24 text-center text-sm text-slate-600 font-mono">
      <p>Designed & Built by Maksim Vasilev</p>
    </div>
  </section>
</template>
