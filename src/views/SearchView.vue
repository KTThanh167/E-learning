<script setup>
import TheHeader from '@/components/Layout/TheHeader.vue'
import LearningPlatform from '@/components/Search/LearningPlatform.vue'
import SearchAndFilter from '@/components/Search/SearchAndFilter.vue'
import SearchResult from '@/components/Search/SearchResult.vue'
import { ref } from 'vue'

const platform = ref({
  title: 'Know about learning learning platform',
})

const infors = ref([
  {
    desc: 'Free E-book, video & consolation',
  },
  {
    desc: 'Top instructors from around world',
  },
  {
    desc: 'Top courses from your team',
  },
])
</script>

<template>
  <!-- Header -->
  <div class="container">
    <TheHeader />
  </div>
  <!-- Search & Filter Section -->
  <div>
    <SearchAndFilter />
  </div>
  <!-- Search result -->
  <div class="container">
    <SearchResult />
  </div>
  <!-- Learning platform -->
  <div class="container">
    <LearningPlatform :platform="platform" :infors="infors" />
  </div>
</template>
