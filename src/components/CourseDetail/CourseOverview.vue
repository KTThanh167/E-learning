<script setup>
import { ref } from 'vue'
import RatingProgress from './RatingProgress.vue'
import userAvt from '../../assets/img/Avatar/heading-avt.png'
import starImg from '../../assets/img/Icon/starImg.png'

const activeIndex = ref(0)
const buttons = ['Overview', 'Overview', 'Overview', 'Overview']

const users = ref([
  {
    avt: userAvt,
    name: 'Lina',
    star: starImg,
    time: '3 Months',
    cmt: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively',
  },
  {
    avt: userAvt,
    name: 'Lina',
    star: starImg,
    time: '3 Months',
    cmt: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively',
  },
])
</script>

<template>
  <div class="mt-[40px] flex flex-col w-full max-w-[650px] mx-auto">
    <div class="flex flex-row gap-4 lg:gap-[30px] w-full">
      <button
        v-for="(item, index) in buttons"
        :key="index"
        @click="activeIndex = index"
        :class="[
          activeIndex === index
            ? 'bg-[rgba(73,187,189,1)] text-white'
            : 'bg-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,0.4)]',
        ]"
        class="flex-1 rounded-[12px] py-[16px] font-bold text-center transition-all"
      >
        {{ item }}
      </button>
    </div>

    <div class="bg-[rgba(157,204,255,0.3)] p-[30px] md:p-[50px] rounded-[20px] mt-[50px] w-full">
      <div class="flex flex-col md:flex-row gap-12 items-start">
        <div
          class="flex flex-col items-center text-center gap-[28px] bg-white py-[25px] px-[40px] rounded-[20px] shadow-sm"
        >
          <h2 class="text-[30px] font-semibold text-[rgba(0,0,0,0.5)]">4 out of 5</h2>
          <img :src="starImg" alt="rating" />
          <p class="text-gray-500 font-normal">Top Rating</p>
        </div>

        <RatingProgress class="flex-1 w-full" />
      </div>

      <div class="mt-[24px]" v-for="(user, index) in users" :key="index">
        <div class="flex justify-between items-center">
          <div class="flex gap-[15px] items-center">
            <img :src="user.avt" alt="avatar" class="w-12 h-12 rounded-full" />
            <div>
              <p class="font-medium text-[18px]">{{ user.name }}</p>
              <img :src="user.star" alt="stars" />
            </div>
          </div>
          <p class="text-[rgba(105,105,132,1)] font-medium text-[14px]">{{ user.time }}</p>
        </div>
        <div class="mt-[20px]">
          <p class="text-[rgba(105,105,132,1)] font-normal text-[18px] leading-relaxed">
            {{ user.cmt }}
          </p>
        </div>
        <div class="h-[1px] bg-[rgba(105,105,132,0.2)] mt-[25px]"></div>
      </div>
    </div>
  </div>
</template>
