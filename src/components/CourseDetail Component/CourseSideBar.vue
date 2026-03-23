<script setup>
import { ref } from 'vue'
import includeIcon1 from '../../img/include-icon-1.png'
import includeIcon2 from '../../img/include-icon-2.png'
import includeIcon3 from '../../img/include-icon-3.png'
import includeIcon4 from '../../img/include-icon-4.png'
import twitter from '../../img/twitter.png'
import facebook from '../../img/facebook.png'
import youtube from '../../img/youtube.png'
import instagram from '../../img/instagram.png'
import telegram from '../../img/telegram.png'
import whatsapp from '../../img/whatsapp.png'

const price = ref({
  new: '$49.65',
  old: ' $99.99',
  discount: '50% Off',
})

const includes = ref([
  {
    img: includeIcon1,
    text: 'Money Back Guarantee',
  },
  {
    img: includeIcon2,
    text: 'Access on all devices',
  },
  {
    img: includeIcon3,
    text: 'Certification of completion',
  },
  {
    img: includeIcon4,
    text: '32 Moduls',
  },
])

const socials = ref([
  { img: twitter },
  { img: facebook },
  { img: youtube },
  { img: instagram },
  { img: telegram },
  { img: whatsapp },
])

const time = ref('11 hours left at this price')
</script>

<template>
  <div>
    <!-- Side bar 1 -->
    <div class="">
      <img
        class="w-[220px] sm:w-[300px] md:w-[380px] xl:w-[443px] aspect-[443/268] object-cover m-auto"
        src="../../img/CourseDetail-Img1.png"
        alt=""
      />
      <div class="flex flex-col gap-[20px]">
        <div class="flex justify-between items-center mt-[18px]">
          <p class="font-semibold text-[45px]">{{ price.new }}</p>
          <p class="text-[rgba(0,0,0,0.5)] font-semibold text-[28px] line-through">
            {{ price.old }}
          </p>
          <p class="text-[rgba(0,0,0,0.5)] font-semibold text-[28px]">{{ price.discount }}</p>
        </div>
        <p class="text-[rgba(73,187,189,1)] font-semibold text-[20px] text-center">{{ time }}</p>
        <button
          class="bg-[rgba(73,187,189,1)] py-[17px] text-white font-bold text-[20px] rounded-[12px]"
        >
          Buy now
        </button>
      </div>
    </div>
    <div class="h-[1px] bg-[rgba(105,105,132,1)] mt-8"></div>
    <!-- Side bar 2 -->
    <div>
      <p class="font-semibold text-[30px] mt-[30px]">This Course included</p>
      <div class="flex gap-3 mb-[10px]" v-for="(include, index) in includes" :key="index">
        <img class="w-[20px] h-[23px]" :src="include.img" alt="" />
        <p class="font-semibold text-[rgba(0,0,0,0.5)] text-[14px]">{{ include.text }}</p>
      </div>
    </div>
    <div class="h-[1px] bg-[rgba(105,105,132,1)] mt-8"></div>
    <!-- Side bar 3 -->
    <div class="mt-[30px] flex flex-col gap-[30px]">
      <p class="font-semibold text-[30px]">Training 5 or more people</p>
      <p class="text-[rgba(105,105,132,1)] line-clamp-2">
        Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates
        exclusively
      </p>
    </div>
    <div class="h-[1px] bg-[rgba(105,105,132,1)] mt-8"></div>
    <!-- Side bar 4 -->
    <div class="mt-[30px]">
      <p class="font-semibold text-[30px]">Share this course</p>
      <div class="flex gap-[25px] mt-[20px]">
        <div v-for="(social, index) in socials" :key="index">
          <img :src="social.img" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
