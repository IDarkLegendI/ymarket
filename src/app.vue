<script lang="ts">
import Header from "./components/header/header.vue";
import {provide, ref} from "vue";
import DialogCatalog from "./components/dialog/dialogCatalog.vue";
export default {
  components: {
    DialogCatalog,
    Header
  },
  setup() {
    const catalog = ref(false)
    const toggleCatalog = () => {
      catalog.value = !catalog.value
    }
    provide('catalog', catalog)
    provide('toggleCatalog', toggleCatalog)
    return {
      catalog
    }
  },
}
</script>

<template>
  <div style="display: flex; flex-direction: column; min-height: 100%; min-width: 1024px;">
    <Header />
    <DialogCatalog v-show="catalog"></DialogCatalog>
    <div style="position: absolute; background-color: red; height: 50vh; width: 20vw" v-show="catalog">

    </div>
  </div>
</template>

<style scoped>

</style>
