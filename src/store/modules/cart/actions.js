export default {
	addProduct({ commit }, product) {
		commit("addProduct", product);
	},
	incProduct({ commit }, product) {
		commit("incrementProduct", product);
	},
	decProduct({ commit }, product) {
		commit("decrementProduct", product);
	},
	removeProduct({ commit }, product) {
		commit("removeProduct", product);
	}
}