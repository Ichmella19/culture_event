<template>
  <div class="bg-white rounded shadow p-4 flex flex-col">
    <img :src="event.image" alt="" class="w-full h-48 object-cover rounded" />
    <h3 class="text-lg font-bold mt-2">{{ event.title }}</h3>
    <p class="text-sm text-gray-500">{{ event.date }} - {{ event.location }}</p>
    <p class="mt-auto font-semibold">{{ event.price }} €</p>
    <button
      class="mt-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      @click="$emit('add-to-cart', event)"
    >
      Ajouter au panier
    </button>
  </div>
</template>

<script setup>
defineProps({
  event: Object
})
</script>
