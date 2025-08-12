<script setup>
import events from '~/data/evenement.json'
import EventCard from '~/composants/EventCard.vue'
import { useCartStore } from '~/composables/cart.js'

const cart = useCartStore()

function addToCart(event) {
  cart.addItem(event)
}
</script>

<template>
  <div class="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
      @add-to-cart="addToCart"
    />
  </div>
</template>
