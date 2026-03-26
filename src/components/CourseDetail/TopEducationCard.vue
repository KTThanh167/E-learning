<script setup>
const props = defineProps({
  instructor: {
    type: Object,
  },
  badgeClass: {
    type: String,
    default: 'bg-[rgba(255,0,0,0.6)]',
  },
  overlayColor: {
    type: String,
    default: 'rgba(23,27,65,0.5)',
  },
})
</script>

<template>
  <div
    class="relative bg-cover bg-center flex flex-col gap-[30px] p-[50px] rounded-[20px] h-full max-w-[500px]"
    :style="{
      backgroundImage: `url(${props.instructor.bgImg})`,
    }"
  >
    <div
      class="absolute inset-0 rounded-[20px]"
      :style="{
        backgroundColor: props.overlayColor,
      }"
    ></div>
    <!-- discount -->
    <div
      class="max-w-[124px] max-h-[124px] px-[8px] py-[25px] text-white rounded-[12px] text-center relative z-10"
      :class="props.badgeClass"
    >
      <p class="font-bold text-[50px]">{{ props.instructor.text }}</p>
    </div>
    <!-- title -->
    <div class="relative z-10 line-clamp-2 min-h-[100px]">
      <p class="font-semibold text-[32px] text-white">{{ props.instructor.title }}</p>
    </div>
    <!-- desc -->
    <div class="relative z-10 flex-1">
      <p class="font-normal text-white text-[24px]">{{ props.instructor.desc }}</p>
    </div>
  </div>
</template>
