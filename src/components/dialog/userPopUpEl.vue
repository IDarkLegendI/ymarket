<script setup lang="ts">
const props = defineProps({
  header: String,
  description: String
})
</script>

<template>
  <div class="menu-main">
    <div class="menu-img">
      <slot></slot>
    </div>
    <div class="text">
      <h1>{{ props.header }}</h1>
      <span>{{ props.description }}</span>
    </div>
  </div>
</template>

<style scoped>
.menu-main {
  width: 100%;
  display: flex;
  border-radius: 10px;
  padding: 10px 0;
}

.menu-main:hover {
  background-color: rgba(0, 0, 0, .04);
}

.text {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  padding-left: 15px;
}

.text span{
  color: #727272;
  font-size: 12px;
  margin-top: 3px;
}

.menu-img {
  width: 18%;
  display: flex;
  flex-direction: row-reverse;
}
</style>