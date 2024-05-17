import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Category } from '@/core/category'

// Dibujar categorías

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<Category[]>([])
  async function fetchAll() {
    try {
      const response = await fetch('http://localhost:3000/categories')
      const categoriesInfo = await response.json()

      console.log('Data received:', categoriesInfo)

      categories.value = categoriesInfo
    } catch (error) {
      console.error('Error fetching categories ', error)
    }
  }

  // Borrar categorías

  async function deleteCategory(id: number) {
    try {
      await fetch(`http://localhost:3000/categories/${id}`, {
        method: 'DELETE'
      })
      // Borramos la categoría de nuestro Array también.
      categories.value = categories.value.filter((Category) => Category.id !== id)
      console.log('La categoría ha sido eliminada correctamente')
      alert('Borrado correctamente')
      await fetchAll()
    } catch (error) {
      console.error('Error deleting category ', error)
    }
  }

  // Añadir categorías

  async function createCategory(newCategory: Omit<Category, 'id' | 'createdAt' | 'updatedAt'>) {
    try {
      const response = await fetch('http://localhost:3000/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCategory)
      })
      const createdCategory = await response.json()
      categories.value.push(createdCategory)
      console.log('Category created successfully:', createdCategory)
    } catch (error) {
      console.error('Error creating category ', error)
    }
  }

  return { categories, fetchAll, deleteCategory, createCategory }
})
