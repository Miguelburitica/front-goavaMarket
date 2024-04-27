<template>

<h1 class="text-3xl">Lista de productos</h1>
<v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items="serverItems"
    :items-length="totalItems"
    :loading="loading"
    :search="search"
    item-value="name"
    @update:options="loadItems"
    color="primary"
></v-data-table-server>

</template>

<script setup lang="ts">
import type { ProductItemList } from '@/types/products'

import { ref, onMounted } from 'vue'

definePageMeta({
  layout: 'authenticated-area',
})

const itemsPerPage = ref(10)
const headers = ref([
  {
    title: 'Dessert (100g serving)',
    value: 'name',
    key: 'name',
  },
  {
    title: 'Calories',
    value: 'calories',
    key: 'calories',
  },
  {
    title: 'Fat (g)',
    value: 'fat',
    key: 'fat',
  },
  {
    title: 'Carbs (g)',
    value: 'carbs',
    key: 'carbs',
  },
  {
    title: 'Protein (g)',
    value: 'protein',
    key: 'protein',
  },
  {
    title: 'Iron (%)',
    value: 'iron',
    key: 'iron',
  },
  {
    title: 'Actions',
    value: 'actions',
    key: 'actions',
  },
])

const serverItems = ref<ProductItemList[]>([])
const totalItems = ref(0)
const loading = ref(false)
const search = ref('')

const loadItems = async ({ itemsPerPage, page, search }: { itemsPerPage: number, page: number, search: string }) => {
  loading.value = true
  // const response = await fetch(`https://api.example.com/products?itemsPerPage=${itemsPerPage}&page=${page}&search=${search}`)
  console.log({ lalala: loading.value })
  const awaitId = await new Promise((resolve) => setTimeout(() => resolve('lalala'), 3000))
  
  const response = {
    items: [
      { id: '1',name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: '1%' },
      { id: '2', name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: '1%' },
      { id: '3', name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, iron: '7%' },
      { id: '4', name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, iron: '8%' },
      { id: '5', name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9, iron: '16%' },
      { id: '6', name: 'Jelly bean', calories: 375, fat: 0.0, carbs: 94, protein: 0.0, iron: '0%' },
      { id: '7', name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0, iron: '2%' },
      { id: '8', name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, iron: '45%' },
      { id: '9', name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9, iron: '22%' },
      { id: '10', name: 'KitKat', calories: 518, fat: 26.0, carbs: 65, protein: 7, iron: '6%' },
    ],
    total: 30,
  }
  // const { items, total } = await response.json()
  const { items, total } = response
  serverItems.value = items
  totalItems.value = total
  console.log({ lalala: loading.value })
  loading.value = false
  console.log({ lalala: loading.value })
}

onMounted(() => {
  loadItems({ itemsPerPage: itemsPerPage.value, page: 1, search: '' })
})

</script>