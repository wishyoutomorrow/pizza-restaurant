<template lang="">
  <div class="card">
    <img :src="getImageUrl(product.image)" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ product.name }}</h3>
      </div>
      <!-- /.card-heading -->
      <div class="card-info">
        <div class="ingredients">
          {{ product.description }}
        </div>
      </div>
      <!-- /.card-info -->
      <div class="card-buttons">
        <add-to-cart-button :product="product"></add-to-cart-button>
        <strong class="card-price-bold"> {{ product.price }} ₽</strong>
      </div>
    </div>
    <!-- /.card-text -->
  </div>
  <!-- /.card -->
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang=""></style>
