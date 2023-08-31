<template>
  <div class="main">
    <div class="search-box">
      <div style="width: 100%">
        <input type="text" @focus="inputFocus" @blur="inputUnFocus" placeholder="Искать товары">
      </div>
      <Button msg="Найти" hoverClass="buttonFind" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../buttons/button.vue";
const inputFocus = () => {
  document.body.classList.add('searchYes')
}
const inputUnFocus = () => {
  document.body.classList.remove('searchYes')
}
</script>

<style scoped>
.main{
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 952;
}
.search-box{
  display: flex;
  margin-left: 0.63vw;
  height: 44px;
  width: 100%;
  margin-right: 1.67vw;
}
.search-box input{
  font-family: inherit;
  width: 100%;
  margin: 0;
  vertical-align: top;
  font-size: 100%;
  outline: none;
  background: transparent;
  -webkit-tap-highlight-color: #222;
  -webkit-appearance: none;
  height: 40px;
  line-height: 40px;
  position: relative;
  padding: 0 36px 0 16px;
  border: 2px solid #fc0;
  border-right-width: 0;
  border-radius: 3px 0 0 3px;
  background-clip: padding-box;
  transition: all .2s;
}
.search-box input:focus{
  outline: none;
}
.search-box Button{
  border-radius: 0 7px 7px 0;
  padding: 12px 16px;
}
.searchYes .search-box Button {
  border: 2px solid white;
}
.searchYes .search-box input {
  border: 2px solid white;
  background-color: #fff;
}
</style>