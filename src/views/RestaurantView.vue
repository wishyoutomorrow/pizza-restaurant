<template lang="">
  <div>
    <my-header></my-header>
    <main class="main">
      <div class="container">
        <my-products :restaurant="restaurant"></my-products>
      </div>
      <!-- /.container -->
    </main>
    <my-footer></my-footer>
    <auth-popup v-if="isAuthPopupVisible"></auth-popup>
    <cart-popup v-if="isCartPopupVisible"></cart-popup>
  </div>
</template>
<script>
import MyHeader from "@/components/MyHeader.vue";
import MyProducts from "@/components/products/MyProducts.vue";
import MyFooter from "@/components/MyFooter.vue";
import AuthPopup from "@/popups/AuthPopup.vue";
import CartPopup from "@/popups/CartPopup.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    MyHeader,
    MyProducts,
    MyFooter,
    AuthPopup,
    CartPopup,
  },
  data() {
    return {
      restaurant: null,
    };
  },
  created() {
    const restaurant = this.$store.state.data.restaurants.find(
      (restaurant) => restaurant.products === this.$route.params.id
    );
    this.restaurant = restaurant;
  },
  computed: {
    ...mapGetters("popups", ["isAuthPopupVisible", "isCartPopupVisible"]),
  },
};
</script>
<style lang=""></style>
