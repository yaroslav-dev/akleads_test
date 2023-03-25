<template>
  <div class="table text-light my-3">
    <h5 style="padding-left: 8px;">ZIP Data:</h5>
    <div class="table-row">
      <div class="table-cell">State: </div>
      <div class="table-cell">{{ stateInfo }}</div>
    </div>
    <div class="table-row">
      <div class="table-cell">City: </div>
      <div class="table-cell">{{ cityInfo }}</div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { store } from '@/store.js'

const stateInfo = computed(() => {
  return store.userZipInfo.state
})
const cityInfo = computed(() => {
  return store.userZipInfo.city
})
</script>

<style scoped>
.table {
  width: 380px;
}

.table-row {
  display: flex;
}

.table-cell {
  flex: 1;
  padding: 8px;
  word-break: break-word;
}
</style>