<script setup>
import RecommendedCourseCard from '../Course/RecommendedCourseCard.vue'
defineProps({
  courses: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <!-- Card result -->
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px] xl:gap-[60px] mt-[70px]">
    <RecommendedCourseCard v-for="item in courses" :key="item.id" :course="item" />
  </div>
</template>
