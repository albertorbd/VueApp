<template>
  <div class="language-switcher">
    <button @click="changeLanguage('en')" class="language-button">English</button>
    <button @click="changeLanguage('es')" class="language-button">Español</button>
    <button @click="changeLanguage('fr')" class="language-button">Français</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'LanguageSwitcher',
  setup() {
    const { locale } = useI18n()

    const changeLanguage = (language: string) => {
      if (language !== locale.value) {
        locale.value = language
      }
    }

    return { changeLanguage }
  }
})
</script>

<style scoped>
.language-switcher {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: aqua;
  padding-top: 60px;
}

.language-button {
  background-color: #000;
  color: #fff;
  padding: 12px 24px;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin: 0 8px;
}

.language-button:hover {
  background-color: #333;
}
</style>
