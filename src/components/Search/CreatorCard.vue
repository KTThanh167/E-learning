<script setup>
const props = defineProps({
  creator: {
    type: Object,
    required: false,
    default: () => ({}),
  },
})
</script>

<template>
  <div
    class="shadow-[2px_2px_10px_2px_rgba(0,0,0,0.25)] relative pt-[140px] px-[30px] text-center pb-[30px] flex flex-col items-center"
  >
    <img
      :src="props.creator.img"
      alt=""
      class="absolute top-[-35%] aspect-[1] max-w-[250px] overflow-hidden"
    />
    <p class="font-medium text-[24px] min-h-[70px] line-clamp-2">{{ props.creator.title }}</p>
    <p class="text-[rgba(105,105,132,1)] font-normal text-[18px] flex-1 line-clamp-4">
      {{ props.creator.desc }}
    </p>
  </div>
</template>
