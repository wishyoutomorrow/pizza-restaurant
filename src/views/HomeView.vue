<template lang="">
  <div>
    <my-header></my-header>
    <main class="main">
      <div class="container">
        <promo-container></promo-container>
        <restaurants-container></restaurants-container>
      </div>
    </main>
    <my-footer></my-footer>
    <auth-popup v-if="isAuthPopupVisible"></auth-popup>
    <cart-popup v-if="isCartPopupVisible"></cart-popup>
  </div>
</template>
<script>
import MyHeader from "@/components/MyHeader.vue";
import PromoContainer from "@/components/promo/PromoContainer.vue";
import RestaurantsContainer from "@/components/restaurants/RestaurantsContainer.vue";
import MyFooter from "@/components/MyFooter.vue";
import AuthPopup from "@/popups/AuthPopup.vue";
import CartPopup from "@/popups/CartPopup.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    MyHeader,
    PromoContainer,
    RestaurantsContainer,
    MyFooter,
    AuthPopup,
    CartPopup,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("popups", ["isAuthPopupVisible", "isCartPopupVisible"]),
  },
};
</script>
<style lang=""></style>
