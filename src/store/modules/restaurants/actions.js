export default {
	sortRestaurants({ commit }, rootState) {
		commit("sortRestaurants", rootState);
	},

	changeSearchValue({ commit }, value) {
		commit("changeSearchValue", value)
	}
}