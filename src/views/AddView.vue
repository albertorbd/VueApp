<template>
  <LanguageSwitcher></LanguageSwitcher>
  <div class="add">
    <AddCategoryForm></AddCategoryForm>
    <AddSiteForm></AddSiteForm>
  </div>
</template>

<script setup lang="ts">
import AddCategoryForm from '@/components/AddCategoryForm.vue'
import AddSiteForm from '@/components/AddSiteForm.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
</script>

<style>
.add {
  background-color: aqua;
}
</style>
