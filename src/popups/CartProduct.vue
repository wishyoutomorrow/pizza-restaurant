<template lang="">
  <div class="food-row">
    <span class="food-name">{{ product.name }}</span>
    <strong class="food-price">{{ product.price }} ₽</strong>
    <div class="food-counter">
      <button class="counter-button" @click="decrement(product)">-</button>
      <span class="counter">{{ product.count }}</span>
      <button class="counter-button" @click="increment(product)">+</button>
    </div>
  </div>
  <!-- /.foods-row -->
</template>
<script>
export default {
	props: {
		product: {
			type: Object,
			requried: true,
		},
	},
	methods: {
		increment(product) {
			this.$store.dispatch("cart/incProduct", product);
		},
		decrement(product) {
			this.$store.dispatch("cart/decProduct", product);
		},
	},
};
</script>
<style lang=""></style>
