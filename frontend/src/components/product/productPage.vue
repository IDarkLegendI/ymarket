<template>
  <div class="main">
    <product-page-title></product-page-title>
  </div>
</template>

<script setup lang="ts">

import ProductPageTitle from "./productPageTitle.vue";
</script>

<style scoped>
@media (min-width: 1200px) {
  .main{
    width:calc(100% - 80px);
    padding-left: 0;
    padding-right: 0
  }
}
/*._2-whq */
.main {
  width: 100%;
  min-width: 1024px;
  padding: 0 25px;
  margin: 0 auto;
  max-width: 1456px;
}
</style>