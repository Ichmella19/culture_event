<script setup>
import { useCart } from '~/composables/cart'
const { items, removeItem } = useCart()
</script>

<template>
  <section class="max-w-4xl mx-auto p-6 py-28">
    <h2 class="text-2xl font-bold mb-6">🛒 Votre panier</h2>

    <div v-if="items.length === 0" class="text-gray-600">
      Votre panier est vide.
    </div>

    <ul v-else>
      <li
        v-for="item in items"
        :key="item.id"
        class="flex justify-between items-center p-4 border-b"
      >
        <div>
          <p class="font-semibold">{{ item.title }}</p>
          <p class="text-sm text-gray-500">{{ item.date }} - {{ item.location }}</p>
        </div>
        <button
          @click="removeItem(item.id)"
          class="text-red-600 hover:text-red-800 font-bold"
        >
          Supprimer
        </button>
      </li>
    </ul>
  </section>
</template>
