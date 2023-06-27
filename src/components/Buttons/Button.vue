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
  background-color: #F5C400;
  border-radius: 5px;
  padding: 1vh 1vw;
  border: none;
  cursor: pointer;
  transition: all .2s;
}
button:hover{
  background-color: #dbaf02
}
button:active{
  padding: .8vh .8vw;
}
</style>