<template>
  <div>
    <h2 class="add_site_tittle">{{ $t('AddSite') }}</h2>
  </div>
  <div class="sites_form">
    <form @submit.prevent="handleSiteSubmit">
      <v-text-field v-model="newSite.name" :counter="50" required :placeholder="$t('CategoryName')">
      </v-text-field>

      <v-text-field v-model="newSite.url" required :placeholder="$t('URL')"></v-text-field>

      <v-text-field v-model="newSite.user" required :placeholder="$t('User')"></v-text-field>

      <v-text-field v-model="newSite.password" required :placeholder="$t('Pass')"></v-text-field>

      <v-text-field
        v-model="newSite.description"
        required
        :placeholder="$t('Description')"
      ></v-text-field>
      <label for="categoryId" class="form-label">{{ $t('Categoria') }}</label>
      <select id="categoryId" v-model="selectedCategoryId" class="form-select" required>
        <option value="" disabled>{{ $t('SelectCategory') }}</option>
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{ category.name }}
        </option>
      </select>
      <v-btn class="add_sites_button" type="submit">{{ t('Add') }}</v-btn>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useSitesStore } from '@/stores/Site'
import { useCategoriesStore } from '@/stores/Category'
import type { Site } from '@/core/sites'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const { createSite } = useSitesStore()
const { categories } = useCategoriesStore()

// Objeto del nuevo sitio
const newSite = ref<Omit<Site, 'id' | 'createdAt' | 'updatedAt'>>({
  name: '',
  url: '',
  user: '',
  password: '',
  description: '',
  categoryId: undefined // Dejando categoryId sin asignar un valor inicial
})

// ID de la categoría seleccionada
const selectedCategoryId = ref<number | undefined>(undefined)

// Función para manejar el envío del formulario
const handleSiteSubmit = async () => {
  try {
    console.log('selectedCategoryId:', selectedCategoryId.value)
    // Validar que se haya seleccionado una categoría
    if (selectedCategoryId.value === undefined || selectedCategoryId.value === null) {
      throw new Error('Seleccione una categoría')
    }

    // Llama a la función createSite del store de sitios para crear el nuevo sitio
    await createSite(selectedCategoryId.value, newSite.value)

    // Limpiar el formulario después de agregar el sitio
    resetForm()

    // Muestra un mensaje de éxito al usuario
    alert('Sitio agregado correctamente')
  } catch (error) {
    // Manejo de errores
    console.error('Error al agregar el sitio: ', error)
    alert('Hubo un error al agregar el sitio')
  }
}

// Función para restablecer el formulario después de agregar un sitio
const resetForm = () => {
  newSite.value = {
    name: '',
    url: '',
    user: '',
    password: '',
    description: '',
    categoryId: undefined
  }
}
</script>
<style>
.sites_form {
  padding-bottom: 60px;
  padding-left: 30px;
  padding-right: 30px;
}
.add_site_tittle {
  text-align: center;
  padding-bottom: 40px;
  padding-top: 60px;
  color: black;
}
.form-label {
  font-size: 16px;
  color: #333;
  padding-bottom: 15px;
  padding-left: 15px;
}

.form-select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #070707;
  border-radius: 5px;
  background-color: transparent;
  padding-bottom: 20px;
}

.form-select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
.add_sites_button {
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
