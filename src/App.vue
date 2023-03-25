<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>

</template>

<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import { store } from './store.js';

const HTTPReferer = ref(document.referrer)

const UTMs = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term'
]

const getUrlParam = param => {
  const urlParams = new URL(window.location.toString()).searchParams
  return urlParams.get(param) || ''
}

const getUtmParams = () => {
  for (let item in UTMs) {
    if (getUrlParam(UTMs[item])) store.UTMParams[UTMs[item]] = getUrlParam(UTMs[item])
  }
}

onMounted(() => {
  store.HTTPReferer = HTTPReferer.value
  getUtmParams()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
