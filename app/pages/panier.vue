
<script setup>
import { useCartStore } from '~/composables/cart.js'

const cart = useCartStore()  // <-- c’est une fonction, pas juste "cart()"
</script>
<template>
  <div>
    <h1>Panier</h1>
    <div v-if="cart.itemCount === 0">Votre panier est vide.</div>
    <ul v-else>
      <li v-for="item in cart.items" :key="item.id">
        {{ item.title }} — {{ item.price }} €
        <button @click="cart.removeItem(item.id)">Supprimer</button>
      </li>
    </ul>
    <div>Total : {{ cart.totalPrice }} €</div>
  </div>
</template>
 