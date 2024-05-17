<template>
  <div>
    <h2 class="add_category_tittle">{{ t('AddCategory') }}</h2>
    <div class="sites_form">
      <form @submit.prevent="handleSubmit">
        <v-text-field
          v-model="newCategory.name"
          :counter="50"
          required
          :placeholder="$t('CategoryName')"
        ></v-text-field>
        <v-btn class="add_sites_button" type="submit">{{ t('Add') }}</v-btn>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCategoriesStore } from '@/stores/Category'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const { createCategory } = useCategoriesStore()

const newCategory = ref({
  name: ''
})

function handleSubmit() {
  createCategory(newCategory.value)

  // Limpiar el formulario después de agregar la categoría
  newCategory.value = { name: '' }
  alert('Categoría agregado correctamente')
}
</script>
<style>
.add_category_tittle {
  text-align: center;
  padding-top: 120px;
  padding-bottom: 50px;
  color: black;
}
</style>
