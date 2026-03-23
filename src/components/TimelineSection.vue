<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'
import SectionHeading from './SectionHeading.vue'

const { elementRef, isVisible } = useScrollReveal()

interface TimelineItem {
  year: string
  title: string
  org: string
  location: string
  type: 'work' | 'education' | 'volunteer'
  description: string[]
}

const timeline: TimelineItem[] = [
  {
    year: '2025 — Present',
    title: 'BSc Software Engineering',
    org: 'Syddansk Universitet (SDU)',
    location: 'Sønderborg, Denmark',
    type: 'education',
    description: [],
  },
  {
    year: 'Jul — Sep 2024',
    title: 'Web Developer',
    org: 'BGO Software',
    location: 'Sofia, Bulgaria',
    type: 'work',
    description: [
      'Developed web applications using C# and .NET',
      'Hands-on experience with modern web frameworks',
      'Collaborated within an agile team environment',
    ],
  },
  {
    year: '2024',
    title: 'Technical Team Member',
    org: 'International Olympiad in AI (IOAI)',
    location: '',
    type: 'volunteer',
    description: [
      'Part of the technical team for the first-ever International Olympiad in Artificial Intelligence',
    ],
  },
  {
    year: 'Aug — Nov 2023',
    title: 'Web Programmer',
    org: 'Simple Studio',
    location: 'Burgas, Bulgaria',
    type: 'work',
    description: [
      'Built and maintained websites using WordPress CMS',
      'Worked directly with customers and design teams',
    ],
  },
  {
    year: 'Sep 2020 — May 2025',
    title: 'Applied Programming Specialist',
    org: 'Professional School for Computer Programming & Innovation',
    location: 'Burgas, Bulgaria',
    type: 'education',
    description: [
      '5-year programme with two industry placements',
      'OOP, Algorithms, Databases (MSSQL), Web Development (ASP.NET)',
      'Software Engineering, Embedded Systems, Functional & Concurrent Programming',
    ],
  },
]

const typeColors: Record<string, { dot: string; badge: string; label: string }> = {
  work: { dot: 'bg-accent', badge: 'bg-accent/10 text-accent border-accent/30', label: 'Work' },
  education: { dot: 'bg-emerald-400', badge: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/30', label: 'Education' },
  volunteer: { dot: 'bg-amber-400', badge: 'bg-amber-400/10 text-amber-400 border-amber-400/30', label: 'Volunteer' },
}
</script>

<template>
  <section id="experience" class="py-24 px-6 bg-navy-800/20">
    <div
      ref="elementRef"
      :class="[
        'max-w-4xl mx-auto transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      ]"
    >
      <SectionHeading number="02" title="Experience & Education" />

      <!-- Legend -->
      <div class="flex flex-wrap gap-4 mt-8 mb-12">
        <div v-for="(style, key) in typeColors" :key="key" class="flex items-center gap-2">
          <div :class="['w-2.5 h-2.5 rounded-full', style.dot]" />
          <span class="text-xs text-slate-400 font-mono uppercase">{{ style.label }}</span>
        </div>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-[11px] top-2 bottom-2 w-px bg-glass-border" />

        <div
          v-for="(item, i) in timeline"
          :key="i"
          :class="[
            'relative pl-10 pb-12 last:pb-0 transition-all duration-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          ]"
          :style="{ transitionDelay: `${i * 120 + 200}ms` }"
        >
          <!-- Dot -->
          <div
            :class="[
              'absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-navy-900',
              typeColors[item.type].dot,
            ]"
          />

          <!-- Content -->
          <div class="group bg-glass border border-glass-border rounded-xl p-6 hover:border-accent/20 transition-colors">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <div>
                <h3 class="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                  {{ item.title }}
                </h3>
                <p class="text-sm text-slate-400">
                  {{ item.org }}<span v-if="item.location" class="text-slate-600"> — {{ item.location }}</span>
                </p>
              </div>
              <div class="flex items-center gap-3 shrink-0">
                <span :class="['px-2.5 py-0.5 border rounded-md text-xs font-mono', typeColors[item.type].badge]">
                  {{ typeColors[item.type].label }}
                </span>
                <span class="text-xs text-slate-500 font-mono whitespace-nowrap">{{ item.year }}</span>
              </div>
            </div>

            <ul v-if="item.description.length" class="space-y-1.5 mt-3">
              <li
                v-for="desc in item.description"
                :key="desc"
                class="flex items-start gap-2 text-sm text-slate-400"
              >
                <span class="text-accent mt-1 shrink-0">&#9656;</span>
                {{ desc }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
