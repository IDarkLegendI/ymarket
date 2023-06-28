<template>
  <div style="display: flex; flex-direction: column; align-items: center; margin: 0 .7vw; cursor: pointer; position: relative">
    <slot></slot>
    <div class="text">
      {{text}}
    </div>
    <div class="notify">
      {{num}}
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

defineProps<{
  text: string,
}>()
const num = ref(5)
</script>

<style scoped>
.text {
  line-height: 0.78vw;
  font-size: 0.63vw;
  transition: color .3s;
  color: #666;
  white-space: nowrap;
  letter-spacing: 0.0125vw;
  font-weight: 400;
}
.notify{
  position: absolute;
  background-color: #ff0000;
  border-radius: 18px;
  border: 2px solid white;
  min-width: 18px;
  height: 18px;
  top: -5px;
  font-size: 10px;
  line-height: 14px;
  left: calc(100% - 15px);
  text-align: center;
  padding: 0 4px;
  box-sizing: border-box;
  color: white;
}
</style>