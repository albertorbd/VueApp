<template>
  <tr>
    <td>{{ category.id }}</td>
    <td>{{ category.name }}</td>
    <td>{{ category.createdAt }}</td>
    <td>
      <v-btn @click="store.deleteCategory(category.id)">{{ t('BorrarCategoria') }}</v-btn>
    </td>
  </tr>
</template>

<script setup lang="ts">
import type { Category } from '@/core/category'
import { useCategoriesStore } from '@/stores/Category'
import { useI18n } from 'vue-i18n'

const store = useCategoriesStore()
const props = defineProps<{ category: Category }>()
const { t } = useI18n()
</script>
