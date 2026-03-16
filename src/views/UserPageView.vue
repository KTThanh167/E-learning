<script setup>
import SidebarCard from '@/components/SidebarCard.vue'
</script>

<template>
  <div class="container">
    <div class="page-content">
      <h2 style="color: #1e0e62">
        To these in the morning I sent the lead who was to enter the hole
      </h2>
    </div>
    <div class="sidebar">
      <h3 style="color: #15143966">Last Seen</h3>
      <!-- Card 1 -->
      <SidebarCard>
        <template #image>
          <img src="../img/Page2_lastseen_photo1.png" alt="" />
        </template>
        <template #desc>
          <p class="blue-text">To these in the morning I sent the lead who was to...</p>
        </template>
        <template #time>
          <p class="gray-text">19 Hours</p>
        </template>
      </SidebarCard>
      <!-- Card 2 -->
      <SidebarCard>
        <template #image>
          <img src="../img/Page2_lastseen_photo2.png" alt="" />
        </template>
        <template #desc>
          <p>To these in the morning I sent the lead who was to...</p>
        </template>
        <template #time>
          <p>19 Hours</p>
        </template>
      </SidebarCard>
      <!-- Card 3 -->
      <SidebarCard>
        <template #image>
          <img src="../img/Page2_lastseen_photo3.png" alt="" />
        </template>
        <template #desc>
          <p>To these in the morning I sent the lead who was to...</p>
        </template>
        <template #time>
          <p>19 Hours</p>
        </template>
      </SidebarCard>
      <!-- Card 4 -->
      <SidebarCard>
        <template #image>
          <img src="../img/Page2_lastseen_photo4.png" alt="" />
        </template>
        <template #desc>
          <p class="blue-text">To these in the morning I sent the lead who was to...</p>
        </template>
        <template #time>
          <p class="gray-text">19 Hours</p>
        </template>
      </SidebarCard>
      <!-- Card 5 -->
      <SidebarCard>
        <template #image>
          <img src="../img/Page2_lastseen_photo5.png" alt="" />
        </template>
        <template #desc>
          <p class="blue-text">To these in the morning I sent the lead who was to...</p>
        </template>
        <template #time>
          <p class="gray-text">19 Hours</p>
        </template>
      </SidebarCard>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
.container {
  display: grid;
  grid-template-columns: 7fr 4fr;
  gap: 100px;
}
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
