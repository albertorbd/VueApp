<script setup lang="ts">
import { useSitesStore } from '@/stores/Site'

import SitesCards from '@/components/SitesCards.vue'
import SitesTittle from '@/components/SitesTittle.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import SitesChart from '@/components/SitesChart.vue'
const { fetchAllSites } = useSitesStore()

fetchAllSites()
</script>

<template>
  <LanguageSwitcher></LanguageSwitcher>
  <SitesTittle></SitesTittle>
  <SitesCards></SitesCards>
  <SitesChart></SitesChart>
</template>

<style></style>
