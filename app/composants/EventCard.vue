<template>
  <div class="event-card">
    <img :src="event.image" :alt="event.title" class="event-image" />

    <div class="event-content">
      <h2 class="event-title font-semibold">{{ event.title }}</h2>
      <p class="event-date">{{ event.date }}</p>
      <p class="event-description">{{ event.description }}</p>

      <NuxtLink :to="`/events/${event.id}`" class="event-link">
        Voir plus →
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  event: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.event-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #fff;
  transition: box-shadow 0.2s;
}

.event-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.event-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.event-content {
  padding: 16px;
}

.event-title {
  font-size: 1.2rem;
  margin: 0 0 8px;
}

.event-date {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 8px;
}

.event-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 12px;
}

.event-link {
  color: #007bff;
  text-decoration: none;
}
/* .event-link:hover {
  text-decoration: underline;
} */
</style>
