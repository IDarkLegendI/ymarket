<template>
  <div class="main">
    <ButtonPopUp msg="Каталог" />
    <div class="search-box">
      <input type="text" placeholder="Искать товары">
      <Button msg="Найти" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../Button.vue";
import ButtonPopUp from "../ButtonPopUp.vue";
</script>

<style scoped>
.main{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.search-box{
  margin-left: 1vw;
}
.search-box input{
  height: 100%;
  border-color: #F5C400;
}
.search-box input:focus{
  outline: none;
}
.search-box Button{
  border-radius: 0 5px 5px 0;
}
</style>