<template>
  <div class="main">
    <product-page-title></product-page-title>
    <product-summary></product-summary>
  </div>
</template>

<script setup lang="ts">

import ProductPageTitle from "./productPageTitle.vue";
import ProductSummary from "./productSummary.vue";
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
/*padding: 0 25px;*/
.main {
  width: 100%;
  min-width: 1024px;
  margin: 0 auto;
  max-width: 1456px;
}
</style>