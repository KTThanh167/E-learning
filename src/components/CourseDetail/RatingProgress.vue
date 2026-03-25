<script setup>
const props = defineProps({
  ratings: {
    type: Array,
    required: true,
    default: () => [],
  },
})
</script>

<template>
  <div class="flex flex-col gap-[12px] w-full">
    <div v-for="item in props.ratings" :key="item.stars" class="flex items-center gap-[45px]">
      <span class="text-[20px] font-normal text-[rgba(0,0,0,0.5)]"> {{ item.stars }} Stars </span>

      <div class="flex-1 h-2 bg-[rgba(217,217,217,1)] rounded-[2px]">
        <div
          class="h-full bg-primary rounded-[2px]"
          :style="{ width: item.percentage + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>
