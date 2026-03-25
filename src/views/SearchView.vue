<script setup>
import { ref } from 'vue'
import RecommendedCourseCard from '@/components/Course/RecommendedCourseCard.vue'
import TheHeader from '@/components/Layout/TheHeader.vue'
import LearningPlatform from '@/components/Search/LearningPlatform.vue'
import SearchAndFilter from '@/components/Search/SearchAndFilter.vue'
import SearchResult from '@/components/Search/SearchResult.vue'

import FilteredCourse01 from '../assets/img/Search/filtered-course-01.png'
import FilteredCourse02 from '../assets/img/Search/filtered-course-02.png'
import FilteredCourse03 from '../assets/img/Search/filtered-course-03.png'
import FilteredCourse04 from '../assets/img/Search/filtered-course-04.png'
import UserAvt from '../assets/img/Avatar/user-avatar.png'
import CreatorCard from '@/components/Search/CreatorCard.vue'

import Creator01 from '../assets/img/Search/creator-01.png'
import Creator02 from '../assets/img/Search/creator-02.png'
import Creator03 from '../assets/img/Search/creator-03.png'
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

const recommendedCourses = ref([
  {
    img: FilteredCourse01,
    time: '3 Months',
    title: 'AWS Certified solutions Architect',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    userAvt: UserAvt,
    userName: 'Lina',
    oldPrice: '$100',
    newPrice: '$80',
  },
  {
    img: FilteredCourse02,
    time: '3 Months',
    title: 'AWS Certified solutions Architect',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    userAvt: UserAvt,
    userName: 'Lina',
    oldPrice: '$100',
    newPrice: '$80',
  },
  {
    img: FilteredCourse03,
    time: '3 Months',
    title: 'AWS Certified solutions Architect',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    userAvt: UserAvt,
    userName: 'Lina',
    oldPrice: '$100',
    newPrice: '$80',
  },
  {
    img: FilteredCourse04,
    time: '3 Months',
    title: 'AWS Certified solutions Architect',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    userAvt: UserAvt,
    userName: 'Lina',
    oldPrice: '$100',
    newPrice: '$80',
  },
])

const creators = ref([
  {
    img: Creator01,
    title: 'Jane Cooper',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
  },
  {
    img: Creator02,
    title: 'Adam',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
  },
  {
    img: Creator03,
    title: 'Tomara',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
  },
  {
    img: Creator01,
    title: 'Jane Cooper',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
  },
  {
    img: Creator02,
    title: 'Adam',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
  },
  {
    img: Creator03,
    title: 'Tomara',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
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
          v-for="(item, index) in recommendedCourses"
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
        v-for="(item, index) in creators"
        :key="index"
        :creator="item"
        class="mt-[150px]"
      />
    </div>
  </div>
</template>
