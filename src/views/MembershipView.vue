<script setup>
import TheHeader from '../components/Layout/TheHeader.vue'
import PricingSection from '../components/Membership/PricingSection.vue'
import iconFree from '../assets/img/Icon/membership-free.png'
import iconIndividual from '../assets/img/Icon/membership-individual.png'
import iconCorporate from '../assets/img/Icon/membership-corporate.png'
import RemoteLearningDesc from '../components/Membership/RemoteLearningDesc.vue'
import MembershipContent3Icon from '../assets/img/Icon/green-circle.png'
import openIcon from '../assets/img/Icon/open.png'
import closeIcon from '../assets/img/Icon/close.png'
import { ref } from 'vue'
import StudentsCommentCard from '../components/Membership/StudentsCommentCard.vue'
import MembershipContent4Img from '../assets/img/Membership/student-avatar.png'
import FeatureCards from '../components/Membership/FeatureCard.vue'
import MembershipContent5Img from '../assets/img/Membership/teacher-card.png'
import TheFooter from '../components/Layout/TheFooter.vue'
import MembershipBanner from '@/components/Membership/MembershipBanner.vue'

const openIndex = ref(null)
const coachingList = [
  {
    text: 'Lorem ipsum dolor sit amet',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    text: 'Consectetur adipiscing elit, sed do ',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    text: 'Eiusmod tempos Lorem ipsum',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    text: 'Lorem ipsum dolor sit amet',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
  {
    text: 'Lorem ipsum dolor sit amet',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor',
  },
]

const handleShowDesc = (index) => {
  if (openIndex.value === index) {
    openIndex.value = null
  } else {
    openIndex.value = index
  }
}

const students = [
  {
    img: MembershipContent4Img,
    name: 'Bulkin Simons',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
  },
  {
    img: MembershipContent5Img,
    name: 'Bulkin Simons',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
  },
  {
    img: MembershipContent4Img,
    name: 'Bulkin Simons',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
  },
  {
    img: MembershipContent4Img,
    name: 'Bulkin Simons',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
  },
]

const teachers = [
  {
    img: MembershipContent5Img,
    title: 'Become a Teacher',
    desc: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
  },
  {
    img: MembershipContent5Img,
    title: 'Become a Teacher',
    desc: 'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
  },
]

const coaching = ref({
  title: 'Online coaching lessons for remote learning.',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor',
  button: 'Start learning now',
})
</script>

<template>
  <div class="hero-section w-100%">
    <!-- Header -->
    <div class="container">
      <TheHeader></TheHeader>
    </div>
    <!-- Content 1 -->
    <div class="container">
      <div class="content-1 flex flex-col items-center pt-[150px]">
        <div class="content-1-title">
          <p class="font-extrabold text-[rgba(73,187,189,1)] text-[32px] lg:text-[64px]">
            Affordable pricing
          </p>
        </div>
        <div class="content-1-body flex flex-col lg:flex-row mt-[77px] gap-[15px] lg:gap-[30px]">
          <!-- Card 1 -->
          <PricingSection
            :benefits="[
              { icon: iconFree, text: 'Components-driven system' },
              { icon: iconFree, text: 'Sales-boosting landing pages' },
              { icon: iconFree, text: 'Awesome Feather icons pack' },
            ]"
            button-type="secondary"
          >
            <template #title>Like a pussy</template>
            <template #price>FREE </template>
            <template #time>/ FOREVER</template>
            <template #button>Try for free</template>
          </PricingSection>
          <!-- Card 2 -->
          <PricingSection
            :highlight="true"
            button-type="primary"
            :benefits="[
              { icon: iconIndividual, text: 'Components-driven system' },
              { icon: iconIndividual, text: 'Sales-boosting landing pages' },
              { icon: iconIndividual, text: 'Awesome Feather icons pack' },
              { icon: iconIndividual, text: 'Themed into 3 different styles' },
              { icon: iconIndividual, text: 'Will help to learn Figma' },
            ]"
          >
            <template #title>👤 Individual</template>
            <template #badge>BEST!</template>
            <template #price>$24 </template>
            <template #time>/ MONTH</template>
            <template #button>Try for free</template>
          </PricingSection>
          <!-- Card 3 -->
          <PricingSection
            :benefits="[
              { icon: iconCorporate, text: 'Components-driven system' },
              { icon: iconCorporate, text: 'Sales-boosting landing pages' },
              { icon: iconCorporate, text: 'Awesome Feather icons pack' },
              { icon: iconCorporate, text: 'Themed into 3 different styles' },
            ]"
          >
            <template #title>👥 Corporate</template>
            <template #price>$12 </template>
            <template #time>/ EDITOR</template>
            <template #button>Extended license</template>
          </PricingSection>
        </div>
      </div>
    </div>
    <!-- Content 2 -->
    <div class="container">
      <MembershipBanner :coaching="coaching"></MembershipBanner>
    </div>
    <!-- Content 3 -->
    <div class="container">
      <div class="content-3 mt-[77px] flex flex-col items-center pb-[40px] lg:mb-[80px]">
        <div class="content-3-title">
          <p class="font-semibold text-[18px] lg:text-[36px]">
            Online coaching lessons for remote learning
          </p>
        </div>
        <div class="content-3-body w-full mt-[40px] lg:mt-[80px]">
          <div v-for="(item, index) in coachingList" :key="index">
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
    <!-- Content 4 -->
    <div
      class="content-4 pt-10 lg:pt-20 pb-[160px] lg:pb-[320px] bg-[rgba(157,204,255,0.2)] relative"
    >
      <div class="container">
        <div class="content-4-1">
          <!-- content-4-1 title -->
          <div class="font-semibold text-[18px] lg:text-[36px] text-[rgba(45,52,54,1)]">
            What our students have to say
          </div>
          <!-- content-4-1 body -->
          <div class="relative">
            <button
              class="bg-[rgba(73,187,189,1)] w-[50px] h-[50px] flex items-center justify-center rounded-[25px] absolute left-1/2 top-0 translate-y-1/2 lg:left-0 lg:top-1/2 lg:-translate-y-1/2 -translate-x-1/2 z-10"
            >
              <!-- <img src="../img/angle-left.png" alt="" /> -->
              <picture>
                <source media="(max-width: 767px)" srcset="../assets/img/Icon/angle-left.png" />
                <img src="../assets/img/Icon/angle-left.png" alt="" />
              </picture>
            </button>

            <button
              class="bg-[rgba(73,187,189,1)] w-[50px] h-[50px] flex items-center justify-center rounded-[25px] absolute right-1/2 bottom-0 translate-y-1/2 lg:right-0 lg:top-1/2 lg:-translate-y-1/2 translate-x-1/2 z-10"
            >
              <!-- <img src="../img/angle-right.png" alt="" /> -->
              <picture>
                <source media="(max-width: 767px)" srcset="../assets/img/Icon/angle-right.png" />
                <img src="../assets/img/Icon/angle-right.png" alt="" />
              </picture>
            </button>

            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px] lg:gap-[30px] pt-[50px]"
            >
              <StudentsCommentCard v-for="(student, index) in students" :key="index" class="h-full">
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
        <div class="content-4-2">
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
                class="text-white px-[13px] py-[7px] lg:px-[60px] lg:py-[14px] bg-[rgba(73,187,189,1)] rounded-[12px]"
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
    <!-- Content 5 -->
    <div class="container">
      <div
        class="content-5 pt-[175px] flex flex-col lg:flex-row gap-[50px] lg:gap-[100px] mb-[115px] lg:mb-[230px]"
      >
        <div v-for="(teacher, index) in teachers" :key="index">
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
    <!-- Footer -->
    <TheFooter></TheFooter>
  </div>
</template>
