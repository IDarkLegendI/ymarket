<script lang="ts">
import Header from "./components/header/header.vue";
import {inject, provide, ref} from "vue";
import DialogCatalog from "./components/dialog/dialogCatalog.vue";
import AuthModal from "./components/auth/authModal.vue";
export default {
  components: {
    AuthModal,
    DialogCatalog,
    Header
  },
  setup() {
    const catalog = ref(false)
    const authToggle = ref(false)
    const toggleCatalog = () => {
      catalog.value = !catalog.value
    }
    provide('authToggle', authToggle)
    provide('catalog', catalog)
    provide('toggleCatalog', toggleCatalog)

    return {
      catalog,
      authToggle
    }
  },
}
</script>

<template>
  <div style="display: flex; flex-direction: column; min-height: 100%; min-width: 1024px;">
    <Header></Header>
<!--    <div style="position: absolute; background-color: red; height: 50vh; width: 20vw" v-show="catalog">-->

<!--    </div>-->
  </div>
  <DialogCatalog :active="catalog"></DialogCatalog>
  <auth-modal v-if="authToggle"></auth-modal>
  <div class="overlayAuth" v-if="authToggle" @click="authToggle = false"></div>
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
