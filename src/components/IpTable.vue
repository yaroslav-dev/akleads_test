<template>
    <div class="table text-light my-3">
      <h5 style="padding-left: 8px;">IP Data:</h5>
      <div class="table-row">
        <div class="table-cell">IP: </div>
        <div class="table-cell">{{ IP }}</div>
      </div>
      <div class="table-row">
        <div class="table-cell">ISP: </div>
        <div class="table-cell">{{ ISP }}</div>
      </div>
      <div class="table-row">
        <div class="table-cell">City: </div>
        <div class="table-cell">{{ cityInfo }}</div>
      </div>
      <div class="table-row">
        <div class="table-cell">Region: </div>
        <div class="table-cell">{{ regionInfo }}</div>
      </div>
      <div class="table-row">
        <div class="table-cell">Country: </div>
        <div class="table-cell">{{ countryInfo }}</div>
      </div>
      <div class="table-row">
        <div class="table-cell">HTTP Referer: </div>
        <div class="table-cell">{{ HTTPReferer }}</div>
      </div>
      <div class="table-row">
        <div class="table-cell">User Agent: </div>
        <div class="table-cell">{{ userAgent }}</div>
      </div>
    </div>
  </template>
  <script setup>
  import { computed } from 'vue'
  import { store } from '@/store.js'
  
  const dataSource = defineProps(['dataSource'])
  
  const IP = computed(() => store.userIpInfo.ip)

  const userAgent = computed(() => window.navigator.userAgent)

  const ISP = computed(() => store.userIpInfo.asn.name)
  
  const cityInfo = computed(() => store.userIpInfo.city)
  
  const regionInfo = computed(() => store.userIpInfo.region)
  
  const countryInfo = computed(() => store.userIpInfo.country_name)
  
  const HTTPReferer = computed(() => store.HTTPReferer)

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