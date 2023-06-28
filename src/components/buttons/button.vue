<template>
  <button>
    <div style="display: flex; align-items: center">
      <slot></slot>
      <div class="msgText">{{ msg }}</div>
    </div>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  msg: string,
}>()
</script>

<style scoped>
* {
  font-weight: 700;
}
button{
  border-radius: 7px;
  padding: 1vh 1vw;
  cursor: pointer;
  transition: all .2s;
  position: relative;
  flex-shrink: 0;
  outline: none;
  color: #212121;
  background-color: #fc0;
  font-size: 16px;
  line-height: 20px;
  height: auto;
  border: 2px solid #fc0;
  font-weight: 500;
}
button:hover{
  background-color: #dbaf02
}
button:active{
  padding: .8vh .8vw;
}
</style>