<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollSpy } from '../composables/useScrollSpy'

const scrolled = ref(false)
const mobileOpen = ref(false)
const { activeSection } = useScrollSpy(['about', 'projects', 'demo', 'contact'])

const links = [
  { href: '#about', label: 'About', id: 'about' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#demo', label: 'Live Demo', id: 'demo' },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

function onScroll() {
  scrolled.value = window.scrollY > 50
}

function navigate(href: string) {
  mobileOpen.value = false
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

function scrollToTop() {
  globalThis.window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-navy-900/80 backdrop-blur-xl border-b border-glass-border shadow-lg'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <a
        href="#"
        class="font-mono font-bold text-lg text-accent tracking-tight hover:text-accent-light transition-colors"
        @click.prevent="scrollToTop"
      >
        &lt;MV /&gt;
      </a>

      <!-- Desktop -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          :class="[
            'text-sm transition-colors font-medium relative',
            activeSection === link.id
              ? 'text-accent'
              : 'text-slate-400 hover:text-accent',
          ]"
          @click.prevent="navigate(link.href)"
        >
          {{ link.label }}
          <span
            :class="[
              'absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300',
              activeSection === link.id ? 'w-full' : 'w-0',
            ]"
          />
        </a>
      </div>

      <!-- Mobile toggle -->
      <button
        class="md:hidden text-slate-400 hover:text-accent transition-colors"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            v-if="!mobileOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden bg-navy-900/95 backdrop-blur-xl border-b border-glass-border px-6 pb-4"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          :class="[
            'block py-3 transition-colors font-medium',
            activeSection === link.id ? 'text-accent' : 'text-slate-400 hover:text-accent',
          ]"
          @click.prevent="navigate(link.href)"
        >
          {{ link.label }}
        </a>
      </div>
    </Transition>
  </nav>
</template>
