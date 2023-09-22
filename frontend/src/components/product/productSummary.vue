<template>
  <!-- BEGIN [product/productSummary] -->
  <!-- _1wlBh  -->
  <div class="main">
    <!-- _3XQ0I -->
    <div class="imagesBox">
    <!-- Tw_fy -->
      <div class="imagesMain">
        <product-image-gallery></product-image-gallery>
      </div>
    </div>
    <!-- _3driS -->
    <div class="infoBox"></div>
    <!-- _21B60 -->
    <div class="priceBox"></div>
    <!-- _2DCJs -->
    <div class="similarBox"></div>
  </div>
  <!-- END [product/productSummary] -->
</template>

<script setup lang="ts">

import ProductImageGallery from "./productImageGallery.vue";
</script>

<style scoped>
.main {
  display: grid;
  grid-template-areas:
        "left info recomend"
        "additional additional recomend";
  grid-template-columns: calc(100% - 808px) 400px 360px;
  gap: 0 24px;
  min-width: 1136px;
}

.imagesBox {
  grid-area: left;
}

.infoBox {
  grid-area: info;
}

.priceBox {
  grid-area: recomend;
  margin-left: 16px;
}

.similarBox {
  grid-area: additional;
}

.imagesMain {
  min-height: 320px;
  position: sticky;
  top: 32px;
  z-index: 101;
}
</style>