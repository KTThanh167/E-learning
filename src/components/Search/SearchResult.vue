<script setup>
import { ref } from 'vue'
import RecommendedCourseCard from '../Course/RecommendedCourseCard.vue'
import FilteredCourse01 from '../../assets/img/Search/filtered-course-01.png'
import FilteredCourse02 from '../../assets/img/Search/filtered-course-02.png'
import FilteredCourse03 from '../../assets/img/Search/filtered-course-03.png'
import FilteredCourse04 from '../../assets/img/Search/filtered-course-04.png'
import FilteredCourse05 from '../../assets/img/Search/filtered-course-05.png'
import FilteredCourse06 from '../../assets/img/Search/filtered-course-06.png'
import FilteredCourse07 from '../../assets/img/Search/filtered-course-07.png'
import FilteredCourse08 from '../../assets/img/Search/filtered-course-08.png'
import UserAvt from '../../assets/img/Avatar/user-avatar.png'
const filteredCourses = ref([
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
  {
    img: FilteredCourse05,
    time: '3 Months',
    title: 'AWS Certified solutions Architect',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    userAvt: UserAvt,
    userName: 'Lina',
    oldPrice: '$100',
    newPrice: '$80',
  },
  {
    img: FilteredCourse06,
    time: '3 Months',
    title: 'AWS Certified solutions Architect',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    userAvt: UserAvt,
    userName: 'Lina',
    oldPrice: '$100',
    newPrice: '$80',
  },
  {
    img: FilteredCourse07,
    time: '3 Months',
    title: 'AWS Certified solutions Architect',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    userAvt: UserAvt,
    userName: 'Lina',
    oldPrice: '$100',
    newPrice: '$80',
  },
  {
    img: FilteredCourse08,
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
  <!-- Card result -->
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[30px] xl:gap-[60px] mt-[70px]">
    <RecommendedCourseCard v-for="(item, index) in filteredCourses" :key="index" :course="item" />
  </div>
</template>
