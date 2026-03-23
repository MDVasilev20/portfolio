<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects, categories } from '../data/projects'
import { useScrollReveal } from '../composables/useScrollReveal'
import SectionHeading from './SectionHeading.vue'
import ProjectCard from './ProjectCard.vue'

const { elementRef, isVisible } = useScrollReveal()
const activeFilter = ref<string>('all')

const filtered = computed(() =>
  activeFilter.value === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter.value)
)
</script>

<template>
  <section id="projects" class="py-24 px-6">
    <div
      ref="elementRef"
      :class="[
        'max-w-6xl mx-auto transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      ]"
    >
      <SectionHeading number="02" title="Projects" />

      <!-- Filter bar -->
      <div class="flex flex-wrap gap-2 mt-8 mb-10">
        <button
          v-for="cat in categories"
          :key="cat.key"
          :class="[
            'px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-300',
            activeFilter === cat.key
              ? 'bg-accent/20 text-accent border border-accent/50'
              : 'bg-glass border border-glass-border text-slate-400 hover:text-slate-200 hover:border-slate-500',
          ]"
          @click="activeFilter = cat.key"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Project grid -->
      <TransitionGroup
        tag="div"
        class="grid md:grid-cols-2 gap-6"
        enter-active-class="transition-all duration-400 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-300 ease-in absolute"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <ProjectCard
          v-for="(project, i) in filtered"
          :key="project.id"
          :project="project"
          :delay="i * 100"
          :visible="isVisible"
        />
      </TransitionGroup>
    </div>
  </section>
</template>
