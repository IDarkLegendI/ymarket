<script setup lang="ts">
const props = defineProps({
  placeText: String
})
</script>

<template>
  <div>
    <input type="text" :placeholder="props.placeText">
  </div>
</template>

<style scoped>
div {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 27px;
}
input{
  width: 65%;
  height: 25px;
  border-radius: 5px;
  border: 1px solid #000000;
  padding: 2px 10px;
  color: #676767;
  transition: all .2s;
}

input:focus {
  color: black;
  width: 67%;
  height: 27px;
}
</style>