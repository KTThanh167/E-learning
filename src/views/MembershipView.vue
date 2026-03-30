<script setup>
import { ref } from 'vue'
import PricingSection from '../components/Membership/PricingSection.vue'
import RemoteLearningDesc from '../components/Membership/RemoteLearningDesc.vue'
import MembershipContent3Icon from '../assets/img/Icon/green-circle.png'
import openIcon from '../assets/img/Icon/open.png'
import closeIcon from '../assets/img/Icon/close.png'
import StudentsCommentCard from '../components/Membership/StudentsCommentCard.vue'
import FeatureCards from '../components/Membership/FeatureCard.vue'
import MembershipBanner from '@/components/Membership/MembershipBanner.vue'
//import data
import { coaching } from '@/data/Membership/Banner'
import { coachingList } from '@/data/Membership/OnlineCoaching'
import { students } from '@/data/Membership/StudentsSay'
import { teachers } from '@/data/Membership/Teacher'
import { pricingPlans } from '@/data/Membership/PricingSection'
const membershipBanner = ref(coaching)
const onlineCoachingList = ref(coachingList)
const studentsSayList = ref(students)
const teacherList = ref(teachers)
const pricingList = ref(pricingPlans)
//Handle show desc
const openIndex = ref(null)
const handleShowDesc = (index) => {
  if (openIndex.value === index) {
    openIndex.value = null
  } else {
    openIndex.value = index
  }
}
</script>

<template>
  <div class="hero-section w-100%">
    <!-- Affordable pricing -->
    <div class="container">
      <div class="flex flex-col items-center pt-[150px]">
        <div class="">
          <p class="font-extrabold text-primary text-[32px] lg:text-[64px]">Affordable pricing</p>
        </div>
        <div class="flex flex-col lg:flex-row mt-[77px] gap-[15px] lg:gap-[30px]">
          <PricingSection
            v-for="(plan, index) in pricingList"
            :key="index"
            :card="plan"
            :benefits="plan.benefits"
            :buttonType="plan.buttonType"
            :highlight="plan.highlight"
          />
        </div>
      </div>
    </div>
    <!-- Membership banner -->
    <div class="container">
      <MembershipBanner :coaching="membershipBanner"></MembershipBanner>
    </div>
    <!-- Online coaching -->
    <div class="container">
      <div class="mt-[77px] flex flex-col items-center pb-[40px] lg:mb-[80px]">
        <div class="">
          <p class="font-semibold text-[18px] lg:text-[36px]">
            Online coaching lessons for remote learning
          </p>
        </div>
        <div class="w-full mt-[40px] lg:mt-[80px]">
          <div v-for="(item, index) in onlineCoachingList" :key="index">
            <RemoteLearningDesc
              :index="index"
              @showDesc="handleShowDesc"
              :coaching="{
                icon: MembershipContent3Icon,
                text: item.text,
                status: openIndex === index ? closeIcon : openIcon,
              }"
            >
              <template #desc v-if="openIndex === index">
                {{ item.desc }}
              </template>
            </RemoteLearningDesc>
            <div class="w-full border-[1px]"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Students say -->
    <div class="pt-10 lg:pt-20 pb-[160px] lg:pb-[320px] bg-[rgba(157,204,255,0.2)] relative">
      <div class="container">
        <div class="">
          <!-- title -->
          <div class="font-semibold text-[18px] lg:text-[36px] text-[rgba(45,52,54,1)]">
            What our students have to say
          </div>
          <!-- body -->
          <div class="relative">
            <button
              class="bg-primary w-[50px] h-[50px] flex items-center justify-center rounded-[25px] absolute left-1/2 top-0 translate-y-1/2 lg:left-0 lg:top-1/2 lg:-translate-y-1/2 -translate-x-1/2 z-10"
            >
              <picture>
                <source media="(max-width: 767px)" srcset="../assets/img/Icon/angle-left.png" />
                <img src="../assets/img/Icon/angle-left.png" alt="" />
              </picture>
            </button>

            <button
              class="bg-primary w-[50px] h-[50px] flex items-center justify-center rounded-[25px] absolute right-1/2 bottom-0 translate-y-1/2 lg:right-0 lg:top-1/2 lg:-translate-y-1/2 translate-x-1/2 z-10"
            >
              <picture>
                <source media="(max-width: 767px)" srcset="../assets/img/Icon/angle-right.png" />
                <img src="../assets/img/Icon/angle-right.png" alt="" />
              </picture>
            </button>

            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px] lg:gap-[30px] pt-[50px]"
            >
              <StudentsCommentCard
                v-for="(student, index) in studentsSayList"
                :key="index"
                class="h-full"
              >
                <template #img>
                  <img class="w-full h-full object-cover" :src="student.img" alt="" />
                </template>
                <template #name>
                  {{ student.name }}
                </template>
                <template #desc>
                  {{ student.desc }}
                </template>
              </StudentsCommentCard>
            </div>
          </div>
        </div>
      </div>
      <div class="container !p-0">
        <div class="">
          <div
            class="container absolute bottom-0 flex flex-col lg:flex-row bg-[rgba(37,38,65,1)] justify-between rounded-[37px] translate-y-[50%] items-center"
          >
            <div
              class="text-white pl-[50px] py-[40px] lg:pl-[100px] lg:py-[80px] font-semibold text-[18px] lg:text-[36px]"
            >
              APP is available for free
            </div>
            <div class="pr-[40px] py-[40px] lg:pr-[80px] lg:py-[80px] flex gap-[20px]">
              <button
                class="text-white px-[13px] py-[7px] lg:px-[26px] lg:py-[14px] bg-[rgba(41,185,231,1)] rounded-[12px]"
              >
                <div class="flex items-center gap-[10px]">
                  <img src="../img/android-icon.png" alt="" /><span
                    class="font-semibold text-[12px] lg:text-[24px]"
                    >ANDROID APP</span
                  >
                </div>
              </button>
              <button
                class="text-white px-[13px] py-[7px] lg:px-[60px] lg:py-[14px] bg-primary rounded-[12px]"
              >
                <div class="flex items-center gap-[10px]">
                  <img src="../img/ios-icon.png" alt="" /><span
                    class="font-semibold text-[12px] lg:text-[24px]"
                    >IOS APP</span
                  >
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Teacher -->
    <div class="container">
      <div
        class="pt-[175px] flex flex-col lg:flex-row gap-[50px] lg:gap-[100px] mb-[115px] lg:mb-[230px]"
      >
        <div v-for="(teacher, index) in teacherList" :key="index">
          <FeatureCards>
            <template #img>
              <img class="w-full h-full object-cover" :src="teacher.img" alt="" />
            </template>
            <template #title>{{ teacher.title }}</template>
            <template #desc>{{ teacher.desc }}</template>
            <template #button>Apply a teacher</template>
          </FeatureCards>
        </div>
      </div>
    </div>
  </div>
</template>
