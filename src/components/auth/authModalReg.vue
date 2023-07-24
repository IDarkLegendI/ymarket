<script setup lang="ts">

import AuthInput from "./authInput.vue";
import Button from "../buttons/button.vue";
import {inject} from "vue";
const regToggle = inject('regToggle')
const authToggle = inject('authToggle')
</script>

<template>
  <div class="auth-main">
    <div class="logo"></div>
    <div class="header">
      <h1>Регистрация</h1>
    </div>
    <div class="inputs">
      <auth-input placeText="Логин"></auth-input>
      <auth-input placeText="Пароль"></auth-input>
      <auth-input placeText="Повтор пароля"></auth-input>
    </div>
    <div class="buttons">
      <Button msg="Зарегистрироваться"></Button>
      <Button msg="Вход" hoverClass="buttonAuth" @click="regToggle = false; authToggle = true"></Button>
    </div>
  </div>
</template>

<style scoped>
@import 'styleModal.css';
</style>