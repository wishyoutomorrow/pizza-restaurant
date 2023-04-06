import { createStore } from "vuex";
import database from "@/db/db.json";
import cart from "./modules/cart/cart";
import restaurants from "./modules/restaurants/restaurants";
import popups from "./modules/popups";

export default createStore({
	state: {
		data: {
			restaurants: database.db.partners,
			"food-band.json": database.db["food-band"],
			"gusi-lebedi.json": database.db["gusi-lebedi"],
			"palki-skalki.json": database.db["palki-skalki"],
			"pizza-burger.json": database.db["pizza-burger"],
			"pizza-plus.json": database.db["pizza-plus"],
			"tanuki.json": database.db["tanuki"],
		},
	},

	getters: {
		getRestaurants: state => state.data.restaurants
	},

	mutations: {
	},

	actions: {
	},

	modules: {
		cart,
		restaurants,
		popups,
	},
});
