<script setup>
import { computed } from 'vue'

const props = defineProps({
  card: {
    type: Object,
    default: () => {},
  },
  benefits: {
    type: Array,
    default: () => [],
  },
  buttonType: {
    type: String,
    default: 'default',
  },
  highlight: {
    type: Boolean,
    default: false,
  },
})

const buttonClass = computed(() => {
  switch (props.buttonType) {
    case 'primary':
      return 'bg-[#49BBBD] text-white'
    case 'secondary':
      return 'bg-white text-red-500 border'
    default:
      return 'bg-white text-primary border'
  }
})
</script>

<template>
  <div
    :class="[
      'card flex flex-col p-4 lg:p-8 transition',
      highlight
        ? 'shadow-[0px_16px_24px_rgba(38,50,56,0.08),0px_8px_8px_rgba(38,50,56,0.12)] scale-105'
        : '',
    ]"
  >
    <!-- Header -->
    <div class="text-primary font-bold text-[9px] lg:text-[18px] flex justify-between">
      <span>{{ card.title }}</span>

      <div
        v-if="card.badge"
        class="text-[6px] lg:text-[12px] border p-2 rounded-[99px] border-[rgba(108,92,231,1)]"
      >
        {{ card.badge }}
      </div>
    </div>
    <!-- Price -->
    <div class="font-bold text-[24px] lg:text-[48px]">
      {{ card.price }}
      <span class="font-extrabold text-[6px] lg:text-[12px]">{{ card.time }}</span>
    </div>
    <!-- Benefits -->
    <div class="flex flex-col gap-2 lg:gap-4 mt-3 lg:mt-6 flex-1">
      <div v-for="item in benefits" :key="item.text" class="flex items-center gap-2 lg:gap-4">
        <img :src="item.icon" class="w-4 lg:w-6" />
        <span class="text-[9px] lg:text-[18px]">
          {{ item.text }}
        </span>
      </div>
    </div>
    <!-- Button -->
    <button
      :class="[
        buttonClass,
        'mt-2 lg:mt-4 py-2 px-4 rounded-[16px] font-bold hover:scale-105 transition duration-300',
      ]"
    >
      {{ card.buttonText }}
    </button>
  </div>
</template>
