<template>
  <div style="display: flex; flex-direction: column; align-items: center; margin: 0 .7vw; cursor: pointer;">
    <div style="position: relative">
      <slot></slot>
      <div class="notify" v-if="notify.toggle">
        {{notify.value}}
      </div>
    </div>
    <div class="text">
      {{props.text}}
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from "vue";
interface iProps {
  text: string,
  notify: { toggle: boolean,  value: number|null}
}
const props = <iProps>defineProps({text: String, notify: Object})
const notify = reactive(props.notify)
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