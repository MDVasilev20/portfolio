<script setup lang="ts">
import { useScrollReveal } from '../composables/useScrollReveal'
import SectionHeading from './SectionHeading.vue'
import SkillsRadar from './SkillsRadar.vue'

const { elementRef, isVisible } = useScrollReveal()

const skillGroups = [
  {
    label: 'Languages',
    skills: ['C#', 'C++', 'C', 'SQL', 'JavaScript', 'TypeScript', 'PHP', 'HTML/CSS', 'SCSS'],
  },
  {
    label: 'Frameworks & Tools',
    skills: ['ASP.NET Core', '.NET', 'Vue.js', 'Entity Framework', 'Razor', 'Bootstrap', 'WordPress', 'Docker'],
  },
  {
    label: 'Databases',
    skills: ['MSSQL', 'MySQL', 'PostgreSQL', 'Supabase'],
  },
  {
    label: 'Architecture & Practices',
    skills: ['REST APIs', 'ORM', 'SOLID', 'Design Patterns', 'Three-Layer Architecture', 'Agile'],
  },
  {
    label: 'DevOps & Testing',
    skills: ['Git', 'GitHub Actions', 'CI/CD', 'Cypress', 'xUnit', 'Unit Testing', 'Integration Testing'],
  },
]
</script>

<template>
  <section id="about" class="py-24 px-6">
    <div
      ref="elementRef"
      :class="[
        'max-w-6xl mx-auto transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
      ]"
    >
      <SectionHeading number="01" title="About Me" />

      <div class="grid md:grid-cols-2 gap-12 mt-12">
        <!-- Left: Bio + Skills -->
        <div class="space-y-8">
          <div class="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Software engineering student at <span class="text-slate-200">SDU Sønderborg</span> with
              5 years of academic study and professional experience at
              <span class="text-accent">BGO Software</span> and
              <span class="text-accent">Simple Studio</span>.
              I was part of the technical team for the first-ever
              <span class="text-slate-200">International Olympiad in AI</span>.
            </p>
            <p>
              I'm most at home working with <span class="text-accent">C#/.NET</span>,
              <span class="text-accent">SQL</span>, and backend systems — but I thrive on
              picking up new tools and tackling unfamiliar problems. I enjoy turning messy
              data into clean, reliable pipelines and building software that people can trust.
            </p>
          </div>

          <!-- Skill badges -->
          <div class="space-y-5">
            <div
              v-for="(group, gi) in skillGroups"
              :key="group.label"
              :class="[
                'transition-all duration-500',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
              ]"
              :style="{ transitionDelay: `${gi * 100 + 200}ms` }"
            >
              <h3 class="font-mono text-xs text-accent uppercase tracking-widest mb-2.5">
                {{ group.label }}
              </h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in group.skills"
                  :key="skill"
                  class="px-3 py-1.5 bg-glass border border-glass-border rounded-md text-sm text-slate-300
                         hover:border-accent/50 hover:text-accent hover:-translate-y-0.5
                         transition-all duration-200 cursor-default"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Radar chart -->
        <div class="flex items-center overflow-hidden">
          <SkillsRadar />
        </div>
      </div>
    </div>
  </section>
</template>
