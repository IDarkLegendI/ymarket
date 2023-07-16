<script setup lang="ts">
import Header from "./components/header/header.vue";
import DialogCatalog from "./components/dialog/dialogCatalog.vue";
import useDialog from "./components/dialog/dialogAPI.vue";
import {ref} from "vue";
const {catalogPopUp} = useDialog()
const openedCatalog = ref(catalogPopUp)
</script>

<template>
  <div style="display: flex; flex-direction: column; min-height: 100%; min-width: 1024px;">
    <Header />
    <div style="position: absolute; background-color: red; height: 50vh; width: 20vw" v-if="openedCatalog">

    </div>
    <DialogCatalog v-if="openedCatalog"></DialogCatalog>
  </div>
</template>

<style scoped>

</style>
