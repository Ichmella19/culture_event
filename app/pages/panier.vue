<template>
  <div class="p-6 max-w-3xl mx-auto">
    <h2 class="text-3xl font-bold mb-6">Votre panier</h2>
    <div v-if="cart.items.length === 0" class="text-gray-500">
      Votre panier est vide.
    </div>
    <ul v-else>
      <li
        v-for="item in cart.items"
        :key="item.id"
        class="flex justify-between items-center py-3 border-b"
      >
        <div>
          <p class="font-semibold">{{ item.title }}</p>
          <p class="text-sm text-gray-600">{{ item.date }} - {{ item.location }}</p>
          <p class="font-semibold">{{ item.price }} €</p>
        </div>
        <button
          @click="cart.removeItem(item.id)"
          class="text-red-600 hover:underline"
        >
          Supprimer
        </button>
      </li>
    </ul>
    <div class="mt-6 text-xl font-bold">Total : {{ cart.totalPrice }} €</div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart.js'
const cart = useCartStore()
</script>
