<script setup>
import TheHeader from '@/components/Layout/TheHeader.vue'
import TheFooter from '@/components/Layout/TheFooter.vue'
</script>

<template>
  <TheHeader class="sticky top-0 z-100" />
  <router-view />
  <TheFooter />
</template>
