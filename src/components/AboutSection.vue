<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'
import SectionHeading from './SectionHeading.vue'

const { elementRef, isVisible } = useScrollReveal()

const skillGroups = [
  {
    label: 'Languages',
    skills: ['C#', 'C++', 'SQL', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SCSS', 'Python'],
  },
  {
    label: 'Frameworks & Tools',
    skills: ['ASP.NET Core', '.NET', 'Vue.js', 'Entity Framework', 'Raylib', 'SDL2', 'Docker'],
  },
  {
    label: 'Databases',
    skills: ['SQL Server (MSSQL)', 'PostgreSQL', 'Supabase'],
  },
  {
    label: 'DevOps & Other',
    skills: ['Git', 'GitHub Actions', 'CI/CD', 'Cypress', 'xUnit', 'Figma'],
  },
]
</script>

<template>
  <section id="about" class="py-24 px-6">
    <div
      ref="elementRef"
      :class="[
        'max-w-5xl mx-auto transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      ]"
    >
      <SectionHeading number="01" title="About Me" />

      <div class="grid md:grid-cols-5 gap-12 mt-12">
        <!-- Bio -->
        <div class="md:col-span-2 space-y-4 text-slate-400 leading-relaxed">
          <p>
            I'm a software engineering student with hands-on experience building everything from
            <span class="text-slate-200">microservice architectures</span> and
            <span class="text-slate-200">relational databases</span> to
            <span class="text-slate-200">game engines</span> and
            <span class="text-slate-200">interactive web applications</span>.
          </p>
          <p>
            I'm most at home working with <span class="text-accent">C#/.NET</span>,
            <span class="text-accent">SQL</span>, and backend systems — but I thrive on
            picking up new tools and tackling unfamiliar problems. I enjoy turning messy
            data into clean, reliable pipelines and building software that people can trust.
          </p>
          <p>
            Currently seeking opportunities in
            <span class="text-slate-200">data engineering</span> and
            <span class="text-slate-200">backend development</span> where I can apply my
            strong fundamentals and learn at scale.
          </p>
        </div>

        <!-- Skills -->
        <div class="md:col-span-3 space-y-6">
          <div
            v-for="(group, gi) in skillGroups"
            :key="group.label"
            :class="[
              'transition-all duration-500',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            ]"
            :style="{ transitionDelay: `${gi * 100 + 200}ms` }"
          >
            <h3 class="font-mono text-xs text-accent uppercase tracking-widest mb-3">
              {{ group.label }}
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in group.skills"
                :key="skill"
                class="px-3 py-1.5 bg-glass border border-glass-border rounded-md text-sm text-slate-300
                       hover:border-accent/50 hover:text-accent transition-colors cursor-default"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
