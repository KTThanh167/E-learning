<template>
  <div class="relative hover:scale-105 transition duration-500 ease-in-out cursor-pointer">
    <div class="aspect-[4/3] overflow-hidden rounded-xl"><slot name="image"></slot></div>

    <div
      class="absolute bottom-[20px] left-1/2 -translate-x-1/2 bg-white/70 py-2 px-10 rounded-[12px] font-bold text-[12px] md:text-[18px] lg:text-[24px]"
    >
      <slot name="title"></slot>
    </div>
  </div>
</template>
