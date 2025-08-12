<script setup>
import { useCart } from '~/composables/cart'
const cart = cart()

function addToCart() {
  cart.addItem(evenement) // event = l’objet événement en question
}
</script>

<template>
  <button @click="addToCart" class="btn">
    Ajouter au panier
  </button>
</template>
