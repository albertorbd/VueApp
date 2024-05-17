import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Site } from '@/core/sites'

// Dibujar sitios

export const useSitesStore = defineStore('sites', () => {
  const sites = ref<Site[]>([])
  async function fetchAllSites() {
    try {
      const response = await fetch('http://localhost:3000/sites')
      const sitesInfo = await response.json()

      console.log('Data received:', sitesInfo)

      sites.value = sitesInfo
    } catch (error) {
      console.error('Error fetching sites ', error)
    }
  }

  // Borrar sitios
  async function deleteSite(id: number) {
    try {
      await fetch(`http://localhost:3000/sites/${id}`, {
        method: 'DELETE'
      })
      // Borramos el sitio de nuestro Array
      sites.value = sites.value.filter((sites) => sites.id !== id)
      console.log('El sitio ha sido eliminado correctamente')
      alert('Borrado correctamente')
      await fetchAllSites()
    } catch (error) {
      console.error('Error deleting site ', error)
    }
  }

  // Añadir sitios
  async function createSite(
    categoryId: number,
    newSite: Omit<Site, 'id' | 'createdAt' | 'updatedAt'>
  ) {
    try {
      const response = await fetch(`http://localhost:3000/categories/${categoryId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSite)
      })

      const createdSite = await response.json()
      sites.value.push(createdSite)
      console.log('Site created successfully:', createdSite)
    } catch (error) {
      console.error('Error creating site ', error)
      throw new Error('Error creating site')
    }
  }
  return { sites, fetchAllSites, deleteSite, createSite }
})
