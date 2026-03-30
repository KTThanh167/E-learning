<script setup>
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

import { ref } from 'vue'

const showConfirm = ref(false)
const selectedId = ref(null)

const openConfirm = (id) => {
  selectedId.value = id
  showConfirm.value = true
}

const confirmRemove = () => {
  cartStore.removeFromCart(selectedId.value)
  showConfirm.value = false
}

const cancelRemove = () => {
  showConfirm.value = false
}
</script>

<template>
  <div class="container py-[100px]">
    <h1 class="text-[30px] font-bold mb-[30px] pt-[50px]">Your Cart</h1>

    <!-- EMPTY -->
    <div v-if="cartStore.cart.length === 0" class="text-center py-[50px]">
      <p class="text-red-500 font-semibold text-[30px]">Your cart is empty.</p>
    </div>

    <!-- LIST -->
    <div v-else class="flex flex-col gap-[20px]">
      <div
        v-for="item in cartStore.cart"
        :key="item.id"
        class="flex justify-between items-center p-[20px] bg-white rounded-[10px] shadow"
      >
        <!-- LEFT -->
        <div class="flex items-center gap-[20px]">
          <img class="w-[100px] h-[70px] object-cover" :src="item.img" />
          <div>
            <p class="font-semibold text-[18px]">{{ item.title }}</p>
            <p class="text-gray-500 text-[14px]">{{ item.userName }}</p>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="flex items-center gap-[20px]">
          <p class="text-primary font-bold text-[18px]">
            {{ item.newPrice }}
          </p>

          <button @click="openConfirm(item.id)" class="bg-red-500 text-white px-3 py-1 rounded">
            Remove
          </button>
        </div>
        <div v-if="showConfirm" class="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div class="bg-white p-6 rounded-lg w-[300px] text-center">
            <p class="mb-4">Remove this course from cart?</p>

            <div class="flex justify-center gap-4">
              <button @click="confirmRemove" class="bg-red-500 text-white px-4 py-2 rounded">
                Yes
              </button>

              <button @click="cancelRemove" class="bg-gray-300 px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      <!-- TOTAL -->
      <div class="flex justify-end mt-[30px]">
        <div class="bg-white p-[20px] rounded shadow w-[300px]">
          <p class="text-[20px] font-semibold mb-[10px]">Total</p>
          <p class="text-[24px] font-bold text-primary">${{ cartStore.totalPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
