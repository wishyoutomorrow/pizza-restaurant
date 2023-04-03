<template lang="">
  <section class="restaurants">
    <div class="section-heading">
      <h2 class="section-title">Рестораны</h2>
      <label class="search">
        <input
          type="text"
          class="input input-search"
          placeholder="Поиск блюд и ресторанов"
        />
      </label>
    </div>
    <div class="cards cards-restaurants">
      <restaurant-item
        v-for="restaurant in restaurants"
        :restaurant="restaurant"
      ></restaurant-item>
    </div>
    <!-- /.cards -->
  </section>
</template>
<script>
import RestaurantItem from "./RestaurantItem";
export default {
  components: {
    RestaurantItem,
  },
  data() {
    return {
      restaurants: this.$store.state.data.restaurants,
    };
  },
};
</script>
<style lang="scss"></style>
