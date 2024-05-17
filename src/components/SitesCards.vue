<template>
  <div class="sites-container">
    <v-row>
      <v-col v-for="site in siteStore.sites" :key="site.id" cols="12" sm="6" md="4">
        <SiteComponents :site="site" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useSitesStore } from '@/stores/Site'
const siteStore = useSitesStore()
import SiteComponents from '@/components/SitesComponents.vue'
</script>

<style>
.sites-container {
  text-align: center;
  padding-top: 50px;
  display: flex;
  background-color: aqua;
  padding-bottom: 60px;
}
</style>
