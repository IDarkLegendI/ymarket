<template>
  <div class="catalog main">
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
</template>

<script setup lang="ts">

</script>

<style scoped>
.main {
  min-height: unset;
  height: calc(100% - 300px);
  animation-name: animMain;
  animation-duration: .2s;
  visibility: visible;
  background-color: red;
}

.catalog {
  position: fixed;
  z-index: 1002;
  animation-duration: .1s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-name: _1BoW-;
  visibility: hidden;
  width: 100%;
  background: #fff;
  height: 0;
  min-height: 0;
  overflow-y: scroll;
  transition: min-height .1s;
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