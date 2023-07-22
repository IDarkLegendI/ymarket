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
    <auth-modal v-if="authToggle"></auth-modal>
  </div>
  <DialogCatalog :active="catalog"></DialogCatalog>
</template>

<style scoped>

</style>
