<template>
  <!-- BEGIN [product/productPageTitle] -->
  <div>
    <!--  [Хлебные крошки] --- [Сравнить] [В избранное]  -->
    <div style="display: block">
      <div style="display: flex">
        <div class="breadCrumbs">  <!--    fDCYe    -->
          <product-breadcrumbs></product-breadcrumbs>
        </div>
        <div class="productActions">
          <div class="buttonAction">
              <div class="compare" style="background-position-x: left;">
                <div></div>
                <span>Сравнить</span>
              </div>
          </div>
          <div class="buttonAction">
            <button class="wishlist">
              <div class="wishlistImg">
                <span class="wishlistImgSpan">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.58356 0.625916C2.07975 0.625916 0.0500031 2.65565 0.0500031 5.15946C0.0500031 8.60235 2.59794 11.9517 7.58626 15.2497L7.99988 15.5232L8.4135 15.2497C13.402 11.9517 15.95 8.60235 15.95 5.15946C15.95 2.65564 13.9203 0.625916 11.4165 0.625916C10.204 0.625916 9.06034 1.07843 8.00001 1.95835C6.93967 1.07843 5.79599 0.625916 4.58356 0.625916Z">
                    </path>
                    <path d="M4.58356 0.625916C2.07975 0.625916 0.0500031 2.65565 0.0500031 5.15946C0.0500031 8.60235 2.59794 11.9517 7.58626 15.2497L7.99988 15.5232L8.4135 15.2497C13.402 11.9517 15.95 8.60235 15.95 5.15946C15.95 2.65564 13.9203 0.625916 11.4165 0.625916C10.204 0.625916 9.06034 1.07843 8.00001 1.95835C6.93967 1.07843 5.79599 0.625916 4.58356 0.625916ZM1.55 5.15946C1.55 3.48408 2.90818 2.12592 4.58356 2.12592C5.57686 2.12592 6.53192 2.57189 7.47198 3.50387L8.00002 4.02738L8.52806 3.50387C9.4681 2.57189 10.4231 2.12592 11.4165 2.12592C13.0918 2.12592 14.45 3.48407 14.45 5.15946C14.45 7.9033 12.3326 10.7699 7.99989 13.7209C3.66728 10.7699 1.55 7.9033 1.55 5.15946Z">
                    </path></svg>
                </span>
              </div>
              <span style="margin-left: 12px;">В избранное</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- END [product/productPageTitle] -->
</template>

<script setup lang="ts">

import ProductBreadcrumbs from "./productBreadcrumbs.vue";
</script>

<style scoped>
.breadCrumbs {
  flex: 1 0 auto;
  width: calc(100% - 360px);
}

.productActions {
  flex: 1 0 344px;
  display: flex;
  justify-content: end;
  align-items: flex-start;
  padding-top: 4px;
}

.buttonAction {
  display: inline-block;
  margin-left: 24px;
}

.compare {
  padding-left: 24px;
  width: auto;
  height: inherit;
  font-style: normal;
  font-stretch: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  font-feature-settings: "pnum" on,"lnum" on;
  background-size: 18px;
  background: url(data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpsdW1pbm9zaXR5Ij48cGF0aCBkPSJNLjc1IDkuNWE4Ljc1MyA4Ljc1MyAwIDAwNS41ODkgOC4xNjFBOC43NSA4Ljc1IDAgMTAxNy42NjIgNi4zMzggOC43NSA4Ljc1IDAgMDAuNzUgOS41eiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMjIyIiBkPSJNMTYgOS41YTYuNSA2LjUgMCAwMS03Ljg1OCA2LjM1OCA2LjUgNi41IDAgMDE3LjcxNi03LjcxNmMuMDkzLjQzOC4xNDIuODkyLjE0MiAxLjM1OHptLTEuMDEzLTMuNDg2YTguNSA4LjUgMCAwMC04Ljk3MyA4Ljk3MyA2LjUgNi41IDAgMTE4Ljk3My04Ljk3M3ptMi40OC41MThBOC41IDguNSAwIDEwNi41MzMgMTcuNDY3IDguNSA4LjUgMCAxMDE3LjQ2NyA2LjUzM3ptLjUyIDIuNDgxYTguNSA4LjUgMCAwMS04Ljk3MyA4Ljk3MyA2LjUgNi41IDAgMTA4Ljk3My04Ljk3M3oiLz48cGF0aCBkPSJNOS40OTkgMThhOC41IDguNSAwIDAwOC40ODYtOC45ODcgNi41IDYuNSAwIDExLTguOTczIDguOTczYy4xNi4wMS4zMjMuMDE0LjQ4Ny4wMTR6bTUuNDg4LTExLjk4NmE4LjUgOC41IDAgMDAtOC45NzMgOC45NzMgNi41IDYuNSAwIDExOC45NzMtOC45NzN6Ii8+PHBhdGggZmlsbD0iI0Q5RDlEOSIgZD0iTTkuNSAxNmE2LjUgNi41IDAgMDA2LjM1OC03Ljg1OCA2LjUgNi41IDAgMDAtNy43MTYgNy43MTZBNi41MyA2LjUzIDAgMDA5LjUgMTZ6Ii8+PC9nPjwvc3ZnPg==) no-repeat 50%;
  position: relative;
  cursor: pointer;
}

.compare span {
  display: inline-block;
  white-space: nowrap;
  color: #21201f;
  vertical-align: top;
}

.compare div {
  display: inherit;
  height: 0;
  width: 0;
  position: absolute;
}

.wishlist {
  white-space: nowrap;
  font-style: normal;
  font-stretch: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  font-feature-settings: "pnum" on,"lnum" on;
  color: #21201f;
  display: flex;
  cursor: pointer;
  align-items: center;
  outline: none;
  outline-offset: 2px;
  width: auto;
  margin: 0;
  padding: 0;
  border: none;
  text-rendering: inherit;
  letter-spacing: inherit;
  word-spacing: inherit;
  text-transform: inherit;
  text-indent: inherit;
  text-shadow: inherit;
  text-align: inherit;
  overflow: visible;
  background: transparent;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
}

.wishlistImg {
  display: flex;
  align-items: center;
  color: #9e9b98;
}

.wishlistImgSpan {
  display: flex;
  align-items: center;
  color: #222;
  transition: color .25s;
}

.wishlistImgSpan svg {
  width: 16px;
  height: 16px;
  display: block;
  animation-timing-function: ease-out;
  animation-duration: .5s;
  animation-fill-mode: both;
  transform: scale(1);
  backface-visibility: hidden;
  transition: stroke .25s,fill .25s;
}
</style>