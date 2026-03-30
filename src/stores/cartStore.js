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
        return total + Number(item.newPrice.replace('$', ''))
      }, 0)
    },
  },

  actions: {
    addToCart(course) {
      if (!this.isInCart(course.id)) {
        this.cart.push(course)
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

    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
  },
})
