<template>
  <div class="footer bg-[rgba(37,38,65,1)] pt-[70px] pb-[40px] flex flex-col items-center">
    <div class="footer-logo flex items-center">
      <img
        class="pr-[80px]"
        src="C:\Users\thanh\OneDrive\Máy tính\Đăng nhập, đăng kí vue\baitap1\src\img\logo-heading.png"
        alt=""
      />
      <div class="border-[1px] text-[rgba(98,99,129,1)] h-12"></div>
      <p class="text-[rgba(255,255,255,1)] text-[11px] lg:text-[22px] pl-[40px]">
        Virtual Class <br />
        for Zoom
      </p>
    </div>
    <div class="footer-email pt-[95px] flex flex-col items-center gap-[20px]">
      <p class="text-[rgba(178,179,207,1)] font-medium text-[13px] lg:text-[26px]">
        Subscribe to get our Newsletters
      </p>
      <div class="input-email flex gap-[20px] flex-col lg:flex-row">
        <input
          class="rounded-[80px] py-[15px] pl-[30px] pr-[100px] bg-transparent border-[1px] text-white"
          type="text"
          placeholder="Your Email"
        />
        <button class="bg-[rgba(73,187,189,1)] px-[34px] py-[14px] rounded-[60px] text-white">
          Subscribe
        </button>
      </div>
    </div>
    <div class="footer-link mt-[95px] flex flex-col items-center">
      <div class="flex gap-[20px]">
        <p class="text-[rgba(178,179,207,1)] font-normal text-[11px] lg:text-[22px]">Carrers</p>
        <div class="w-[1px] bg-[rgba(98,99,129,1)]"></div>
        <p class="text-[rgba(178,179,207,1)] font-normal text-[11px] lg:text-[22px]">
          Privacy Policy
        </p>
        <div class="w-[1px] bg-[rgba(98,99,129,1)]"></div>
        <p class="text-[rgba(178,179,207,1)] font-normal text-[11px] lg:text-[22px]">
          Term & Conditions
        </p>
      </div>
      <p class="mt-[20px] text-[rgba(178,179,207,1)] font-normal text-[11px] lg:text-[22px]">
        © 2021 Class Technologies Inc.
      </p>
    </div>
  </div>
</template>
