<template>
  <div class="categories-table">
    <v-table theme="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>{{ t('CategoryName') }}</th>
          <th>{{ t('CreationDate') }}</th>
          <th>{{ t('BorrarCategoria') }}</th>
        </tr>
      </thead>
      <tbody>
        <CategoryRow v-for="category in store.categories" :key="category.id" :category="category" />
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
import { useCategoriesStore } from '@/stores/Category'
import CategoryRow from '@/components/CategoryRow.vue'
import { useI18n } from 'vue-i18n'
// const { categories, deleteCategory } = useCategoriesStore()
const store = useCategoriesStore()
const { t } = useI18n()
</script>

<style>
.v-table > .v-table__wrapper > table > tbody > tr > th,
.v-table > .v-table__wrapper > table > thead > tr > th,
.v-table > .v-table__wrapper > table > tfoot > tr > th {
  text-align: center !important;
}
@media (max-width: 1024px) {
  .v-table > .v-table__wrapper > table > tbody > tr > td,
  .v-table > .v-table__wrapper > table > tbody > tr > th,
  .v-table > .v-table__wrapper > table > thead > tr > td,
  .v-table > .v-table__wrapper > table > thead > tr > th,
  .v-table > .v-table__wrapper > table > tfoot > tr > td,
  .v-table > .v-table__wrapper > table > tfoot > tr > th {
    padding: 0 13px !important;
    transition-duration: 0.28s;
    transition-property: box-shadow, opacity, background, height;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
</style>
