<template>
  <DialogCatalog v-show="catalog"></DialogCatalog>
</template>

<script setup lang="ts">
import DialogCatalog from "./dialogCatalog.vue";
import {provide, ref} from "vue";
const catalog = ref(false)
provide('catalog', catalog)
</script>

<style scoped>

</style>