<template lang="">
  <router-link
    :to="{
      name: 'restaurant',
      params: {
        id: restaurant.products,
      },
    }"
    tag="a"
    class="card card-restaurant"
  >
    <img :src="getImageUrl(restaurant.image)" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ restaurant.name }}</h3>
        <span class="card-tag tag">{{ restaurant.time_of_delivery }} мин</span>
      </div>
      <!-- /.card-heading -->
      <div class="card-info">
        <div class="rating">{{ restaurant.stars }}</div>
        <div class="price">От {{ restaurant.price }} ₽</div>
        <div class="category">{{ restaurant.kitchen }}</div>
      </div>
      <!-- /.card-info -->
    </div>
    <!-- /.card-text -->
  </router-link>
</template>
<script>
export default {
  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      products: this.$store.state.data[this.restaurant.products],
    };
  },
  methods: {
    getImageUrl(url) {
      return require("@/assets/" + url);
    },
  },
};
</script>
<style lang="scss"></style>
