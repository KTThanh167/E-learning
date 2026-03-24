<script setup>
const props = defineProps({
  instructor: {
    type: Object,
  },
})
import bgImg from '../../assets/img/Home/Homeview-content-3-img-1.png'
</script>

<template>
  <div
    class="relative mt-[64px] bg-cover bg-center flex flex-col gap-[30px] p-[50px] rounded-[20px] h-full"
    :style="{
      backgroundImage: `url(${bgImg})`,
    }"
  >
    <div class="absolute inset-0 bg-[rgba(23,27,65,0.5)] opacity-60 rounded-[20px]"></div>
    <!-- discount -->
    <div
      class="max-w-[100px] max-h-[100px] bg-[rgba(255,0,0,0.6)] px-[20px] py-[35px] text-white rounded-[12px] text-center relative z-10"
    >
      <p>{{ props.instructor.text }}</p>
    </div>
    <!-- title -->
    <div class="relative z-10 line-clamp-1">
      <p class="font-semibold text-[32px] text-white">{{ props.instructor.title }}</p>
    </div>
    <!-- desc -->
    <div class="relative z-10 flex-1">
      <p class="font-normal text-white text-[24px]">{{ props.instructor.desc }}</p>
    </div>
  </div>
</template>
