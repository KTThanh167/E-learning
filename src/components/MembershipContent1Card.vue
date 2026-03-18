<script setup>
const props = defineProps({
  benefits: Array,
  buttonType: String,
  highlight: {
    type: Boolean,
    default: false,
    required: false,
  },
})
</script>

<template>
  <div
    :class="[
      'card flex flex-col p-4 lg:p-8',
      highlight
        ? 'shadow-[0px_16px_24px_rgba(38,50,56,0.08),0px_8px_8px_rgba(38,50,56,0.12)] scale-105'
        : '',
    ]"
  >
    <div class="text-[rgba(73,187,189,1)] font-bold text-[9px] lg:text-[18px] flex justify-between">
      <slot name="title"></slot>
      <div
        v-if="$slots.badge"
        class="text-[rgba(45,52,54,1)] text-[6px] lg:text-[12px] border-[1px] p-2 rounded-[99px] border-[rgba(108,92,231,1)]"
      >
        <slot name="badge"></slot>
      </div>
    </div>
    <div class="font-bold text-[24px] lg:text-[48px]">
      <slot name="price"></slot>
      <span class="font-extrabold text-[6px] lg:text-[12px]"><slot name="time"></slot></span>
    </div>
    <div class="flex flex-col gap-2 lg:gap-4 mt-3 lg:mt-6 flex-1">
      <div v-for="item in props.benefits" :key="item.text" class="flex items-center gap-2 lg:gap-4">
        <img :src="item.icon" />
        <span class="text-[rgba(45,52,54,1)] text-[9px] lg:text-[18px] font-normal">{{
          item.text
        }}</span>
      </div>
    </div>
    <button
      :class="[
        'border-[1px] mt-2 lg:mt-4 py-2 px-4 rounded-[16px] font-bold hover:scale-105 transition duration-700 ease-in-out',
        buttonType === 'primary' ? 'bg-[#49BBBD]' : 'bg-white',
        buttonType === 'primary' ? 'text-white' : 'text-[rgba(73,187,189,1)]',
        buttonType === 'primary' ? 'text-[12px] lg:text-[24px]' : 'text-[9px] lg:text-[18px]',
      ]"
    >
      <slot name="button"></slot>
    </button>
  </div>
</template>
