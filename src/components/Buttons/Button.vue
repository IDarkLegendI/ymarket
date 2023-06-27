<template>
  <button :class="buy ? 'buyBtn' : ''">
    <div style="display: flex; align-items: center">
      <slot></slot>
      <div class="msgText">{{ msg }}</div>
    </div>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  msg: string,
  buy?: boolean
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
.buyBtn {
  width: 100%;
  padding: 1vh 0;
}
button:hover{
  background-color: #dbaf02
}
button:active{
  padding: .8vh .8vw;
}
.buyBtn:active{
  width: 80%;
  padding: .8vh 0;
}

.msgText {
  padding-left: 12px;
}
</style>