<script setup lang="ts">

import AuthInput from "./authInput.vue";
import Button from "../buttons/button.vue";
import {inject, ref} from "vue";
import {useStore} from "../../store";
const regToggle = inject('regToggle')
const authToggle = inject('authToggle')
const firstName = ref("")
const lastName = ref("")
const login = ref("")
const password = ref("")

const store = useStore()
</script>

<template>
  <div class="auth-main">
    <div class="logo"></div>
    <div class="header">
      <h1>Регистрация</h1>
    </div>
    <div class="inputs">
      <auth-input v-model="firstName" placeText="Ваше имя"></auth-input>
      <auth-input v-model="lastName" placeText="Ваша фамилия"></auth-input>
      <auth-input v-model="login" placeText="Логин"></auth-input>
      <auth-input v-model="password" placeText="Пароль"></auth-input>
      <auth-input placeText="Повтор пароля"></auth-input>
    </div>
    <div class="buttons">
      <Button @click="store.registration(firstName, lastName, login, password)" msg="Зарегистрироваться"></Button>
      <Button msg="Вход" hoverClass="buttonAuth" @click="regToggle = false; authToggle = true"></Button>
    </div>
  </div>
</template>

<style scoped>
@import 'styleModal.css';
.buttons {
  flex-direction: column;
  gap: 10px;
}
</style>