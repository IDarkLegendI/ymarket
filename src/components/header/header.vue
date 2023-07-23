<template>
  <header class="_3CWC9">
    <div style="align-items: center; box-sizing: border-box; background: #fff;">
      <div style="width: calc(100% - 80px); min-width: 1024px; padding: 0 25px; margin: 0 auto; max-width: 1456px;
                  display: flex; height: 72px; background: #fff;">
        <div class="divLogo">
          <div class="logo"></div>
        </div>
        <div class="part">
          <ButtonPopUp msg="Каталог" class="ButtonPopUp"></ButtonPopUp>
          <SearchHeader class="SearchHeader"></SearchHeader>
          <Nav></Nav>
        </div>
      </div>
    </div>
  </header>
  <Tabs></Tabs>
  <div class="overlay" @click="inputFocusDestroy"></div>
</template>

<script setup lang="ts">
import SearchHeader from "./searchHeader.vue";
import ButtonPopUp from "../buttons/buttonPopUp.vue";
import Nav from "./nav/nav.vue";
import Button from "../buttons/button.vue";
import Tabs from "./tabs/tabs.vue";
const inputFocusDestroy = () => {
  document.body.classList.remove('searchYes', 'userMenuYes')
}
</script>

<style scoped>
._3CWC9 {
  position: sticky;
  z-index: 950;
  top: 0;
  background-color: #454545;
}

.divLogo {
  align-items: center;
  display: flex;
  margin-right: 32px;
  height: auto;
}
.logo {
  cursor: pointer;
  vertical-align: middle;
  white-space: nowrap;
  width: 167px;
  height: 100%;
  position: relative;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNjciIGhlaWdodD0iMzIiPjxwYXRoIGQ9Ik03OC4xIDI3aDMuM0w4NiA5LjlWMjdoMy43VjQuNGgtNS4xTDgwIDIxIDc1LjQgNC40aC01LjJWMjdoMy4yVjkuOUw3OC4xIDI3em0yNy4xLTExLjJjMC00LTItNS41LTYuMS01LjUtMi42IDAtNC42LjgtNS44IDEuNVYxNWMxLS44IDMuMy0xLjYgNS4zLTEuNiAxLjkgMCAyLjcuNyAyLjcgMi40di45aC0uNmMtNS45IDAtOC42IDItOC42IDUuM3MyIDUuMiA1IDUuMmMyLjMgMCAzLjMtLjcgNC0xLjVoLjJjMCAuNC4yIDEgLjMgMS4zaDMuOGMtLjEtMS4zLS4yLTIuNy0uMi00di03LjJ6bS0zLjkgNy4zYy0uNS43LTEuNCAxLjMtMi44IDEuMy0xLjYgMC0yLjQtMS0yLjQtMi40IDAtMS45IDEuMy0yLjYgNC43LTIuNmguNnYzLjd6bTEwLjYtMTIuNWgtMy42djIxLjFoMy45di02LjZjMSAxLjUgMi40IDIuMiA0LjEgMi4yIDMuOCAwIDYuNC0zIDYuNC04LjVzLTIuNS04LjUtNi4yLTguNWMtMS44IDAtMy4zLjgtNC40IDIuNGwtLjItMi4xem0zLjMgMTMuN2MtMiAwLTMuMS0xLjctMy4xLTUuNCAwLTMuOCAxLjEtNS41IDMuMy01LjUgMi4xIDAgMy4yIDEuNyAzLjIgNS40IDAgMy44LTEuMSA1LjUtMy40IDUuNXptMTkuNiAyLjdoNC40bC02LjItOC44IDUuNS03LjZoLTMuOWwtNS41IDcuNnYtNy42aC0zLjlWMjdoMy45di04bDUuNyA4em0xNy40LTEuMXYtMy4yYy0xLjIuOC0zLjIgMS41LTUuMSAxLjUtMi44IDAtMy45LTEuMy00LjEtNC4xaDkuM1YxOGMwLTUuNy0yLjUtNy44LTYuNC03LjgtNC43IDAtNyAzLjYtNyA4LjYgMCA1LjcgMi44IDguNSA3LjcgOC41IDIuNyAwIDQuNS0uNiA1LjYtMS40em0tNi4zLTEyLjVjMS45IDAgMi41IDEuNiAyLjUgMy42di4zSDE0M2MuMS0yLjYgMS4xLTMuOSAyLjktMy45em0yMC4zLjN2LTMuMWgtMTN2My4xaDQuNlYyN2gzLjlWMTMuN2g0LjV6Ii8+PHBhdGggZD0iTTQ3LjEgMzFjOC4zIDAgMTUtNi43IDE1LTE1cy02LjctMTUtMTUtMTUtMTUgNi43LTE1IDE1Yy0uMSA4LjMgNi43IDE1IDE1IDE1eiIgZmlsbD0iI0ZFRDQyQiIvPjxjaXJjbGUgY3g9IjE1IiBjeT0iMTYiIHI9IjE1IiBmaWxsPSIjRkMzRjFEIi8+PHBhdGggZD0iTTE3LjIgOS40aC0xLjVjLTIuNiAwLTMuOSAxLjMtMy45IDMuMyAwIDIuMi45IDMuMyAyLjggNC42bDEuNSAxLjEtNC4zIDYuN0g4LjNsNC4xLTYuMWMtMi40LTEuNy0zLjctMy4zLTMuNy02LjEgMC0zLjUgMi40LTUuOSA3LTUuOWg0LjZ2MThoLTNWOS40eiIgZmlsbD0iI0ZGRiIvPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZD0iTTQ3LjEgMzFjOC4zIDAgMTUtNi43IDE1LTE1cy02LjctMTUtMTUtMTUtMTUgNi43LTE1IDE1Yy0uMSA4LjMgNi43IDE1IDE1IDE1eiIvPjwvY2xpcFBhdGg+PHBhdGggZD0iTTM5LjcgOS4yTDI2LjUgMjYuNWwzLjUgNCA5LjgtMTMtMSA3LjEgNS41IDEuOUw1MSAxNS44Yy0uMyAyLS44IDYuNiAzLjYgOCA2LjkgMi4xIDEyLjktMTAuMyAxNS43LTE2LjZsLTQtMi4xYy0zLjEgNi41LTcuOSAxMy43LTkuOCAxMy4yLTEuOS0uNS0uMi02LjYuOS0xMC41di0uMWwtNi4xLTIuMUw0NCAxNy41bDEtNi41LTUuMy0xLjh6IiBjbGlwLXBhdGg9InVybCgjYSkiLz48L3N2Zz4=);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 167px 32px;
  display: inline-block
}
.part{
  display: flex;
  width: 100%;
}

.ButtonPopUp
{
  display: flex;
  align-items: center;
  margin-right: 12px;
}
.SearchHeader
{
  display: flex;
  position: relative;
  flex-grow: 1;
}
.searchYes .overlay{
  transition: all .2s;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .2);
  top: 0;
  left: 0;
  z-index: 1;
  cursor: pointer;
}
.userMenuYes .overlay{
  transition: all .2s;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .4);
  top: 0;
  left: 0;
  z-index: 2;
  //cursor: pointer;
}

</style>