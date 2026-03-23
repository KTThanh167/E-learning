<template>
  <div class="flex flex-col gap-[12px] w-full">
    <div v-for="item in ratings" :key="item.stars" class="flex items-center gap-[45px]">
      <span class="text-[20px] font-normal text-[rgba(0,0,0,0.5)]"> {{ item.stars }} Stars </span>

      <div class="flex-1 h-2 bg-[rgba(217,217,217,1)] rounded-[2px]">
        <div
          class="h-full bg-[rgba(73,187,189,1)] rounded-[2px]"
          :style="{ width: item.percentage + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const ratings = [
  { stars: 5, percentage: 90 },
  { stars: 4, percentage: 30 },
  { stars: 3, percentage: 20 },
  { stars: 2, percentage: 20 },
  { stars: 1, percentage: 5 },
]
</script>
