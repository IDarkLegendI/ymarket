<script setup lang="ts">
const props = defineProps({
  placeText: String,
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])

const updateValue = (event: any) => {
  emit('update:modelValue', event.target.value)
}

</script>

<template>
  <div>
    <input type="text" :value="modelValue" @input="updateValue" :placeholder="props.placeText">
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
  height: 30px;
  border-radius: 5px;
  border: 1px solid #000000;
  padding: 2px 10px;
  color: #676767;
  transition: all .2s;
  font-size: 18px;
}

input:focus {
  color: black;
  width: 67%;
  height: 32px;
}
</style>