<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import DemoSection from './components/DemoSection.vue'
import ContactSection from './components/ContactSection.vue'
import CursorGlow from './components/CursorGlow.vue'
</script>

<template>
  <CursorGlow />
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <TimelineSection />
    <ProjectsSection />
    <DemoSection />
    <ContactSection />
  </main>
</template>
