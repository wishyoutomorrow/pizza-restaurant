<template lang="">
  <div class="modal modal-cart">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button @click="closePopup" class="close">&times;</button>
      </div>
      <!-- /.modal-header -->
      <div class="modal-body">
        <cart-product
          v-for="product in products"
          :product="product"
        ></cart-product>
      </div>
      <!-- /.modal-body -->
      <div class="modal-footer">
        <span class="modal-pricetag">{{ checkSum }} ₽</span>
        <div class="footer-buttons">
          <button class="button button-primary">Оформить заказ</button>
          <button class="button clear-cart" @click="closePopup">Отмена</button>
        </div>
      </div>
      <!-- /.modal-footer -->
    </div>
    <!-- /.modal-dialog -->
  </div>
</template>
<script>
import CartProduct from "./CartProduct.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    CartProduct,
  },
  methods: {
    closePopup() {
      this.$store.dispatch("popups/toggleCartPopup", false);
    },
  },
  computed: {
    ...mapGetters("cart", {
      products: "getProducts",
      checkSum: "getCheckSum",
    }),
  },
};
</script>
<style lang="scss"></style>
