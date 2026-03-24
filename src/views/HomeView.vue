<script setup>
import TheHeader from '../components/Layout/TheHeader.vue'
import HomeContent2Card from '../components/Home/HomeContent2Card.vue'
import '../assets/main.css'
import HomeContent3Card from '../components/Home/HomeContent3Card.vue'
import HomeContent4Card from '../components/Home/HomeContent4Card.vue'
import TheFooter from '../components/Layout/TheFooter.vue'
</script>

<template>
  <div class="hero-section w-100%">
    <!-- Header -->
    <div class="container">
      <!-- Header -->
      <TheHeader></TheHeader>
    </div>
    <!-- Content 1 -->
    <div
      class="content-1 bg-[rgba(157,204,255,1)] mt-[30px] md:mt-[45px] lg:mt-[57px] pt-[35px] lg:pt-[70px] pb-[35px] lg:pb-[70px]"
    >
      <div class="container md:flex gap-[50px]">
        <div class="content-1-left flex-1">
          <p class="text-[20px] md:text-[25px] lg:text-[40px]">
            By Themadbrains in <span class="text-[rgba(73,187,189,1)]">inspiration</span>
          </p>
          <p
            class="text-[rgba(47,50,125,1)] text-[20px] md:text-[25px] lg:text-[40px] font-semibold pt-[12px] lg:pt-[24px]"
          >
            Why Swift UI Should Be on the Radar of Every Mobile Developer
          </p>
          <p
            class="text-[rgba(105,105,132,1)] text-[12px] font-normal md:text-[18px] lg:text-[24px] pt-[7px] lg:pt-[14px]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem
            ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor
          </p>
        </div>
        <div class="content-1-right flex-1">
          <img
            class="rounded-[20px] mt-[20px] sm:mt-0"
            src="../assets/img/Home/Homeview-content1-img.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- Content 2 -->
    <div class="container">
      <div
        class="content-2-title mt-[40px] md:mt-[60px] lg:mt-[80px] text-[rgba(0,0,0,0.8)] font-bold text-[15px] md:text-[23px] lg:text-[30px] pb-[10px] md:pb-[15px] lg:pb-[20px]"
      >
        Reading blog list
      </div>
      <div
        class="content-2-body pb-[40px] grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[50px] lg:grid-cols-4 lg:gap-[76px]"
      >
        <!-- Card 1 -->
        <div class="content-2-body-card-1">
          <HomeContent2Card>
            <template #image>
              <img
                class="w-full h-full object-cover"
                src="../assets/img/Home/Homeview-content-2-img-1.png"
                alt=""
              />
            </template>
            <template #title>
              <p>UX/UI</p>
            </template>
          </HomeContent2Card>
        </div>
        <!-- Card 2 -->
        <div class="content-2-body-card-2">
          <HomeContent2Card>
            <template #image>
              <img
                class="w-full h-full object-cover"
                src="../assets/img/Home/Homeview-content-3-img-2.png"
                alt=""
              />
            </template>
            <template #title>
              <p>React</p>
            </template>
          </HomeContent2Card>
        </div>
        <!-- Card 3 -->
        <div class="content-2-body-card-3">
          <HomeContent2Card>
            <template #image>
              <img
                class="w-full h-full object-cover"
                src="../assets/img/Home/Homeview-content-2-img-3.png"
                alt=""
              />
            </template>
            <template #title>
              <p>PHP</p>
            </template>
          </HomeContent2Card>
        </div>
        <!-- Card 4 -->
        <div class="content-2-body-card-4">
          <HomeContent2Card>
            <template #image>
              <img
                class="w-full h-full object-cover"
                src="../assets/img/Home/Homeview-content-2-img-4.png"
                alt=""
              />
            </template>
            <template #title>
              <p>JavaScript</p>
            </template>
          </HomeContent2Card>
        </div>
      </div>
    </div>
    <!-- Content 3 -->
    <div class="content-3 bg-[rgba(157,204,255,1)] py-[30px] md:py-[60px]">
      <div class="container">
        <div class="content-3-title flex justify-between pb-10">
          <p class="text-[15px] md:text-[23px] lg:text-[30px] font-medium">Related Blog</p>
          <button
            class="text-[rgba(73,187,189,1)] font-bold text-[10px] md:text-[15px] lg:text-[20px] hover:scale-105 transition duration-500 ease-in-out cursor-pointer"
          >
            See all
          </button>
        </div>
        <div class="content-3-body grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-[80px]">
          <!-- Card 1 -->
          <div class="content-3-body-1">
            <HomeContent3Card>
              <template #image-title>
                <img
                  class="w-full h-full object-cover"
                  src="../assets/img/Home/Homeview-content-4-img-1.png"
                  alt=""
                />
              </template>
              <template #title>
                <p>
                  Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                </p>
              </template>
              <template #image-user>
                <img src="../assets/img/Avatar/heading-avt.png" alt="" />
              </template>
              <template #user-name>
                <p>Lina</p>
              </template>
              <template #desc>
                <p>
                  Class, launched less than a year ago by Blackboard co-founder Michael Chasen,
                  integrates exclusively...Class, launched less than a year ago by Blackboard
                  co-founder Michael Chasen, integrates exclusively...Class, launched less than a
                  year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
                </p>
              </template>
              <template #views>
                <p>251,232</p>
              </template>
            </HomeContent3Card>
          </div>
          <!-- Card 2 -->
          <div class="content-3-body-2">
            <HomeContent3Card>
              <template #image-title>
                <img
                  class="w-full h-full object-cover"
                  src="../assets/img/Home/Homeview-content-3-img-1.png"
                  alt=""
                />
              </template>
              <template #title>
                <p>
                  Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                  Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                  Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
                </p>
              </template>
              <template #image-user>
                <img src="../assets/img/Avatar/heading-avt.png" alt="" />
              </template>
              <template #user-name>
                <p>Lina</p>
              </template>
              <template #desc>
                <p>
                  Class, launched less than a year ago by Blackboard co-founder Michael Chasen,
                  integrates exclusively...
                </p>
              </template>
              <template #views>
                <p>251,232</p>
              </template>
            </HomeContent3Card>
          </div>
        </div>
        <div class="content-3-footer flex gap-5 pt-[70px] justify-end">
          <button
            class="text-[rgba(255,255,255,1)] bg-[rgba(73,187,189,0.5)] px-5 py-3 hover:scale-105 transition duration-500 ease-in-out"
          >
            <font-awesome-icon icon="angle-left" />
          </button>
          <button
            class="text-[rgba(255,255,255,1)] bg-[rgba(73,187,189,1)] px-5 py-3 hover:scale-105 transition duration-500 ease-in-out"
          >
            <font-awesome-icon icon="angle-right" />
          </button>
        </div>
      </div>
    </div>
    <!-- Content 4 -->
    <div class="content-4 pb-[170px] pt-[80px]">
      <div class="container">
        <div class="content-4-title pb-[70px]">
          <div class="content-4-title flex justify-between">
            <p class="text-[15px] md:text-[23px] lg:text-[30px] font-medium">Marketing Articles</p>
            <button
              class="text-[rgba(73,187,189,1)] font-bold text-[10px] md:text-[15px] lg:text-[20px] hover:scale-105 transition duration-500 ease-in-out cursor-pointer"
            >
              See all
            </button>
          </div>
        </div>
        <div
          class="content-4-body gap-[25px] lg:gap-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          <!-- Card 1 -->
          <HomeContent4Card>
            <template #image>
              <img
                class="w-full h-full object-cover"
                src="../assets/img/Home/Homeview-content-3-img-1.png"
                alt=""
              />
            </template>
            <template #design>
              <img src="../assets/img/Icon/design-icon.png" alt="" />
              <p class="text-[rgba(105,105,132,1)] font-medium text-[7px] lg:text-[14px]">Design</p>
            </template>
            <template #time>
              <img src="../assets/img/Icon/time-icon.png" alt="" />
              <p class="text-[rgba(105,105,132,1)] font-medium text-[7px] lg:text-[14px]">
                3 Month
              </p>
            </template>
            <template #title>
              <p
                class="text-[12px] lg:text-[24px] font-medium text-[rgba(37,38,65,1)] line-clamp-2"
              >
                AWS Certified solutions Architect
              </p>
            </template>
            <template #content>
              <p class="text-[rgba(105,105,132,1)]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
              </p>
            </template>
            <template #user-image>
              <img src="../assets/img/Avatar/user-avatar.png" alt="" />
            </template>
            <template #user-name>
              <p>Lina</p>
            </template>
            <template #old-price>
              <p
                class="text-[rgba(0,0,0,0.5)] italic line-through font-light text-[9px] lg:text-[18px]"
              >
                $100
              </p>
            </template>
            <template #new-price>
              <p class="font-bold text-[rgba(73,187,189,1)] text-[12px] lg:text-[24px]">$80</p>
            </template>
          </HomeContent4Card>
          <!-- Card 2 -->
          <HomeContent4Card>
            <template #image>
              <img
                class="w-full h-full object-cover"
                src="../assets/img/Home/Homeview-content-4-img-2.png"
                alt=""
              />
            </template>
            <template #design>
              <img src="../assets/img/Icon/design-icon.png" alt="" />
              <p class="text-[rgba(105,105,132,1)] font-medium text-[7px] lg:text-[14px]">Design</p>
            </template>
            <template #time>
              <img src="../assets/img/Icon/time-icon.png" alt="" />
              <p class="text-[rgba(105,105,132,1)] font-medium text-[7px] lg:text-[14px]">
                3 Month
              </p>
            </template>
            <template #title>
              <p
                class="text-[12px] lg:text-[24px] font-medium text-[rgba(37,38,65,1)] line-clamp-2"
              >
                AWS Certified solutions Architect
              </p>
            </template>
            <template #content>
              <p class="text-[rgba(105,105,132,1)]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem
                ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
              </p>
            </template>
            <template #user-image>
              <img src="../assets/img/Avatar/user-avatar.png" alt="" />
            </template>
            <template #user-name>
              <p>Lina</p>
            </template>
            <template #old-price>
              <p
                class="text-[rgba(0,0,0,0.5)] italic line-through font-light text-[9px] lg:text-[18px]"
              >
                $100
              </p>
            </template>
            <template #new-price>
              <p class="font-bold text-[rgba(73,187,189,1)] text-[12px] lg:text-[24px]">$80</p>
            </template>
          </HomeContent4Card>
          <!-- Card 3 -->
          <HomeContent4Card>
            <template #image>
              <img
                class="w-full h-full object-cover"
                src="../assets/img/Home/Homeview-content-4-img-3.png"
                alt=""
              />
            </template>
            <template #design>
              <img src="../assets/img/Icon/design-icon.png" alt="" />
              <p class="text-[rgba(105,105,132,1)] font-medium text-[7px] lg:text-[14px]">Design</p>
            </template>
            <template #time>
              <img src="../assets/img/Icon/time-icon.png" alt="" />
              <p class="text-[rgba(105,105,132,1)] font-medium text-[7px] lg:text-[14px]">
                3 Month
              </p>
            </template>
            <template #title>
              <p
                class="text-[12px] lg:text-[24px] font-medium text-[rgba(37,38,65,1)] line-clamp-2"
              >
                AWS Certified solutions Architect
              </p>
            </template>
            <template #content>
              <p class="text-[rgba(105,105,132,1)]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
              </p>
            </template>
            <template #user-image>
              <img src="../assets/img/Avatar/user-avatar.png" alt="" />
            </template>
            <template #user-name>
              <p>Lina</p>
            </template>
            <template #old-price>
              <p
                class="text-[rgba(0,0,0,0.5)] italic line-through font-light text-[9px] lg:text-[18px]"
              >
                $100
              </p>
            </template>
            <template #new-price>
              <p class="font-bold text-[rgba(73,187,189,1)] text-[12px] lg:text-[24px]">$80</p>
            </template>
          </HomeContent4Card>
          <!-- Card 4 -->
          <HomeContent4Card>
            <template #image>
              <img
                class="w-full h-full object-cover"
                src="../assets/img/Home/Homeview-content-4-img-4.png"
                alt=""
              />
            </template>
            <template #design>
              <img src="../assets/img/Icon/design-icon.png" alt="" />
              <p class="text-[rgba(105,105,132,1)] font-medium text-[7px] lg:text-[14px]">Design</p>
            </template>
            <template #time>
              <img src="../assets/img/Icon/time-icon.png" alt="" />
              <p class="text-[rgba(105,105,132,1)] font-medium text-[7px] lg:text-[14px]">
                3 Month
              </p>
            </template>
            <template #title>
              <p
                class="text-[12px] lg:text-[24px] font-medium text-[rgba(37,38,65,1)] line-clamp-2"
              >
                AWS Certified solutions Architect
              </p>
            </template>
            <template #content>
              <p class="text-[rgba(105,105,132,1)]">
                Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
              </p>
            </template>
            <template #user-image>
              <img src="../assets/img/Avatar/user-avatar.png" alt="" />
            </template>
            <template #user-name>
              <p>Lina</p>
            </template>
            <template #old-price>
              <p
                class="text-[rgba(0,0,0,0.5)] italic line-through font-light text-[9px] lg:text-[18px]"
              >
                $100
              </p>
            </template>
            <template #new-price>
              <p class="font-bold text-[rgba(73,187,189,1)] text-[12px] lg:text-[24px]">$80</p>
            </template>
          </HomeContent4Card>
        </div>
      </div>
    </div>
    <!-- Footer -->
    <div class="footer">
      <TheFooter></TheFooter>
    </div>
  </div>
</template>

<style scoped></style>
