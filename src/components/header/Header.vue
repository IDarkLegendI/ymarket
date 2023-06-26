<template>
  <header>
    <div class="logo"><img src="../../assets/yandex.svg" alt=""></div>
    <SearchHeader />
  </header>
</template>

<script setup lang="ts">
  import SearchHeader from "./SearchHeader.vue";
</script>

<style scoped>
header {
  width: 100%;
  height: 7vh;
  display: flex;
  flex-direction: row;
  //justify-content: space-between;
  align-items: center;
}
.logo {
  cursor: pointer;
}
</style>