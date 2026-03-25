<template>
  <div class="card hover:scale-105 transition duration-700 ease-in-out cursor-pointer">
    <div class="card-title">
      <div class="aspect-[4/3] overflow-hidden rounded-xl"><slot name="image-title"></slot></div>
      <div class="title font-medium text-[13px] md:text-[26px] line-clamp-2">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="card-body">
      <div class="card-user">
        <slot name="image-user"></slot>
        <div class="user-name font-medium text-[9px] md:text-[18px]">
          <slot name="user-name"></slot>
        </div>
      </div>
      <div class="card-desc text-[rgba(105,105,132,1)]">
        <slot name="desc"></slot>
      </div>
    </div>
    <div class="card-footer">
      <p class="text-[rgba(105,105,132,1)] underline cursor-pointer">Read more</p>
      <div class="card-footer-right">
        <div class="text-primary"><font-awesome-icon icon="eye" /></div>
        <div class="text-[rgba(105,105,132,1)]"><slot name="views"></slot></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: white;
  padding: 60px 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.card-user {
  display: flex;
  align-items: center;
  gap: 10px;
}
.card-footer {
  display: flex;
  justify-content: space-between;
}
.card-footer-right {
  display: flex;
  align-items: center;
  gap: 7px;
}
.card-title {
  height: 100%;
  padding-bottom: 15px;
}
.card-body {
  height: 100%;
  padding-bottom: 40px;
}
.card-user {
  padding-bottom: 20px;
}
</style>
