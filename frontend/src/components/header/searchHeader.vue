<template>
  <div class="main">
    <div class="search-box">
      <div class="search-input-container">
        <div style="width: 100%">
          <input type="text" @focus="inputFocus" @blur="inputUnFocus" placeholder="Искать товары" v-model="searchText">
        </div>
        <button class="buttonClear" @click="clearSearchText">
            <div class="buttonClearDiv">
          </div>
        </button>
      </div>
      <Button msg="Найти" hoverClass="buttonFind" id="buttonFind" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../buttons/button.vue";
import {ref, watch} from "vue";
const searchText = ref('')
let documentButtonClearDiv: Element;
watch(searchText, async (newSearch) => {
  if(newSearch.length > 0)
  {
    documentButtonClearDiv.classList.add('buttonClearDiv_Active')
  }
  else {
    documentButtonClearDiv.classList.remove('buttonClearDiv_Active')
  }
})

document.addEventListener("DOMContentLoaded", () => {
  documentButtonClearDiv = document.getElementsByClassName('buttonClearDiv')[0]
});

const clearSearchText = () => {
  if(searchText.value.length > 0) searchText.value = ''
  inputFocus() // Костыль
}

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

.search-input-container {
  display: flex;
  position: relative;
  flex-grow: 1;
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
.search-box #buttonFind{
  border-radius: 0 7px 7px 0;
  padding: 12px 16px;
}
.searchYes .search-box #buttonFind {
  border: 2px solid white;
}
.searchYes .search-box input {
  border: 2px solid white;
  background-color: #fff;
}

.buttonClear {
  display: block;
  z-index: 5;
  position: absolute;
  right: 0;
  height: 100%;
  padding: 0;
  border: none;
  background: transparent;
}

.buttonClearDiv {
  width: 38px;
  height: 100%;
  background: transparent 50% 50% no-repeat;
  background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2210%22%3E%3Cpolygon%20points%3D%2210%2C0.7%209.3%2C0%205%2C4.3%200.7%2C0%200%2C0.7%204.3%2C5%200%2C9.3%200.7%2C10%205%2C5.7%209.3%2C10%2010%2C9.3%205.7%2C5%22%2F%3E%3C%2Fsvg%3E);
  background-size: 16px;
  transition: opacity .1s ease-out;
  cursor: default;
  opacity: 0;
}

.buttonClearDiv_Active {
  opacity: 0.3;
  cursor: pointer;
}

.buttonClear:hover .buttonClearDiv_Active {
  opacity: 1;
}
</style>