<template>
  <div class="form mx-auto">
    <div>
      <div class="input-group mb-3">
        <input
          v-model="zipInput"
          type="text"
          class="form-control"
          :class="{'is-invalid': zipIsInvalid}"
          placeholder="Enter ZIP code"
          aria-label="Enter ZIP code"
          aria-describedby="button-addon1"
          @input="zipIsInvalid = false"
        >
        <button
          class="btn btn-primary btn-zip-input"
          type="button"
          id="button-addon1"
          @click="getUserZipInfo(zipInput)"
          :disabled="!zipInput"
        >
          <span
            v-if="loading"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          <span v-else>Render</span>
        </button>
        <div class="invalid-feedback">
          Please enter a valid ZIP code.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import { ref } from 'vue';
import { store } from '@/store.js'

const router = useRouter()

const zipInput = ref('')

const loading = ref(false)

const zipIsInvalid = ref(false)

const getUserZipInfo = zip => {
  loading.value = true

  fetch(`https://app.zipcodebase.com/api/v1/search?apikey=b21ff220-ca3a-11ed-bd71-8ddc7a4eeda8&codes=${zip}&country=US`)
	.then(response => response.json())
	.then(response => {
    store.userZipInfo = Object.assign(response.results[zip][0])
    router.push({
      name: 'zip',
    })
  })
	.catch(() => {
    zipIsInvalid.value = true
    loading.value = false
  });
}

onBeforeRouteLeave(() => {
  loading.value = false
})

</script>

<style scoped>
.form {
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-group {
  width: 280px;
}
.btn-zip-input {
  min-width: 78px;
  border-radius: 0 6px 6px 0 !important;
}
</style>