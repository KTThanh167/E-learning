<script setup>
const props = defineProps({
  student: {
    type: Object,
    required: false,
    default: () => ({}),
  },
})
</script>

<template>
  <div class="pt-[70px] pb-[80px]">
    <p class="text-[30px] font-medium pb-[70px]">What our students have to say</p>
    <div class="bg-white rounded-[40px] pt-[40px] px-[50px] flex flex-col lg:flex-row gap-[50px]">
      <img src="../../assets/img/Search/students-say-banner.png" class="max-w-[500px]" alt="" />
      <div>
        <div>
          <p class="font-bold text-[30px] text-[rgba(37,38,65,1)] pb-[30px]">
            {{ props.student.name }}
          </p>
          <p class="font-medium text-[24px] text-[rgba(37,38,65,1)] pb-[20px]">
            {{ props.student.email }}
          </p>
          <p class="font-normal text-[18px] text-[rgba(105,105,132,1)] pb-[30px]">
            {{ props.student.say }}
          </p>
          <div class="flex gap-[25px]">
            <img src="../../assets/img/Search/twitter-green.png" alt="" />
            <img
              src="../../assets/img/Search/facebook-green.png"
              class="p-[8px] bg-primary rounded-full"
              alt=""
            />
            <img
              src="../../assets/img/Search/instagram-green.png"
              class="p-[8px] bg-primary rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="self-end flex flex-col gap-[25px] pb-[50px]">
        <img
          class="aspect-[1] max-w-[79px] max-h-[79px] rounded-full"
          src="../../assets/img/Search/creator-01.png"
          alt=""
        />
        <img
          class="aspect-[1] max-w-[79px] max-h-[79px] rounded-full"
          src="../../assets/img/Search/creator-02.png"
          alt=""
        />
        <img
          class="aspect-[1] max-w-[79px] max-h-[79px] rounded-full"
          src="../../assets/img/Search/creator-03.png"
          alt=""
        />
        <img
          class="aspect-[1] max-w-[79px] max-h-[79px] rounded-full"
          src="../../assets/img/Search/student-04.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
