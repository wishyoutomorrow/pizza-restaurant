import { createStore } from "vuex";
import { db } from "@/db/db.json";
import cart from "./modules/cart/cart";
import popups from "./modules/popups";

export default createStore({
	state: {
		data: {
			restaurants: db.partners,
			"food-band.json": db["food-band"],
			"gusi-lebedi.json": db["gusi-lebedi"],
			"palki-skalki.json": db["palki-skalki"],
			"pizza-burger.json": db["pizza-burger"],
			"pizza-plus.json": db["pizza-plus"],
			"tanuki.json": db["tanuki"],
		},
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {
		cart,
		popups,
	},
});
