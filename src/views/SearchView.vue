<script setup>
import { ref } from 'vue'
import RecommendedCourseCard from '@/components/Course/RecommendedCourseCard.vue'
import TheHeader from '@/components/Layout/TheHeader.vue'
import LearningPlatform from '@/components/Search/LearningPlatform.vue'
import SearchAndFilter from '@/components/Search/SearchAndFilter.vue'
import SearchResult from '@/components/Search/SearchResult.vue'
import CreatorCard from '@/components/Search/CreatorCard.vue'
import StudentsSay from '@/components/Search/StudentsSay.vue'
import TopEducationCard from '@/components/CourseDetail/TopEducationCard.vue'
import TheFooter from '@/components/Layout/TheFooter.vue'
// Import Data
import { creators } from '@/data/Search/Creator'
const creatorData = ref(creators)

import { infors } from '@/data/Search/LearningPlatform'
const learningPlatformDataInfors = ref(infors)

import { platform } from '@/data/Search/LearningPlatform'
const learningPlatformDataPlatform = ref(platform)

import { recommendedCourses } from '@/data/Search/RecommendedCourse'
const recommendedCourseData = ref(recommendedCourses)

import { student } from '@/data/Search/Student'
const studentData = ref(student)

import { instructors } from '@/data/Search/TopEducation'
const topEducationData = ref(instructors)

import { filteredCourses } from '@/data/Search/SearchResult'
const searchResult = ref(filteredCourses)
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
    <SearchResult :courses="searchResult" />
  </div>
  <!-- Learning platform -->
  <div class="container">
    <LearningPlatform
      :platform="learningPlatformDataPlatform"
      :infors="learningPlatformDataInfors"
    />
  </div>
  <!-- Recommended for you -->
  <div class="bg-[rgba(157,204,255,0.2)] mt-[70px] pb-[200px]">
    <div class="container">
      <!-- Recommended header -->
      <div class="flex justify-between pt-[90px]">
        <p class="font-medium text-[30px]">Recommended for you</p>
        <button class="text-primary font-bold text-[20px]">See all</button>
      </div>
      <!-- Recommended card -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-[50px] gap-[20px] pt-[50px]"
      >
        <RecommendedCourseCard
          v-for="(item, index) in recommendedCourseData"
          :key="index"
          :course="item"
        />
      </div>
    </div>
  </div>
  <!-- real creators -->
  <div class="container">
    <!-- real creators header -->
    <div class="mt-[90px] flex justify-between">
      <p class="font-medium text-[30px]">Classes tought by real creators</p>
      <button class="text-primary font-bold text-[20px]">See all</button>
    </div>
    <!-- real creators list card -->
    <div class="mt-[50px] grid grid-cols-3 gap-[48px] pb-[80px]">
      <CreatorCard
        v-for="(item, index) in creatorData"
        :key="index"
        :creator="item"
        class="mt-[150px]"
      />
    </div>
  </div>
  <!-- students say -->
  <div class="bg-[rgba(157,204,255,0.2)]">
    <div class="container">
      <StudentsSay :student="studentData" />
    </div>
  </div>
  <!-- Top education -->
  <div class="container">
    <!-- header -->
    <div class="flex justify-between pt-[70px] pb-[70px]">
      <p class="font-medium text-[30px]">Top Education offers and deals are listed here</p>
      <button class="text-primary font-bold text-[20px]">See all</button>
    </div>
    <!-- content -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[70px] pb-[80px]">
      <TopEducationCard
        v-for="(item, index) in topEducationData"
        :key="index"
        :instructor="item"
        badgeClass="bg-primary"
        overlayColor="rgba(0,0,0,0.4)"
      />
    </div>
  </div>
  <!-- Footer -->
  <TheFooter />
</template>
