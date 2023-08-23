<template>
  <div style="display: flex; flex-direction: column; align-items: center; margin: 0 .7vw; cursor: pointer;">
    <div style="position: relative">
      <slot></slot>
      <span class="notify" v-if="notify.toggle" :class="`notify-${notify.size}`">
        {{notify.value}}
      </span>
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
  notify: { toggle: boolean,  value: number, size: 's'|'m'|'d'} // s - small(10px), m - medium(12px), d - default
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
  font-size: 10px;
  line-height: 14px;
  text-align: center;
  box-sizing: border-box;
  color: white;
}

.notify-d {
  min-width: 18px;
  height: 18px;
  top: -5px;
  left: calc(100% - 15px);
  padding: 0 4px;
}

.notify-m {
  width: 14px;
  height: 14px;
  top: -1px;
  left: 33px;
}

.notify-s {
  width: 12px;
  height: 12px;
  top: -5px;
  left: 50px;
}
</style>