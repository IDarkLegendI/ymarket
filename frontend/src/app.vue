<script lang="ts">
import Header from "./components/header/header.vue";
import {onBeforeMount, provide, ref} from "vue";
import DialogCatalog from "./components/dialog/dialogCatalog.vue";
import AuthModal from "./components/auth/authModal.vue";
import AuthModalReg from "./components/auth/authModalReg.vue";
import {useStore} from "./store";
import ProductPageTitle from "./components/product/productPage.vue";
import ProductPage from "./components/product/productPage.vue";
export default {
  components: {
    ProductPage,
    AuthModalReg,
    AuthModal,
    DialogCatalog,
    Header
  },
  setup() {
    const catalog = ref(false)
    const authToggle = ref(false)
    const regToggle = ref(false)
    const store = useStore()
    const toggleCatalog = () => {
      catalog.value = !catalog.value
    }
    provide('authToggle', authToggle)
    provide('regToggle', regToggle)
    provide('catalog', catalog)
    provide('toggleCatalog', toggleCatalog)

    onBeforeMount(() => {
      if(localStorage.getItem('token')) {
        store.checkAuth()
      }
      // else {
      //   console.log('hui')
      // }
    })

    return {
      catalog,
      authToggle,
      regToggle
    }
  },
}
</script>

<template>
  <div style="display: flex; flex-direction: column; min-height: 100%; min-width: 1024px;">
    <Header></Header>
<!--    <div style="position: absolute; background-color: red; height: 50vh; width: 20vw" v-show="catalog">-->

<!--    </div>-->
  </div>
  <DialogCatalog></DialogCatalog>
  <auth-modal v-if="authToggle"></auth-modal>
  <auth-modal-reg v-if="regToggle"></auth-modal-reg>
  <div class="overlayAuth" v-if="authToggle || regToggle" @click="authToggle = false; regToggle = false"></div>
  <ProductPage></ProductPage>
</template>

<style scoped>
.overlayAuth{
  transition: all .2s;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
  top: 0;
  left: 0;
  z-index: 1005;
  cursor: pointer;
}
</style>
