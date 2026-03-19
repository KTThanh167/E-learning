<script setup>
const props = defineProps({
  coaching: Object,
  index: Number,
})
const emit = defineEmits(['showDesc'])

const callFunctionShowDesc = () => {
  emit('showDesc', props.index)
}
</script>

<template>
  <div
    class="flex items-center justify-between w-full pb-[8px] lg:pb-[15px] pt-[8px] lg:pt-[15px]"
    @click="callFunctionShowDesc"
  >
    <div class="flex gap-[9px] lg:gap-[18px] font-normal">
      <img class="w-[20px] h-[20px]" :src="coaching.icon" alt="" />
      <span>{{ coaching.text }}</span>
    </div>
    <img :src="coaching.status" alt="" />
  </div>

  <div class="text-left ml-[38px] font-normal text-[rgba(105,105,132,1)] text-[7px] lg:text-[14px]">
    <slot name="desc"></slot>
  </div>

  <div class="w-full border-[1px]"></div>
</template>
