<template>
  <div
    class="card flex flex-col py-[60px] px-[30px] shadow-[0_18.83px_47.08px_rgba(47,50,125,0.1)] rounded-[20px]"
  >
    <div class="card-title aspect-[4/3] overflow-hidden rounded-[20px]">
      <slot name="img"></slot>
    </div>
    <div class="title font-medium text-[13px] lg:text-[26px] mt-[13px]">
      <slot name="title"></slot>
    </div>
    <div class="card-body mt-[13px] text-[rgba(105,105,132,1)] line-clamp-2">
      <slot name="desc"></slot>
    </div>
    <button
      class="mt-[50px] px-[40px] py-[15px] bg-[rgba(73,187,189,1)] w-max rounded-[12px] text-white self-end hover:scale-105 transition duration-500 ease-in-out"
    >
      <slot name="button"></slot>
    </button>
  </div>
</template>
