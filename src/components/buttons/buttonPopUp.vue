<template>
  <div style="display: flex">
    <Button :msg="props.msg" :class="catalog ? 'opened' : ''" @click="toggleCatalog()">
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from "./button.vue";
import {inject, ref} from "vue";
interface iProps {
  msg: string,
}
const props = <iProps>defineProps({msg: String})
const catalog = inject('catalog')
const toggleCatalog = inject('toggleCatalog')
</script>

<style scoped>
button {
  padding: 12px 16px 12px 14px;
  height: 44px;
  margin: 0;
}
.lines {
  width: 20px;
  height: 20px;
  padding: 1px 0;
  box-sizing: border-box;
  margin-right: 8px;
}
.line
{
  position: relative;
  display: block;
  width: 18px;
  height: 2px;
  transition: transform .3s,background-color .3s;
  background-color: #000;
  margin: 3px 0;
}
.line:not(:first-child) {
  margin-top: 3px;
}
.opened .line:first-child {
  transform: translateY(5px) translateZ(0) rotate(45deg);
}

.opened .line:nth-child(2) {
  transition: opacity .3s;
  opacity: 0;
}

.opened .line:nth-child(3) {
  transform: translateY(-5px) translateZ(0) rotate(-45deg);
}
</style>