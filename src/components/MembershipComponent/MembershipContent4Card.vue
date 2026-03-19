<template>
  <div class="card flex flex-col bg-white rounded-[20px] items-center">
    <!-- card header -->
    <div class="mt-[35px] flex flex-col items-center">
      <div class="w-[70px] lg:w-[118px] aspect-[1] overflow-hidden rounded-[20px]">
        <slot name="img"></slot>
      </div>
      <div class="pt-[20px] font-semibold text-[12px] lg:text-[24px]">
        <slot name="name"></slot>
      </div>
    </div>
    <!-- card body -->
    <div
      class="text-center mb-[60px] mt-[20px] text-[rgba(105,105,132,1)] font-normal text-[9px] lg:text-[18px] px-[13px] lg:px-[27px] flex-1"
    >
      <slot name="desc"></slot>
    </div>
  </div>
</template>
