<template lang="">
  <section class="restaurants">
    <div class="section-heading">
      <h2 class="section-title">Рестораны</h2>
      <label class="search">
        <input
          type="text"
          class="input input-search"
          placeholder="Поиск блюд и ресторанов"
					v-model="currentSearchValue"
					@blur="clearValue"
        />
      </label>
    </div>
    <div class="cards cards-restaurants">
      <restaurant-item
        v-for="(restaurant, index) in sortedRestaurants"
        :restaurant="restaurant"
				:key="index"
      ></restaurant-item>
    </div>
    <!-- /.cards -->
  </section>
</template>
<script>
import RestaurantItem from "./RestaurantItem";
import { mapGetters } from "vuex";
export default {
	components: {
		RestaurantItem,
	},

	data() {
		return {
			currentSearchValue: "",
		};
	},

	computed: {
		...mapGetters({
			restaurants: "getRestaurants"
		}),
		...mapGetters("restaurants", {
			searchValue: "getSearchValue",
			sortedRestaurants: "getSortedRestaurants"
		})
	},

	methods: {
		sortRestaurants() {
			this.$store.dispatch("restaurants/sortRestaurants", restaurants)
		},
		clearValue() {
			this.currentSearchValue = "";
		}

	},

	watch: {
		currentSearchValue(newValue) {
			this.$store.dispatch('restaurants/changeSearchValue', newValue)
			this.sortRestaurants()
		}
	},

	mounted() {
		this.sortRestaurants()
	}

};
</script>
<style lang="scss"></style>
