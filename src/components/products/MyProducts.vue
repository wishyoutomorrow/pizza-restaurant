<template lang="">
  <section class="menu">
    <div class="section-heading">
      <h2 class="section-title restaurant-title">{{ restaurant.name }}</h2>
      <div class="card-info">
        <div class="rating">{{ restaurant.stars }}</div>
        <div class="price">От {{ restaurant.price }} ₽</div>
        <div class="category">{{ restaurant.kitchen }}</div>
      </div>
      <!-- /.card-info -->
    </div>
    <div class="cards cards-menu">
      <my-product v-for="product in products" :product="product"></my-product>
    </div>
    <!-- /.cards -->
  </section>
</template>
<script>
import MyProduct from "./MyProduct.vue";
export default {
  components: {
    MyProduct,
  },
  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      products: null,
    };
  },
  created() {
    const products = this.$store.state.data[this.restaurant.products];
    this.products = products;
  },
};
</script>
<style lang=""></style>
