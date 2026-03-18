<script setup>
import CourseContent1Card from '@/components/CourseContent1Card.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import CourseContent1Img from '../img/CourseContent1Img.png'
import CourseContent1UserImg from '../img/CourseContent1UserImg.png'
import CourseContent2Card from '@/components/CourseContent2Card.vue'
import CourseContent2Img1 from '../img/CourseContent2Img1.png'
import CourseContent2Img2 from '../img/CourseContent2Img2.png'
import CourseContent2Img3 from '../img/CourseContent2Img3.png'
import CourseContent2Img4 from '../img/CourseContent2Img4.png'
import CourseContent2Img5 from '../img/CourseContent2Img5.png'
import CourseContent2Img6 from '../img/CourseContent2Img6.png'
import CourseContent2Img7 from '../img/CourseContent2Img7.png'
import CourseContent2Img8 from '../img/CourseContent2Img8.png'
import CourseContent3Img1 from '../img/Homeview-content-4-img-1.png'
import CourseContent3Img2 from '../img/Homeview-content-4-img-2.png'
import UserAvt from '../img/user-avatar.png'

import { ref } from 'vue'
import CourseContent3Card from '@/components/CourseContent3Card.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const courseList = ref([
  {
    img: CourseContent1Img,
    title: 'AWS Certified Solutions Architect',
    userImg: CourseContent1UserImg,
    userName: 'Lina',
    percent: 70,
    studiedLesson: 5,
    totalLesson: 7,
  },
  {
    img: CourseContent1Img,
    title: 'AWS Certified Solutions Architect',
    userImg: CourseContent1UserImg,
    userName: 'Lina',
    percent: 100,
    studiedLesson: 7,
    totalLesson: 7,
  },
  {
    img: CourseContent1Img,
    title: 'AWS Certified Solutions Architect',
    userImg: CourseContent1UserImg,
    userName: 'Lina',
    percent: 45,
    studiedLesson: 3,
    totalLesson: 7,
  },
])

const courseCategory = ref([
  {
    img: CourseContent2Img1,
    title: 'Design',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    color: 'bg-[rgba(73,187,189,0.3)]',
  },
  {
    img: CourseContent2Img2,
    title: 'Development',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    color: 'bg-[rgba(91,114,238,0.3)]',
  },
  {
    img: CourseContent2Img3,
    title: 'Development',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    color: 'bg-[rgba(157,204,255,0.3)]',
  },
  {
    img: CourseContent2Img4,
    title: 'Business',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    color: 'bg-[rgba(0,203,184,0.3)]',
  },
  {
    img: CourseContent2Img5,
    title: 'Marketing',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    color: 'bg-[rgba(244,140,6,0.3)]',
  },
  {
    img: CourseContent2Img6,
    title: 'Photography',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    color: 'bg-[rgba(238,100,91,0.3)]',
  },
  {
    img: CourseContent2Img7,
    title: 'Acting',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    color: 'bg-[rgba(37,38,65,0.3)]',
  },
  {
    img: CourseContent2Img8,
    title: 'Business',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
    color: 'bg-[rgba(0,203,184,0.3)]',
  },
])

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
</script>

