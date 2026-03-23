<script setup lang="ts">
defineProps<{
  number: string
  title: string
}>()
</script>

<template>
  <div class="flex items-center gap-4 mb-2">
    <span class="font-mono text-accent text-sm">{{ number }}.</span>
    <h2 class="text-2xl md:text-3xl font-bold text-white">{{ title }}</h2>
    <div class="flex-1 h-px bg-glass-border ml-4 hidden sm:block" />
  </div>
</template>
