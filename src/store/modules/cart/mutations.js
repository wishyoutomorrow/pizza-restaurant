import helpers from "../helpers/helpers";

export default {
	addProduct(state, product) {
		if (typeof product.count == "undefined") {
			product.count = 0;
		}

		if (product == state.products.find((item) => item == product)) {
			helpers.incrementProduct(state, product);
			return;
		}

		helpers.incrementProduct(state, product);
		state.products.push(product);
	},


	incrementProduct(state, product) {
		helpers.incrementProduct(state, product);
	},


	decrementProduct(state, product) {
		product.count == 1 ? helpers.removeProduct(state.products, product) : null;
		helpers.decrementProduct(state, product);
	},


	removeProduct(state, product) {
		helpers.removeProduct(state.products, product);
	},
}