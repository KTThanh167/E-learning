<script setup>
const props = defineProps({
  courses: Array,
})
</script>

<template>
  <div v-for="(item, index) in props.courses" :key="index">
    <div
      class="card shadow-[0px_18.83px_47.08px_0px_rgba(47,50,125,0.1)] rounded-[20px] flex flex-col items-center text-center pt-[30px] pb-[60px] h-full hover:scale-105 transition duration-700 ease-in-out cursor-pointer"
    >
      <div
        class="card-img w-[90px] h-[90px] flex items-center justify-center rounded-[4px]"
        :class="item.color"
      >
        <img :src="item.img" alt="" />
      </div>
      <div class="card-title pt-[20px] font-semibold text-[20px] lg:text-[30px]">
        <p>{{ item.title }}</p>
      </div>
      <div
        class="card-desc pt-[25px] flex-1 text-[rgba(105,105,132,1)] font-normal text-[12px] lg:text-[18px] px-[16px] lg:px-[32px]"
      >
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>
