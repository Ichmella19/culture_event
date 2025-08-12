<script setup>
import { useCart } from '~/composables/useCart'
import { useRouter } from 'vue-router'
const cart = useCart()
const router = useRouter()

function goToCart() {
  router.push('/cart')
}
</script>

<template>
  <header>
    <button @click="goToCart" class="relative">
      🛒
      <span v-if="cart.itemCount > 0" class="badge">{{ cart.itemCount }}</span>
    </button>
  </header>
</template>
