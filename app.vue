<script lang="ts">
import {inject, provide, ref} from "vue";
export default {
  setup() {
    const catalog = ref(false)
    const authToggle = ref(false)
    const regToggle = ref(false)
    const toggleCatalog = () => {
      catalog.value = !catalog.value
    }
    provide('authToggle', authToggle)
    provide('regToggle', regToggle)
    provide('catalog', catalog)
    provide('toggleCatalog', toggleCatalog)

    return {
      catalog,
      authToggle,
      regToggle
    }
  },
}
</script>

<template>
<div style="display: flex; flex-direction: column; min-height: 100%; min-width: 1024px;">
  <Header></Header>
</div>
<DialogCatalog></DialogCatalog>
<auth-modal v-if="authToggle"></auth-modal>
<auth-modal-reg v-if="regToggle"></auth-modal-reg>
<div class="overlayAuth" v-if="authToggle || regToggle" @click="authToggle = false; regToggle = false"></div>
</template>

<style scoped>
.overlayAuth{
  transition: all .2s;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
  top: 0;
  left: 0;
  z-index: 1005;
  cursor: pointer;
}
</style>
