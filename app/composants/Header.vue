<script setup>

</script>

<template>
  <header class="flex items-center justify-between p-4 bg-gray-100">
    <nav class="flex gap-4">
      <NuxtLink to="/" class="text-blue-600 hover:underline">Accueil</NuxtLink>
      <NuxtLink to="/panier" class="text-blue-600 hover:underline">Panier</NuxtLink>
      <!-- Ajoute d'autres liens ici si besoin -->
    </nav>

    <button class="relative" @click="$router.push('/panier')">
      🛒
      <span
        v-if="useCart().itemCount > 0"
        class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full"
      >
        {{ useCart().itemCount }}
      </span>
    </button>
  </header>
</template>

<style scoped>
/* Exemple de badge pour le nombre dans le panier */
.badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: #dc2626; /* rouge Tailwind */
  color: white;
  border-radius: 9999px;
  padding: 0 6px;
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1;
}
</style>
