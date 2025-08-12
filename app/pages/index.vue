<script setup>
import events from '~/data/evenement.json'
import EventCard from '../composants/EventCard.vue'
import { useCart } from '~/composables/cart'

const cart = useCart()

function addToCart(event) {
  cart.addItem(event)
}
</script>

<template>
  <section class="relative min-h-screen py-12 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
    <!-- Décorations flottantes -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-40"></div>
      <div class="absolute bottom-20 right-20 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-40"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <!-- Titre -->
      <h1 class="text-4xl font-extrabold text-center text-gray-800 mb-4">
         Évènements à venir
      </h1>
      <p class="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-xl font-semibold">
        Découvrez nos prochains moments de partage, de culture et de joie.  
        Réservez votre place et vivez l’expérience !
      </p>

      <!-- Liste d'événements -->
      <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <EventCard
          v-for="event in events"
          :key="event.id"
          :event="event"
          @add-to-cart="addToCart"
        />
      </div>
    </div>
  </section>
</template>
