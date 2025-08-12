import { ref } from 'vue'

const items = ref([])

export function useCart() {
  function addItem(event) {
    // Évite les doublons (optionnel)
    if (!items.value.find(e => e.id === event.id)) {
      items.value.push(event)
    }
  }
  function removeItem(id) {
    items.value = items.value.filter(e => e.id !== id)
  }
  return { items, addItem, removeItem }
}
