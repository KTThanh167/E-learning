import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cart')) || [],
  }),

  getters: {
    totalItems: (state) => state.cart.length,

    isInCart: (state) => {
      return (id) => state.cart.some((item) => item.id === id)
    },

    totalPrice: (state) => {
      return state.cart.reduce((total, item) => {
        const price = Number(item.newPrice.replace('$', ''))
        return total + price * item.quantity
      }, 0)
    },
  },

  actions: {
    addToCart(course) {
      if (!this.isInCart(course.id)) {
        this.cart.push({
          id: course.id,
          quantity: 1,
        })
        this.saveToLocalStorage()
      }
    },

    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id)
      this.saveToLocalStorage()
    },

    toggleCart(course) {
      if (this.isInCart(course.id)) {
        this.removeFromCart(course.id)
      } else {
        this.addToCart(course)
      }
    },

    increaseCount(id) {
      const item = this.cart.find((i) => i.id === id)
      if (item) {
        item.quantity++
        this.saveToLocalStorage()
      }
    },

    decreaseCount(id) {
      const item = this.cart.find((i) => i.id === id)
      if (item && item.quantity > 1) {
        item.quantity--
        this.saveToLocalStorage()
      }
    },

    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
  },
})
