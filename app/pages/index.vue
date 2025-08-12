<script setup>
const { data: events } = await useFetch('/data/events.json')
</script>

<template>
  <div>
    <h1>Liste des événements</h1>
    <div v-if="events">
      <div v-for="event in events" :key="event.id">
        {{ event.title }} - {{ event.date }}
      </div>
    </div>
  </div>
</template>
