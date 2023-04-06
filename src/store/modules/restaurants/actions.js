export default {
	sortRestaurants({ commit }, restaurants) {
		commit("sortRestaurants", restaurants);
	},

	changeSearchValue({ commit }, value) {
		commit("changeSearchValue", value)
	}
}