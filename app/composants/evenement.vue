<template>
  <div class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition cursor-pointer">
    <img :src="evenement.image" alt="event.title" class="rounded-md w-full h-48 object-cover" />
    <h3 class="text-xl font-semibold mt-3">{{ evenement.title }}</h3>
    <p class="text-gray-600">{{ formattedDate }} - {{ evenement.location }}</p>
    <p class="text-indigo-600 font-bold mt-1">{{ evenement.price }} FCFA</p>
    <NuxtLink :to="`/events/${evenement.id}`" class="block mt-3 text-center bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition">Voir détails</NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  event: Object
})

import { computed } from 'vue'

const formattedDate = computed(() => {
  const d = new Date(event.date)
  return d.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
})
</script>
