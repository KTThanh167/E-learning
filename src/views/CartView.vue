<script setup>
import { useCartStore } from '@/stores/cartStore'
import { computed, createVNode } from 'vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { Modal } from 'ant-design-vue'

const cartStore = useCartStore()
const cartItems = computed(() => cartStore.cartItems)
const isEmpty = computed(() => cartItems.value.length === 0)

// Hàm hiển thị confirm xóa, nhận vào ID của item
const openConfirmDelete = (id) => {
  Modal.confirm({
    title: 'Bạn có chắc chắn muốn xóa khóa học này?',
    icon: createVNode(ExclamationCircleOutlined),
    content: 'Hành động này không thể hoàn tác.',
    okText: 'Xóa ngay',
    okType: 'danger',
    cancelText: 'Hủy',
    onOk() {
      cartStore.removeFromCart(id)
    },
    onCancel() {
      console.log('User cancelled delete')
    },
  })
}

const increaseCount = (id) => {
  cartStore.increaseCount(id)
}

const decreaseCount = (id) => {
  cartStore.decreaseCount(id)
}
</script>

<template>
  <div class="container py-[100px]">
    <h1 class="text-[30px] font-bold mb-[30px] pt-[50px]">Your Cart</h1>
    <button
      @click="$router.back()"
      class="text-white font-bold p-[20px] bg-primary mb-[30px] rounded-[10px] hover:scale-105 transition duration-300"
    >
      Back to Courses
    </button>

    <div v-if="isEmpty" class="text-center py-[50px]">
      <p class="text-red-500 font-semibold text-[30px]">Your cart is empty.</p>
    </div>

    <div v-else class="flex flex-col gap-[20px]">
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="flex justify-between items-center p-[20px] bg-white rounded-[10px] shadow"
      >
        <div class="flex items-center gap-[20px]">
          <img class="w-[100px] h-[70px] object-cover" :src="item.img" />
          <div>
            <p class="font-semibold text-[18px]">{{ item.title }}</p>
            <p class="text-gray-500 text-[14px]">{{ item.userName }}</p>
          </div>
        </div>

        <div class="flex items-center gap-[20px]">
          <div class="flex items-center">
            <button
              @click="decreaseCount(item.id)"
              class="bg-gray-300 text-gray-700 px-3 py-1 rounded-l hover:bg-gray-400"
            >
              -
            </button>
            <span class="bg-gray-200 text-gray-700 px-3 py-1 min-w-[40px] text-center">
              {{ item.quantity }}
            </span>
            <button
              @click="increaseCount(item.id)"
              class="bg-gray-300 text-gray-700 px-3 py-1 rounded-r hover:bg-gray-400"
            >
              +
            </button>
          </div>

          <p class="text-primary font-bold text-[18px]">
            ${{ (Number(item.newPrice.replace('$', '')) * item.quantity).toFixed(2) }}
          </p>

          <a-button danger type="primary" @click="openConfirmDelete(item.id)" class="font-semibold">
            DELETE
          </a-button>
        </div>
      </div>

      <div class="flex justify-end mt-[30px] mb-[30px]">
        <div class="bg-white p-[20px] rounded shadow w-[300px] flex justify-between items-center">
          <div>
            <p class="text-[20px] font-semibold">Total</p>
            <p class="text-[24px] font-bold text-primary">${{ cartStore.totalPrice }}</p>
          </div>
          <el-button
            type="primary"
            size="large"
            class="font-semibold text-[20px] hover:scale-105 transition duration-300"
          >
            PAY
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
