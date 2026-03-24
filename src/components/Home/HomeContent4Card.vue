<template>
  <div
    class="card p-5 shadow-[0px_18.83px_47.08px_0px_rgba(47,50,125,0.1)] flex flex-col rounded-[20px] flex-1 hover:scale-105 transition duration-700 ease-in-out cursor-pointer"
  >
    <div class="card-header">
      <div class="image aspect-[4/3] overflow-hidden rounded-xl"><slot name="image"></slot></div>
      <div class="card-header-content pt-5 flex justify-between">
        <div class="design flex items-center gap-[10px]"><slot name="design"></slot></div>
        <div class="time flex items-center gap-[10px]"><slot name="time"></slot></div>
      </div>
    </div>
    <div class="card-title">
      <div class="title pt-5"><slot name="title"></slot></div>
    </div>
    <div class="card-content pt-[20px] flex-1">
      <slot name="content"></slot>
    </div>
    <div class="card-footer flex justify-between items-center pt-[17px]">
      <div class="card-footer-user flex items-center gap-[10px]">
        <slot name="user-image"></slot>
        <slot name="user-name"></slot>
      </div>
      <div class="card-footer-price flex gap-[10px] items-center">
        <div class="old-price"><slot name="old-price"></slot></div>
        <div class="new-price"><slot name="new-price"></slot></div>
      </div>
    </div>
  </div>
</template>