<template>
  <div class="hero-section w-100%">
    <!-- Header -->
    <div class="container">
      <HeaderComponent></HeaderComponent>
    </div>
    <!-- Content 1 -->
    <div class="content-1 bg-[rgba(157,204,255,0.2)] pt-[25px] pb-[28px] lg:pt-[50px] lg:pb-[57px]">
      <div class="container flex flex-col">
        <div class="content-1-header flex justify-between">
          <p class="font-semibold text-[rgba(37,38,65,1)] text-[18px] lg:text-[36px]">
            Welcome back, ready for your next lesson?
          </p>
          <button class="text-[rgba(73,187,189,1)] font-bold text-[10px] lg:text-[20px]">
            View history
          </button>
        </div>
        <div
          class="content-1-body pt-[25px] lg:pt-[50px] grid gap-[15px] lg:grid-cols-3 lg:gap-[50px]"
        >
          <CourseContent1Card :courses="courseList" />
        </div>
        <div class="content-1-footer self-end pt-[25px] lg:pt-[50px] flex gap-[10px] lg:gap-[20px]">
          <button>
            <img
              class="bg-[rgba(73,187,189,0.5)] py-[11px] px-[20px]"
              src="../img/angle-left.png"
              alt=""
            />
          </button>
          <button>
            <img
              class="bg-[rgba(73,187,189,1)] py-[11px] px-[20px]"
              src="../img/angle-right.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
    <!-- Content 2 -->
    <div class="container">
      <div class="content-2-header pt-[40px] lg:pt-[80px]">
        <p class="text-[rgba(37,38,65,1)] font-semibold text-[20px] lg:text-[36px]">
          Choice favourite course from top category
        </p>
      </div>
      <div
        class="content-2-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[80px] mb-[50px] lg:mb-[100px]"
      >
        <CourseContent2Card :courses="courseCategory"></CourseContent2Card>
      </div>
    </div>
    <!-- Content 3 -->
    <div class="content-3 bg-[rgba(157,204,255,0.2)]">
      <div class="container flex flex-col">
        <div class="content-3-header pt-[50px] lg:pt-[100px] flex justify-between">
          <p class="font-medium text-[20px] lg:text-[30px]">Recommended for you</p>
          <button class="text-[rgba(73,187,189,1)] font-bold text-[15px] lg:text-[20px]">
            See all
          </button>
        </div>
        <div
          class="content-3-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] pt-[50px]"
        >
          <CourseContent3Card :courses="coursesRecommended"></CourseContent3Card>
        </div>
        <div
          class="content-3-footer pb-[113px] self-end pt-[25px] lg:pt-[50px] flex gap-[10px] lg:gap-[20px]"
        >
          <button class="bg-[rgba(73,187,189,0.5)] py-[11px] px-[20px]">
            <img src="../img/angle-left.png" alt="" />
          </button>
          <button class="bg-[rgba(73,187,189,0.5)] py-[11px] px-[20px]">
            <img src="../img/angle-right.png" alt="" />
          </button>
        </div>
      </div>
    </div>
    <!-- Content 4 -->
    <div class="container">
      <div class="content-4 flex flex-col">
        <div class="content-4-header pt-[50px] lg:pt-[100px] flex justify-between">
          <p class="font-medium text-[20px] lg:text-[30px]">Get choice of your course</p>
          <button class="text-[rgba(73,187,189,1)] font-bold text-[15px] lg:text-[20px]">
            See all
          </button>
        </div>
        <div
          class="content-4-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] pt-[50px] pb-[90px]"
        >
          <CourseContent3Card :courses="coursesRecommended"></CourseContent3Card>
        </div>
      </div>
    </div>
    <!-- Content 5 -->
    <div class="container">
      <div class="content-5 bg-[rgba(37,38,65,1)] rounded-[37px] py-[70px]">
        <div class="content-5-header text-center">
          <p class="font-semibold text-[36px] text-[rgba(255,255,255,1)]">
            Online coaching lessons for remote learning.
          </p>
        </div>
        <div class="content-5-body px-[20px] lg:px-[80px] text-center pt-[30px]">
          <p class="font-normal text-[24px] text-[rgba(255,255,255,1)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem
            ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
        <div class="content-5-footer text-center pt-[70px]">
          <button class="bg-[rgba(73,187,189,1)] px-[40px] py-[20px] text-white rounded-[12px]">
            Start learning now
          </button>
        </div>
      </div>
    </div>
    <!-- Content 6 -->
    <div class="container">
      <div class="content-6 flex flex-col">
        <div class="content-6-header pt-[50px] lg:pt-[100px] flex justify-between">
          <p class="font-medium text-[20px] lg:text-[30px]">The course in personal development</p>
          <button class="text-[rgba(73,187,189,1)] font-bold text-[15px] lg:text-[20px]">
            See all
          </button>
        </div>
        <div
          class="content-6-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] pt-[50px] pb-[90px]"
        >
          <CourseContent3Card :courses="coursesRecommended"></CourseContent3Card>
        </div>
      </div>
    </div>
    <!-- Content 7 -->
    <div class="content-7 bg-[rgba(157,204,255,0.2)]">
      <div class="container flex flex-col">
        <div class="content-7-header pt-[50px] lg:pt-[100px] flex justify-between">
          <p class="font-medium text-[20px] lg:text-[30px]">Student are viewing</p>
          <button class="text-[rgba(73,187,189,1)] font-bold text-[15px] lg:text-[20px]">
            See all
          </button>
        </div>
        <div
          class="content-7-body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] pt-[50px] pb-[90px]"
        >
          <CourseContent3Card :courses="coursesRecommended"></CourseContent3Card>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <FooterComponent></FooterComponent>
  </div>
</template>
