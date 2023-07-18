<template>
  <DialogCatalog v-show="catalog"></DialogCatalog>
  <div style="position: absolute; background-color: red; height: 50vh; width: 20vw" v-show="catalog">

  </div>
</template>

<script setup lang="ts">
import DialogCatalog from "./dialogCatalog.vue";
import {provide, ref} from "vue";
const catalog = ref(false)
provide('catalog', catalog)
</script>

<style scoped>

</style>