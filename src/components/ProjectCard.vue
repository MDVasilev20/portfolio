<script setup lang="ts">
import type { Project } from '../data/projects'
import { useTilt } from '../composables/useTilt'

defineProps<{
  project: Project
  delay: number
  visible: boolean
}>()

const { cardRef } = useTilt(6)

const icons: Record<string, string> = {
  // Globe - travel/geography
  globe: 'M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 016.32 3.1A14.9 14.9 0 0012 5.5c-2.3 0-4.4.6-6.32 1.6A8 8 0 0112 4zm-8 8a8 8 0 01.84-3.55C6.84 9.45 9.3 10 12 10s5.16-.55 7.16-1.55A8 8 0 0120 12a8 8 0 01-1.26 4.28C16.8 15.12 14.5 14.5 12 14.5s-4.8.62-6.74 1.78A8 8 0 014 12zm8 8a8 8 0 01-5.9-2.6c1.66-.98 3.72-1.5 5.9-1.5s4.24.52 5.9 1.5A8 8 0 0112 20z',
  // Flame - heat/energy
  flame: 'M12 2c0 4-4 6-4 10a4 4 0 008 0c0-4-4-6-4-10zm0 14a2 2 0 01-2-2c0-1.2 1-2.4 2-3.8 1 1.4 2 2.6 2 3.8a2 2 0 01-2 2z',
  // Map pin - world explorer
  map: 'M9 2L3 5v17l6-3 6 3 6-3V2l-6 3-6-3zm0 2.5l6 3v12l-6-3v-12zm-2 0v12l-4 2V6.5l4-2zm14 0v12l-4 2v-12l4-2z',
  // Cards/layers - card game
  cards: 'M4 6a2 2 0 012-2h8a2 2 0 012 2v1h2a2 2 0 012 2v8a2 2 0 01-2 2h-1v1a2 2 0 01-2 2H7a2 2 0 01-2-2v-1H4a2 2 0 01-2-2V8a2 2 0 012-2V6zm2 0v1h8a2 2 0 012 2v6h1a1 1 0 001-1V9a1 1 0 00-1-1H8V7a1 1 0 00-1-1H6zm1 4a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1v-8a1 1 0 00-1-1H7z',
  // Atom - chemistry/science
  atom: 'M12 12m-2 0a2 2 0 104 0 2 2 0 10-4 0M12 2C9.24 2 7 4.24 7 7c0 .84.18 1.63.5 2.35C4.8 10.6 3 12.1 3 14c0 2.76 4.03 5 9 5s9-2.24 9-5c0-1.9-1.8-3.4-4.5-4.65.32-.72.5-1.51.5-2.35 0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 8c3.87 0 7 1.34 7 3s-3.13 3-7 3-7-1.34-7-3 3.13-3 7-3z',
  // Gamepad - arcade game
  gamepad: 'M6 9h2v2H6v2h2v-2h2V9H8V7H6v2zm9.5 1a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm3 2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM2 7a4 4 0 014-4h12a4 4 0 014 4v6a4 4 0 01-4 4H6a4 4 0 01-4-4V7zm4-2a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2H6z',
}
</script>

<template>
  <article
    ref="cardRef"
    :class="[
      'group relative bg-glass border border-glass-border rounded-xl overflow-hidden',
      'hover:border-accent/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]',
      'transition-[border,box-shadow,opacity,translate] duration-500',
      visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
    ]"
    :style="{ transitionDelay: `${delay}ms`, willChange: 'transform' }"
  >
    <!-- Card header with gradient + icon -->
    <div :class="['relative h-48 bg-gradient-to-br overflow-hidden', project.gradient]">
      <div
        class="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent z-10"
      />

      <!-- Decorative icon -->
      <div class="absolute inset-0 flex items-center justify-center opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500">
        <svg class="w-40 h-40 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path :d="icons[project.icon]" />
        </svg>
      </div>

      <!-- Animated dots pattern -->
      <div class="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern :id="`dots-${project.id}`" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" class="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" :fill="`url(#dots-${project.id})`" />
        </svg>
      </div>

      <!-- Category badge -->
      <div class="absolute top-4 right-4 z-20">
        <span class="px-2.5 py-1 bg-navy-900/70 backdrop-blur-sm border border-glass-border rounded-md text-xs font-mono text-accent uppercase">
          {{ project.category === 'backend' ? 'Data & Backend' : project.category }}
        </span>
      </div>

      <!-- Title -->
      <div class="absolute bottom-4 left-6 z-20">
        <h3 class="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
          {{ project.title }}
        </h3>
      </div>
    </div>

    <div class="p-6 space-y-4">
      <p class="text-sm text-slate-400 leading-relaxed">
        {{ project.tagline }}
      </p>

      <!-- Highlights -->
      <ul class="space-y-1.5">
        <li
          v-for="h in project.highlights"
          :key="h"
          class="flex items-start gap-2 text-xs text-slate-500"
        >
          <span class="text-accent mt-0.5 shrink-0">&#9656;</span>
          {{ h }}
        </li>
      </ul>

      <!-- Tech badges -->
      <div class="flex flex-wrap gap-1.5 pt-2">
        <span
          v-for="t in project.tech"
          :key="t"
          class="px-2 py-0.5 bg-accent/5 border border-accent/20 rounded text-xs font-mono text-accent/80"
        >
          {{ t }}
        </span>
      </div>

      <!-- Footer: role + links -->
      <div class="flex items-center justify-between pt-4 border-t border-glass-border">
        <span class="text-xs text-slate-500">
          Role: <span class="text-slate-400">{{ project.role }}</span>
        </span>
        <div class="flex items-center gap-3">
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs text-accent hover:text-accent-light transition-colors font-mono flex items-center gap-1"
          >
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Demo
          </a>
          <a
            :href="project.repo"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs text-slate-400 hover:text-accent transition-colors font-mono flex items-center gap-1"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Code
          </a>
        </div>
      </div>
    </div>
  </article>
</template>
