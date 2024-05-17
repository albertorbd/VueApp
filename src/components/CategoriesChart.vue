<template>
  <div class="container">
    <div class="content">
      <h1 class="chart_tittle">{{ t('CategoriesChartTittle') }}</h1>
    </div>
    <div class="chart-container">
      <canvas id="categoriesCreatedChart"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Chart from 'chart.js/auto'
import { useCategoriesStore } from '@/stores/Category'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const drawChart = async () => {
  try {
    const categoriesStore = useCategoriesStore()

    // Obtenemos las categorías del store
    await categoriesStore.fetchAll()

    const today = new Date()
    const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)

    // Filtramos las categorías creadas la última semana
    const categoriesLastWeek = categoriesStore.categories.filter((category) => {
      const createdAt = new Date(category.createdAt)
      return createdAt >= lastWeek
    })

    const numCategoriesLastWeek = categoriesLastWeek.length
    // Obtenemos los nombres de las categorías creadas la última semana
    const categoryNames = categoriesLastWeek.map((category) => category.name)

    // Dibujamos la gráfica
    const ctx = document.getElementById('categoriesCreatedChart') as HTMLCanvasElement | null
    if (!ctx) {
      console.error('No se encontró el elemento canvas')
      return
    }

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Categorías', ...categoryNames],
        datasets: [
          {
            label: 'Número de Categorías',
            data: [numCategoriesLastWeek, ...Array(numCategoriesLastWeek).fill(1)],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              ...Array(numCategoriesLastWeek).fill('rgba(255, 99, 132, 0.2)')
            ],
            borderColor: [
              'rgba(0, 0, 0, 1)',
              ...Array(numCategoriesLastWeek).fill('rgba(0, 0, 0, 1)')
            ],
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
  drawChart()
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
}

.content {
  margin-bottom: 20px;
}

.chart-container {
  width: 80%;
}
</style>
