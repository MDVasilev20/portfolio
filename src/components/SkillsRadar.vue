<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'
import { useScrollReveal } from '../composables/useScrollReveal'

Chart.register(...registerables)

const { elementRef, isVisible } = useScrollReveal()
const canvasRef = ref<HTMLCanvasElement | null>(null)

const data = {
  labels: [
    'C# / .NET',
    'SQL / DB',
    'Web',
    'C++',
    'Architecture',
    'DevOps',
  ],
  datasets: [
    {
      label: 'Proficiency',
      data: [90, 85, 75, 70, 80, 65],
      backgroundColor: 'rgba(6, 182, 212, 0.15)',
      borderColor: 'rgba(6, 182, 212, 0.8)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(6, 182, 212, 1)',
      pointBorderColor: '#0a0e1a',
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 7,
    },
  ],
}

onMounted(() => {
  if (!canvasRef.value) return
  new Chart(canvasRef.value, {
    type: 'radar',
    data,
    options: {
      responsive: true,
      maintainAspectRatio: true,
      layout: {
        padding: 16,
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
            display: false,
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.06)',
          },
          angleLines: {
            color: 'rgba(255, 255, 255, 0.06)',
          },
          pointLabels: {
            color: '#94a3b8',
            font: {
              family: "'JetBrains Mono', monospace",
              size: 12,
            },
            padding: 12,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: '#111827',
          titleColor: '#06b6d4',
          bodyColor: '#e2e8f0',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          titleFont: { family: "'JetBrains Mono', monospace" },
          bodyFont: { family: "'Inter', sans-serif" },
          callbacks: {
            label: (ctx) => ` ${ctx.raw}%`,
          },
        },
      },
    },
  })
})
</script>

<template>
  <div
    ref="elementRef"
    :class="[
      'w-full transition-all duration-700',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    ]"
  >
    <div class="bg-glass border border-glass-border rounded-xl p-4 sm:p-8 max-w-sm sm:max-w-lg mx-auto w-full">
      <h3 class="font-mono text-xs text-accent uppercase tracking-widest mb-6 text-center">
        Skill Proficiency
      </h3>
      <canvas ref="canvasRef" />
    </div>
  </div>
</template>
