<template>
  <div class="catalog" style="top: 65px;" :class="{main: catalog}">
    <h1>123</h1>
    <h1>123</h1>
    <h1>123</h1>
    <h1>123</h1>
    <h1>123</h1>
    <h1>123</h1>
    <h1>123</h1>
    <h1>123</h1>
    <h1>123</h1>
  </div>
  <div class="closeButton" v-if="catalog" @click="catalog = false"></div>
</template>

<script setup lang="ts">
import {inject} from "vue";
const catalog = inject('catalog')
</script>

<style scoped>
.catalog {
  position: fixed;
  z-index: 949;
  animation-duration: .1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-name: _1BoW-;
  width: 100%;
  background: #fff;
  min-height: 0;
  overflow-y: scroll;
  transition: min-height .1s;
  visibility: hidden;
  right: 0;
}

.main {
  min-height: unset;
  height: calc(100% - 300px);
  animation-name: animMain;
  animation-duration: .2s;
  visibility: visible;
}

.closeButton {
  z-index: 102;
}

@keyframes animMain {
  0% {
    opacity: 0;
    transform: translateY(-50px)
  }

  to {
    opacity: 1;
    transform: translateY(0)
  }
}

@keyframes _1BoW- {
  0% {
    visibility: visible;
    margin: 0;
    opacity: 1;
    transform: translateY(0)
  }

  to {
    transform: translateY(-50px);
    opacity: 0
  }
}
</style>