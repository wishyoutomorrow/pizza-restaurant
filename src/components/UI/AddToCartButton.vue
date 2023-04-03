<template lang="">
  <button
    class="button button-primary button-add-cart"
    @click="addProduct(product)"
  >
    <span class="button-card-text">В корзину</span>
    <span class="button-cart-svg"></span>
  </button>
</template>
<script>
export default {
  name: "AddToCartButton",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addProduct(product) {
      this.$store.commit("cart/ADD_PRODUCT", product);
    },
  },
};
</script>
<style lang=""></style>
