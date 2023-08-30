<script setup lang="ts">

import AuthInput from "./authInput.vue";
import Button from "../buttons/button.vue";
import {inject, ref} from "vue";
import {useStore} from "../../store";
const regToggle = inject('regToggle')
const authToggle = inject('authToggle')
const login = ref("")
const password = ref("")
const store = useStore()
</script>

<template>
<div class="auth-main">
  <div class="logo"></div>
  <div class="header">
    <h1>Авторизация</h1>
  </div>
  <div class="inputs">
    <auth-input v-model="login" placeText="Логин"></auth-input>
    <auth-input v-model="password" placeText="Пароль"></auth-input>
  </div>
  <div class="buttons">
    <Button @click="store.login(login, password)" msg="Войти"></Button>
    <Button msg="Регистрация" hoverClass="buttonAuth" @click="regToggle = true; authToggle = false"></Button>
  </div>
</div>
</template>

<style scoped>
@import 'styleModal.css';
</style>