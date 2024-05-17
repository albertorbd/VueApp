<template>
  <h1 class="sites_tittle">{{ t('SitesTittle') }}</h1>
</template>
<script lang="ts">
import { useI18n } from 'vue-i18n'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'CategoriesTitle',
  setup() {
    const { t } = useI18n()

    return { t }
  }
})
</script>

<style>
.sites_tittle {
  background-color: aqua;
  padding-top: 120px;
  padding-bottom: 60px;
  font-size: 36px;
  text-align: center;
}

@media (max-width: 1024px) {
  .sites_tittle {
    padding-top: 60px;
    font-size: 25px;
    padding-bottom: 20px;
  }
}
</style>
