<script setup></script>

<template>
  <div class="card">
    <div class="card-img">
      <slot name="image"></slot>
    </div>
    <div class="card-content">
      <div class="card-desc">
        <slot name="desc"></slot>
      </div>
      <div class="card-time">
        <slot name="time"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  gap: 10px;
}
.card-img {
  object-fit: contain;
}
.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-desc {
  color: #1e0e62;
}
.card-time {
  color: #15143966;
}
</style>
