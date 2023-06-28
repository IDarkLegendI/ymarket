<template>
  <div style="display: flex">
    <Button :msg="msg">
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
defineProps<{
  msg: string,
}>()
</script>

<style scoped>
button {
  padding: 12px 16px 12px 14px;
  height: 44px;
  margin: 0;
}
.lines {
  width: 1vw;
  height: 2vh;
  padding: 1px 0;
  box-sizing: border-box;
  margin-right: .8vw;
}
.line
{
  position: relative;
  display: block;
  width: 100%;
  height: .2vh;
  transition: transform .3s,background-color .3s;
  background-color: #000;
  margin: 3px 0;
}
</style>