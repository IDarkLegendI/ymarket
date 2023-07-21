<script setup lang="ts">
const props = defineProps({
  header: String,
  description: String,
  type: String // acc - upper element with user, add - bottom element with user added
})
</script>

<template>
  <div class="menu-main" :class="`menu-${props.type}`">
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
  padding: 9px 0;
  cursor: pointer;
}

.menu-acc{
  padding: 15px 0;
}

.menu-acc h1{
  font-weight: bold;
  font-size: 16px;
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

.text h1{
  font-size: 16px;
}

.text span{
  color: #878787;
  font-size: 12px;
}

.menu-acc .text span{
  font-size: 14px;
  color: #999;
  margin-top: 3px;
}

.menu-img {
  width: 20%;
  display: flex;
  flex-direction: row-reverse;
}

.menu-add {
  padding: 12px 0;
}

.menu-add:hover {
  background-color: white;
}
</style>