<script setup>
import { ref } from 'vue'
import HeaderComponent from '@/components/Layout/HeaderComponent.vue'
import bgImg from '../assets/img/Course/CourseDetail-Img1.png'
import CourseOverview from '@/components/CourseDetail/CourseOverview.vue'
import CourseSideBar from '@/components/CourseDetail/CourseSideBar.vue'
import CourseContent3Card from '@/components/Course/CourseContent3Card.vue'
import CourseContent3Img1 from '../assets/img/Home/Homeview-content-4-img-1.png'
import CourseContent3Img2 from '../assets/img/Home/Homeview-content-4-img-2.png'
import UserAvt from '../assets/img/Avatar/user-avatar.png'
import ClassroomPreview from '@/components/CourseDetail/ClassroomPreview.vue'
import TopEducationCard from '@/components/CourseDetail/TopEducationCard.vue'
import FooterComponent from '@/components/Layout/FooterComponent.vue'

const coursesRecommended = ref([
  {
    img: CourseContent3Img1,
    time: '3 Months',
    title: 'AWS Certified solutions Architect',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    userAvt: UserAvt,
    userName: 'Lina',
    oldPrice: '$100',
    newPrice: '$80',
  },
  {
    img: CourseContent3Img2,
    time: '3 Months',
    title: 'AWS Certified solutions Architect',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    userAvt: UserAvt,
    userName: 'Lina',
    oldPrice: '$100',
    newPrice: '$80',
  },
  {
    img: CourseContent3Img1,
    time: '3 Months',
    title: 'AWS Certified solutions Architect',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    userAvt: UserAvt,
    userName: 'Lina',
    oldPrice: '$100',
    newPrice: '$80',
  },
  {
    img: CourseContent3Img2,
    time: '3 Months',
    title: 'AWS Certified solutions Architect',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    userAvt: UserAvt,
    userName: 'Lina',
    oldPrice: '$100',
    newPrice: '$80',
  },
])

const instructors = ref([
  {
    text: '50%',
    title: 'FOR INSTRUCTORS',
    desc: 'TOTC’s school management software helps traditional and online schools manage scheduling,',
  },
  {
    text: '50%',
    title: 'FOR INSTRUCTORS',
    desc: 'TOTC’s school management software helps traditional and online schools manage scheduling, TOTC’s school management software helps traditional and online schools manage scheduling,',
  },
])
</script>

<template>
  <!-- Header -->
  <HeaderComponent></HeaderComponent>
  <!-- Course Detail -->
  <div class="relative">
    <img class="mt-[2rem] relative" :src="bgImg" alt="" />
    <div class="container flex flex-col xl:flex-row gap-[100px]">
      <!-- Course overview -->
      <div><CourseOverview /></div>
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
        <button class="text-[rgba(73,187,189,1)] font-bold text-[15px] lg:text-[20px]">
          See all
        </button>
      </div>
      <div
        class="content-3-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] pt-[50px]"
      >
        <CourseContent3Card :courses="coursesRecommended"></CourseContent3Card>
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
      <button class="text-[rgba(73,187,189,1)] font-bold text-[20px]">See all</button>
    </div>
    <div class="flex flex-col lg:flex-row gap-[30px] pb-[200px]">
      <div class="flex-1" v-for="(instructor, index) in instructors" :key="index">
        <TopEducationCard :instructor="instructor" />
      </div>
    </div>
  </div>
  <!-- Footer -->
  <FooterComponent />
</template>
