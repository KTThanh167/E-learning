<script setup>
const props = defineProps({
  platform: {
    type: Object,
    required: true,
    default: () => {},
  },
  infors: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>

<template>
  <div
    class="bg-[rgba(157,204,255,0.2)] rounded-[20px] flex flex-col lg:flex-row items-center justify-center mt-[65px] min-h-[540px] gap-[150px]"
  >
    <!-- Information platform -->
    <div class="pl-[80px]">
      <div class="pb-[25px]">
        <p class="font-semibold text-[30px]">{{ props.platform.title }}</p>
      </div>
      <div class="flex flex-col gap-[10px]">
        <div v-for="(item, index) in infors" :key="index" class="flex gap-[10px]">
          <img
            src="../../assets/img/Icon/green-circle.png"
            alt=""
            class="max-w-[20px] max-h-[20px]"
          />
          <p class="font-normal text-[18px]">{{ item.desc }}</p>
        </div>
      </div>
      <button
        class="bg-primary py-[16px] px-[40px] mt-[25px] text-white font-bold text-[24px] rounded-[12px]"
      >
        Start learning now
      </button>
    </div>
    <!-- Image platform -->
    <img
      src="../../assets/img/Search/learning-platform.png"
      alt=""
      class="lg:max-w-[600px] max-w-[300px] object-contain overflow-hidden"
    />
  </div>
</template>
