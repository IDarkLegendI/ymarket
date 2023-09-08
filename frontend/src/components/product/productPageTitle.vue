<template>
  <!-- BEGIN [product/productPageTitle] -->
  <div>
    <!--  [Хлебные крошки] --- [Сравнить] [В избранное]  -->
    <div style="display: block">
      <div style="display: flex">
        <div class="breadCrumbs">  <!--    fDCYe    -->
          <product-breadcrumbs></product-breadcrumbs>
        </div>
        <div class="buttons">

        </div>
      </div>
    </div>
  </div>
  <!-- END [product/productPageTitle] -->
</template>

<script setup lang="ts">

import ProductBreadcrumbs from "./productBreadcrumbs.vue";
</script>

<style scoped>
.breadCrumbs {
  flex: 1 0 auto;
  width: calc(100% - 360px);
}
</style>