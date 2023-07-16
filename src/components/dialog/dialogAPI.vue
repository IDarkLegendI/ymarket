<template>
  <DialogCatalog v-show="catalog"></DialogCatalog>
  <div style="position: absolute; background-color: red; height: 50vh; width: 20vw" v-show="catalog">

  </div>
</template>

<script lang="ts">
import DialogCatalog from "./dialogCatalog.vue";
import {provide, ref} from "vue";
export default {
  components: {
    DialogCatalog
  },
  setup() {
    const catalog = ref(false)
    provide('catalog', catalog)
    return {
      catalog
    }
  }
}
</script>

<style scoped>

</style>