<template>
  <div class="container">
    <div class="content">
      <h1 class="chart_tittle">{{ t('SitesChartTittle') }}</h1>
    </div>
    <div class="chart-container">
      <canvas id="sitesCreatedChart"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Chart from 'chart.js/auto'
import { useSitesStore } from '@/stores/Site'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const drawSiteChart = async () => {
  try {
    const sitesStore = useSitesStore()

    // Obtenemos los sites del store
    await sitesStore.fetchAllSites()

    const today = new Date()
    const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)

    // Filtramos los sites creados la última semana
    const sitesLastWeek = sitesStore.sites.filter((site) => {
      const createdAt = new Date(site.createdAt)
      return createdAt >= lastWeek
    })

    const numSitesLastWeek = sitesLastWeek.length
    // Obtenemos los nombres de los sites creados la última semana
    const sitesNames = sitesLastWeek.map((site) => site.name)

    // Dibujamos la gráfica
    const ctx = document.getElementById('sitesCreatedChart') as HTMLCanvasElement | null
    if (!ctx) {
      console.error('No se encontró el elemento canvas')
      return
    }

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Sitios', ...sitesNames],
        datasets: [
          {
            label: 'Número de Sitios',
            data: [numSitesLastWeek, ...Array(numSitesLastWeek).fill(1)],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              ...Array(numSitesLastWeek).fill('rgba(255, 99, 132, 0.2)')
            ],
            borderColor: ['rgba(0, 0, 0, 1)', ...Array(numSitesLastWeek).fill('rgba(0, 0, 0, 1)')],
            borderWidth: 2
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  } catch (error) {
    console.error('Error al obtener los datos y dibujar la gráfica:', error)
  }
}
// Cuando se monte el componente se ejecutará la función que acabamos de crear
onMounted(() => {
  drawSiteChart()
})
</script>

<style scoped>
.chart_tittle {
  font-size: 32px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
}

.content {
  margin-bottom: 20px;
}

.chart-container {
  width: 80%;
}
</style>
