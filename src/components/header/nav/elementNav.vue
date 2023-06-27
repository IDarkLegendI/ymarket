<template>
  <div style="display: flex; flex-direction: column; align-items: center; margin: 0 .7vw; cursor: pointer">
    <slot></slot>
    <div class="text">
      {{text}}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string,
}>()
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
</style>