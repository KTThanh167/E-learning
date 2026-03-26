<script setup>
import { ref } from 'vue'
import TheHeader from '@/components/Layout/TheHeader.vue'
import bgImg from '../assets/img/Course/banner.png'
import CourseOverview from '@/components/CourseDetail/CourseOverview.vue'
import CourseSideBar from '@/components/CourseDetail/CourseSidebar.vue'
import RecommendedCourseCard from '@/components/Course/RecommendedCourseCard.vue'

import ClassroomPreview from '@/components/CourseDetail/ClassroomPreview.vue'
import TopEducationCard from '@/components/CourseDetail/TopEducationCard.vue'
import TheFooter from '@/components/Layout/TheFooter.vue'
//Import data
import { coursesRecommended } from '@/data/CourseDetail/RecommendedCourse'
import { instructors } from '@/data/CourseDetail/TopEducation'
import { buttons, courseRatings, users } from '@/data/CourseDetail/CourseOverview'
const coursesRecommendedList = ref(coursesRecommended)
const instructorList = ref(instructors)
const buttonList = ref(buttons)
const courseRatingsList = ref(courseRatings)
const usersList = ref(users)
</script>

<template>
  <div class="container">
    <!-- Header -->
    <TheHeader></TheHeader>
    <!-- Course Detail -->
  </div>
  <div class="relative">
    <img class="mt-[2rem] relative" :src="bgImg" alt="" />
    <div class="container flex flex-col xl:flex-row gap-[100px]">
      <!-- Course overview -->
      <div>
        <CourseOverview
          :buttons="buttonList"
          :course-ratings="courseRatingsList"
          :users="usersList"
        />
      </div>
      <!-- Course sidebar -->
      <div
        class="bg-white m-auto xl:p-[30px] rounded-[20px] xl:absolute xl:right-10 xl:translate-y-[-25%] max-w-[450px]"
      >
        <CourseSideBar />
      </div>
    </div>
  </div>
  <!-- Marketing Article  -->
  <div class="content-3 bg-[rgba(157,204,255,0.2)] mt-[100px] pb-[100px]">
    <div class="container flex flex-col">
      <div class="content-3-header pt-[50px] lg:pt-[100px] flex justify-between">
        <p class="font-medium text-[20px] lg:text-[30px]">Marketing Articles</p>
        <button class="text-primary font-bold text-[15px] lg:text-[20px]">See all</button>
      </div>
      <div
        class="content-3-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] pt-[50px]"
      >
        <RecommendedCourseCard
          v-for="(item, index) in coursesRecommendedList"
          :key="index"
          :course="item"
        />
      </div>
    </div>
  </div>
  <!-- Classroom Preview -->
  <div class="container">
    <div class="pt-[100px] pb-[150px]"><ClassroomPreview /></div>
  </div>
  <!-- Top education -->
  <div class="container">
    <div class="flex justify-between">
      <p class="font-medium text-[30px]">Top Education offers and deals are listed here</p>
      <button class="text-primary font-bold text-[20px]">See all</button>
    </div>
    <div class="flex flex-col lg:flex-row gap-[30px] pb-[200px] pt-[64px]">
      <div class="flex-1" v-for="(instructor, index) in instructorList" :key="index">
        <TopEducationCard :instructor="instructor" />
      </div>
    </div>
  </div>
  <!-- Footer -->
  <TheFooter />
</template>
