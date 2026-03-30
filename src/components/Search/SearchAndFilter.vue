<script setup>
import { ref } from 'vue'
import searchBanner from '../../assets/img/Search/searchBanner.png'
const overlayColor = 'rgba(73, 187, 189, 0.6)'

const forms = ref([
  {
    id: 'subject',
    name: 'subject',
    label: 'Subject',
    options: ['Math', 'English', 'Physics'],
  },
  {
    id: 'partner',
    name: 'partner',
    label: 'Partner',
    options: ['Partner 1', 'Partner 2'],
  },
  {
    id: 'program',
    name: 'program',
    label: 'Program',
    options: ['Program 1', 'Program 2'],
  },
  {
    id: 'language',
    name: 'language',
    label: 'Language',
    options: ['Language 1', 'Language 2'],
  },
  {
    id: 'availability',
    name: 'availability',
    label: 'Availability',
    options: ['Availability 1', 'Availability 2'],
  },
  {
    id: 'learningType',
    name: 'learningType',
    label: 'Learning Type',
    options: ['Learning Type 1', 'Learning Type 2'],
  },
])
</script>

<template>
  <div
    :style="{
      backgroundImage: `linear-gradient(${overlayColor}), url(${searchBanner})`,
    }"
    class="min-h-[326px] bg-center mt-[30px] flex items-center justify-center"
  >
    <!-- search and filter -->
    <div class="md:w-max container">
      <!-- search -->
      <div class="flex justify-between relative">
        <input
          type="text"
          placeholder="Search your favourite course"
          class="py-[25px] pl-[35px] flex-1 rounded-[10px] text-[20px] font-normal outline-none"
        />
        <button
          class="absolute right-[10px] inset-y-0 px-[40px] my-[5px] bg-primary text-white font-bold rounded-[12px] text-[24px]"
        >
          Search
        </button>
      </div>
      <!-- filter -->
      <div class="flex gap-[20px] pt-[20px] flex-wrap">
        <form v-for="item in forms" :key="item.id">
          <div class="relative w-full min-w-[150px] max-w-[300px]">
            <select
              :id="item.id"
              :name="item.name"
              class="w-full py-[20px] pl-[20px] pr-[30px] text-[24px] font-medium appearance-none rounded-[10px] outline-none"
            >
              <option :value="item.id">{{ item.label }}</option>
              <option v-for="opt in item.options" :key="opt" :value="opt.toLowerCase()">
                {{ opt }}
              </option>
            </select>

            <div class="absolute inset-y-0 right-[20px] flex items-center pointer-events-none">
              <img
                src="../../assets/img/Icon/open-bold.png"
                alt="arrow"
                class="w-3 h-3 object-contain"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
