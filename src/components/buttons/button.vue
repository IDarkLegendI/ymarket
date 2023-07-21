<template>
  <button :class="props.hoverClass">
    <div style="display: flex; align-items: center">
      <slot></slot>
      <div class="msgText">{{ props.msg }}</div>
    </div>
  </button>
</template>

<script setup lang="ts">
interface iProps {
  msg: string,
  hoverClass: string
}

const props = <iProps>defineProps({msg: String, hoverClass: String})
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
  background-color: #e8ba00;
  transform: scale(.97);
}

/*noinspection CssUnusedSymbol*/
.buttonFind {
  border: none;
}
/*noinspection CssUnusedSymbol*/
.buttonFind:hover {
  background-color: #fae436;
  border: none;
}

.buttonAuth {
  border: none;
}
</style>