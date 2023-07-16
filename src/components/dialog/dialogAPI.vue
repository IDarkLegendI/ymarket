<template>
  <div>

  </div>
</template>

<script lang="ts">
import {ref} from "vue";
export default function useDialog() {
  const catalogPopUp = ref(false)
  function buttonToggle()
  {
    catalogPopUp.value = !catalogPopUp.value
  }
  return {
    catalogPopUp,
    buttonToggle
  }
}
</script>

<style scoped>

</style>