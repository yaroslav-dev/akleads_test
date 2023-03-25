<template>
  <div class="wrapper">
    <div class="container">
      <button
        class="btn btn-primary"
        style="align-self: flex-start;"
        type="button"
        @click="goBack()"
      >Back</button>
  
      <ZipTable />
      
      <div class="button-group">
        <button
          v-if="!ipDataIsLoaded"
          class="btn btn-primary"
          style="align-self: flex-start;"
          type="button"
          @click="getUserIpInfo()"
        >
          <span
            v-if="ipLoading"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span v-else>IP Lookup</span>
        </button>
  
        <button
          v-if="isUtmsExist && !utmDataIsLoaded"
          class="btn btn-primary"
          style="align-self: flex-start;"
          type="button"
          @click="getUtmInfo()"
        >
          <span
            v-if="utmLoading"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span v-else>UTM Tags</span>
        </button>
      </div>

      <IpTable v-if="ipDataIsLoaded" />
      <UtmTable v-if="isUtmsExist && utmDataIsLoaded" />
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import ZipTable from '@/components/ZipTable.vue'
import IpTable from '@/components/IpTable.vue'
import UtmTable from '@/components/UtmTable.vue'
import { store } from '@/store.js'

const ipDataIsLoaded = ref(false)
const utmDataIsLoaded = ref(false)

const ipLoading = ref(false)
const utmLoading = ref(false)

const isUtmsExist = computed(() => {
  return Object.keys(store.UTMParams).length
})

const router = useRouter()

const goBack = () => {
  router.push({ name: 'home' })
}

const apiKey = '21f8296c6305d4e72ee12d03ecd822292d34fdda8d02d7b75da59ccb'

const getUserIpInfo = () => {
  ipLoading.value = true
  fetch(`https://api.ipdata.co?api-key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    store.userIpInfo = Object.assign(data)
    ipDataIsLoaded.value = true
    ipLoading.value = false
    utmDataIsLoaded.value = false
  })
}

const getUtmInfo = () => {
  utmLoading.value = true
  utmDataIsLoaded.value = true
  utmLoading.value = false
  ipDataIsLoaded.value = false
}

onMounted(() => {
  if (store.userZipInfo.state == undefined) {
    goBack()
  }
})

</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: 350px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.button-group {
  display: flex;
  justify-content: space-between;
}
</style>