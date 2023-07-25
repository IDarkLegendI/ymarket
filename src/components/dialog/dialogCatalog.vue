<template>
  <div class="catalog" style="top: 65px;" :class="{main: props.active}">
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
  <div class="closeButton" v-if="props.active">

  </div>
</template>

<script setup lang="ts">
interface iProps {
  active: boolean
}
const props = <iProps>defineProps({active: Boolean})
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
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 102;
  transition: opacity .25s ease-out,visibility .25s linear;
  background-color: #000;
  opacity: .6;
  visibility: visible;
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