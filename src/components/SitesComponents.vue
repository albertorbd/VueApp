<template>
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
      <div class="site_user">{{ site.user }}</div>
      <div>{{ site.description }}</div>
    </v-card-text>

    <v-card-actions class="text-center justify-center delete-site">
      <v-btn @click="siteStore.deleteSite(site.id)">{{ t('BorrarCategoria') }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { Site } from '@/core/sites'
import { useSitesStore } from '@/stores/Site'
import { useI18n } from 'vue-i18n'
const siteStore = useSitesStore()
const props = defineProps<{ site: Site }>()
const { t } = useI18n()
</script>

<style scoped>
.text-center v-btn {
  text-align: center;
}

.delete-site {
  padding-bottom: 30px;
}

.site_user {
  padding-bottom: 20px;
}
</style>
