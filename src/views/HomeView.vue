<!-- eslint-disable vue/no-export-in-script-setup -->
<script setup lang="ts">
import { useCategoriesStore } from '@/stores/Category'

import CategoriesTable from '@/components/CategoriesTable.vue'
import CategoriesTittle from '@/components/CategoriesTittle.vue'
import CategoriesChart from '@/components/CategoriesChart.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const { fetchAll } = useCategoriesStore()

fetchAll()
</script>

<template>
  <LanguageSwitcher></LanguageSwitcher>
  <main class="categories">
    <CategoriesTittle></CategoriesTittle>
    <CategoriesTable></CategoriesTable>
    <CategoriesChart></CategoriesChart>
  </main>
</template>

<style>
.categories {
  text-align: center;
  font-size: 20px;
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: aqua;
}

@media (max-width: 1024px) {
  .categories {
    padding-top: 60px;
    padding-bottom: 120px;
  }
}
</style>
