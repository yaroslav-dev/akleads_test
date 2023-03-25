<template>
    <div class="table text-light my-3">
        <h5 style="padding-left: 8px;">UTM Tags:</h5>
      <div v-if="source" class="table-row">
        <div class="table-cell">Source: </div>
        <div class="table-cell">"{{ source }}"</div>
      </div>
      <div v-if="medium" class="table-row">
        <div class="table-cell">Medium: </div>
        <div class="table-cell">"{{ medium }}"</div>
      </div>
      <div v-if="campaign" class="table-row">
        <div class="table-cell">Campaign: </div>
        <div class="table-cell">"{{ campaign }}"</div>
      </div>
      <div v-if="content" class="table-row">
        <div class="table-cell">Content: </div>
        <div class="table-cell">"{{ content }}"</div>
      </div>
      <div v-if="term" class="table-row">
        <div class="table-cell">Term: </div>
        <div class="table-cell">"{{ term }}"</div>
      </div>
    </div>
  </template>
  <script setup>
  import { computed } from 'vue'
  import { store } from '@/store.js'
  
  const source = computed(() => {
    return store.UTMParams.utm_source
  })
  const medium = computed(() => {
    return store.UTMParams.utm_medium
  })
  const campaign = computed(() => {
    return store.UTMParams.utm_campaign
  })
  const content = computed(() => {
    return store.UTMParams.utm_content
  })
  const term = computed(() => {
    return store.UTMParams.utm_term
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