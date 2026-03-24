<script setup>
import { ref } from 'vue'
import '@/assets/main.css'
const navMenu = ref(false)

const handleMenu = () => {
  navMenu.value = !navMenu.value
}
</script>

<template>
  <div class="header">
    <div class="header_logo">
      <img src="../../assets/img/Icon/logo.png" alt="logo" />
    </div>

    <!-- MENU DESTOP -->
    <div class="hidden lg:block">
      <ul class="flex gap-10">
        <li
          class="text-gray-500 text-[40px] hover:scale-105 transition duration-500 ease-in-out font-normal"
        >
          <router-link to="/home">Home</router-link>
        </li>
        <li
          class="text-gray-500 text-[40px] hover:scale-105 transition duration-500 ease-in-out font-normal"
        >
          <router-link to="/course">Course</router-link>
        </li>
        <li
          class="text-gray-500 text-[40px] hover:scale-105 transition duration-500 ease-in-out font-normal"
        >
          <router-link to="/membership">Careers</router-link>
        </li>
        <li
          class="text-gray-500 text-[40px] hover:scale-105 transition duration-500 ease-in-out font-normal"
        >
          <router-link to="/home">Blog</router-link>
        </li>
        <li
          class="text-gray-500 text-[40px] hover:scale-105 transition duration-500 ease-in-out font-normal"
        >
          <router-link to="/home"> About Us </router-link>
        </li>
      </ul>
    </div>

    <!-- MENU TABLET -->
    <div class="hidden md:block lg:hidden">
      <ul class="flex gap-6">
        <li
          class="text-gray-500 hover:scale-105 transition duration-500 ease-in-out font-normal text-[25px]"
        >
          <router-link to="/home">Home</router-link>
        </li>
        <li
          class="text-gray-500 hover:scale-105 transition duration-500 ease-in-out font-normal text-[25px]"
        >
          <router-link to="/course">Course</router-link>
        </li>
        <li
          class="text-gray-500 hover:scale-105 transition duration-500 ease-in-out font-normal text-[25px]"
        >
          <router-link to="/membership">Careers</router-link>
        </li>
        <li
          class="text-gray-500 hover:scale-105 transition duration-500 ease-in-out font-normal text-[25px]"
        >
          <router-link to="/home">Blog</router-link>
        </li>
        <li
          class="text-gray-500 hover:scale-105 transition duration-500 ease-in-out font-normal text-[25px]"
        >
          <router-link to="/home">About Us</router-link>
        </li>
      </ul>
    </div>

    <!-- MENU MOBILE -->
    <div class="menu md:hidden">
      <div class="menu-icon">
        <font-awesome-icon :icon="navMenu ? 'x' : 'bars'" @click="handleMenu" />
      </div>

      <div class="menu-nav" v-if="navMenu">
        <ul class="nav-link">
          <li class="text-gray-500 text-[20px] font-normal">
            <router-link to="/home">Home</router-link>
          </li>
          <li class="text-gray-500 text-[20px] font-normal">
            <router-link to="/course">Course</router-link>
          </li>
          <li class="text-gray-500 text-[20px] font-normal">
            <router-link to="/membership">Careers</router-link>
          </li>
          <li class="text-gray-500 text-[20px] font-normal">
            <router-link to="/home">Blog</router-link>
          </li>
          <li class="text-gray-500 text-[20px] font-normal">
            <router-link to="/home">About Us</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="header_avt">
      <img src="../../assets/img/Avatar/heading-avatar.png" alt="avt" />
      <p class="text-[rgba(0,0,0,1)] text-[20px] lg:text-[40px] font-medium">Lina</p>
      <font-awesome-icon icon="angle-down" />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu {
  position: relative;
  cursor: pointer;
}

.menu-nav {
  position: absolute;
  top: 60px;
  transform: translateX(-45%);
  background: #eee;
  padding: 10px;
  border-radius: 6px;
  white-space: nowrap;
}

.nav-link {
  display: flex;
  gap: 5px;
}

.header_avt {
  display: flex;
  align-items: center;
  gap: 7px;
}
</style>
