<template>
  <div class="mainTabs">
    <div>
      <nav class="navTabs">
        <div style="margin-right: 32px;">
          <button class="locationButton">
            <div class="locationIcon">
              <svg title="Регион" data-tid="b41383dc a00ccc24" data-tid-prop="a00ccc24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22.0361C6.98081 16.9804 4.47122 12.7992 4.47122 9.49265C4.47122 5.33463 7.84197 1.96388 12 1.96388C16.158 1.96388 19.5288 5.33463 19.5288 9.49265C19.5288 12.7992 17.0192 16.9804 12 22.0361ZM6.27122 9.49265C6.27122 11.9434 8.14899 15.3046 12 19.4407C15.851 15.3046 17.7288 11.9434 17.7288 9.49265C17.7288 6.32874 15.1639 3.76388 12 3.76388C8.83608 3.76388 6.27122 6.32874 6.27122 9.49265ZM8.39999 9.49265C8.39999 7.50443 10.0118 5.89265 12 5.89265C13.9882 5.89265 15.6 7.50443 15.6 9.49265C15.6 11.4809 13.9882 13.0927 12 13.0927C10.0118 13.0927 8.39999 11.4809 8.39999 9.49265ZM12 7.69265C11.0059 7.69265 10.2 8.49854 10.2 9.49265C10.2 10.4868 11.0059 11.2927 12 11.2927C12.9941 11.2927 13.8 10.4868 13.8 9.49265C13.8 8.49854 12.9941 7.69265 12 7.69265Z"></path></svg>
            </div>
            <div class="locationText">
              Санкт-Петербург
            </div>
          </button>
        </div>
        <ul class="tab">
<!--          <li-tab link="/special/leto2023" class="sale" background="//avatars.mds.yandex.net/get-marketcms/475644/img-5dde2433-87d8-4132-b66a-48ee442d2398.gif/orig">Распродажа</li-tab>-->
          <li-tab link="/special/leto2023" class="sale" :background="{toggle: true, url: '//avatars.mds.yandex.net/get-marketcms/475644/img-5dde2433-87d8-4132-b66a-48ee442d2398.gif/orig'}">Распродажа</li-tab>
          <li-tab link="/special/iherb/">iHerb</li-tab>
          <li-tab link="">Алиса</li-tab>
          <li-tab link="">ИКЕА</li-tab>
          <li-tab link="">Маркет 15</li-tab>
          <li-tab link="">Универмаг</li-tab>
          <li-tab link="">Продукты</li-tab>
          <li-tab link="">Дом</li-tab>
          <li-tab link="">Одежда</li-tab>
          <li-tab link="">Детям</li-tab>
          <li-tab link="">Красота</li-tab>
        </ul>
        <ul class="tab secondTab">
          <li-tab link="">Покупайте как юрлицо</li-tab>
          <li-tab link="">Продавайте на Маркете</li-tab>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import LiTab from "./liTab.vue";
</script>

<style scoped>
.locationButton {
  height: 48px;
  display: flex;
  align-items: center;
  width: auto;
  margin: 0;
  padding: 0;
  border: none;
  font: inherit;
  line-height: inherit;
  text-rendering: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;
  text-transform: inherit;
  text-indent: inherit;
  text-shadow: inherit;
  text-align: inherit;
  color: inherit;
  overflow: visible;
  cursor: pointer;
  background: transparent;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
}
.locationIcon {
  flex: none;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -2px;
  margin-right: 8px;
  position: relative;
  top: -2px;
}
.locationText {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 20px;
  transition: color .3s;
  white-space: nowrap;
  width: 140px;
  position: relative;
  top: -2px;
  font-size: 12.8px;
}
ul {
  list-style: none;
}

body, li, ol, td, th, ul {
  padding: 0;
}
.mainTabs {
  position: relative;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,.06);
  margin-top: -10px;
  margin-bottom: 18px;
  z-index: 0;
}

@media (min-width: 1200px)
.navTabs {
  width: calc(100% - 80px);
  padding-left: 0;
  padding-right: 0;
}

.navTabs {
  font-size: 14px;
  background: #fff;
  z-index: 2;
  display: flex;
  flex-direction: row;
  height: 46px;
  width: 100%;
  min-width: 1024px;
  padding: 0 25px;
  margin: 0 auto;
  max-width: 1456px;
}

.tab {
  display: flex; flex-wrap: wrap;
}

.secondTab {
  margin-left: 10px;
  margin-right: -12px;
  flex-shrink: 0;
}
</style>