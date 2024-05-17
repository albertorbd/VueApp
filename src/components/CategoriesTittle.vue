<template>
  <div class="titulo">{{ t('Categoriah1') }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  name: 'CategoriesTitle',
  setup() {
    const { t } = useI18n()

    return { t }
  }
})
</script>

<style>
.titulo {
  font-size: 35px;
  padding-top: 20px;
  padding-bottom: 80px;
}

@media (max-width: 1024px) {
  .titulo {
    font-size: 28px;
    padding-bottom: 40px;
    padding-top: 10px;
  }
}
</style>
