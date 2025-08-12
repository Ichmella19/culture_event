// stores/cart.js (ou Card.js si tu veux vraiment)
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    totalPrice: (state) => state.items.reduce((total, item) => total + item.price, 0)
  },
  actions: {
    addItem(item) {
      if (!this.items.find(i => i.id === item.id)) {
        this.items.push(item)
      }
    },
    removeItem(id) {
      this.items = this.items.filter(item => item.id !== id)
    }
  }
})
