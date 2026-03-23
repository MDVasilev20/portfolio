<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'
import SectionHeading from './SectionHeading.vue'

const { elementRef, isVisible } = useScrollReveal()
</script>

<template>
  <section id="demo" class="py-24 px-6 bg-navy-800/30">
    <div
      ref="elementRef"
      :class="[
        'max-w-6xl mx-auto transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      ]"
    >
      <SectionHeading number="03" title="Live Demo" />

      <p class="text-slate-400 mt-4 mb-8 max-w-2xl">
        <span class="text-accent font-mono">No-Name — World Explorer</span> is an interactive
        world map built with vanilla JavaScript. Click on any country to see its data.
        <a
          href="https://github.com/KKDinev20/no-name"
          target="_blank"
          rel="noopener noreferrer"
          class="text-accent/70 hover:text-accent underline underline-offset-4 ml-1"
        >
          View source &rarr;
        </a>
      </p>

      <div class="relative rounded-xl overflow-hidden border border-glass-border bg-navy-900 shadow-2xl">
        <!-- Browser chrome -->
        <div class="flex items-center gap-2 px-4 py-3 bg-navy-800 border-b border-glass-border">
          <div class="flex gap-1.5">
            <div class="w-3 h-3 rounded-full bg-red-500/60" />
            <div class="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div class="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div class="flex-1 mx-4">
            <div class="bg-navy-900/50 rounded-md px-3 py-1 text-xs font-mono text-slate-500 max-w-md mx-auto text-center">
              no-name — world explorer
            </div>
          </div>
        </div>

        <iframe
          src="https://kkdinev20.github.io/no-name/website/"
          title="No-Name World Explorer Demo"
          class="w-full h-[500px] md:h-[600px] bg-white"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  </section>
</template>
