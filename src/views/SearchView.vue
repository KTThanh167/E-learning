<script setup>
import TheHeader from '@/components/Layout/TheHeader.vue'
import SearchAndFilter from '@/components/Search/SearchAndFilter.vue'
import SearchResult from '@/components/Search/SearchResult.vue'
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
</template>
