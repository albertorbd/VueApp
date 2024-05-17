<template>
  <LanguageSwitcher></LanguageSwitcher>
  <div class="Search">
    <h2 class="search_tittle">{{ t('Search') }}</h2>
    <v-toolbar dense floating class="barra_azul">
      <v-text-field
        v-model="searchQuery"
        prepend-icon="mdi-magnify"
        hide-details
        single-line
        class="search-field"
      ></v-text-field>
    </v-toolbar>
    >
    <h3 class="categories_search_tittle">{{ t('Categoria') }}</h3>
    <div v-if="searchQuery">
      <v-table theme="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Fecha de creación</th>
            <th>Fecha de actualización</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in searchResults.categories" :key="category.id">
            <td>{{ category.id }}</td>
            <td>{{ category.name }}</td>
            <td>{{ category.createdAt }}</td>
            <td>{{ category.updatedAt }}</td>
          </tr>
        </tbody>
      </v-table>

      <h3 class="sites_search_tittle">{{ t('Sitio') }}</h3>
      <div class="sites-container">
        <v-row v-if="searchResults.sites.length > 0">
          <v-col v-for="site in searchResults.sites" :key="site.id" cols="12" sm="6" md="4">
            <v-card class="mx-auto" max-width="400">
              <v-img
                class="align-end text-white"
                height="200"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                cover
              >
                <v-card-title>{{ site.name }}</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4">
                {{ site.url }}
              </v-card-subtitle>

              <v-card-text>
                <div>{{ site.user }}</div>
                <div>{{ site.description }}</div>
                <div>ID: {{ site.id }}</div>
                <div>Fecha de creación: {{ site.createdAt }}</div>
                <div>Fecha de actualización: {{ site.updatedAt }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <div v-else>No se encontraron sitios</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import { useCategoriesStore } from '@/stores/Category'
import { useSitesStore } from '@/stores/Site'
import { useI18n } from 'vue-i18n'
const searchQuery = ref('')
const { t } = useI18n()
const { categories } = useCategoriesStore()
const { sites } = useSitesStore()

const searchResults = computed(() => {
  const query = searchQuery.value.toLowerCase()
  const filteredCategories =
    categories?.filter((category) => category.name.toLowerCase().includes(query)) ?? []
  const filteredSites = sites?.filter((site) => site.name.toLowerCase().includes(query)) ?? []
  return { categories: filteredCategories, sites: filteredSites }
})
</script>

<style>
.Search {
  background-color: aqua;
}
.search_tittle {
  font-size: 35px;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 20px;
}
.categories_search_tittle {
  font-size: 25px;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 50px;
}
.sites_search_tittle {
  font-size: 25px;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 25px;
}
.barra_azul {
  background-color: aqua;
}
.search-field {
  max-width: 500px;
  text-align: center;
  margin: 0 auto;
}
</style>
