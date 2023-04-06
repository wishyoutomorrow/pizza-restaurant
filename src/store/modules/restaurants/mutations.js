export default {
	sortRestaurants(state, rootState) {
		state.sortedRestaurants = [...rootState.data.restaurants];
		state.sortedRestaurants = state.sortedRestaurants.filter(item => {
			return item.name.toLowerCase().includes(state.searchValue.toLocaleLowerCase());
		})
	},

	changeSearchValue(state, value) {
		state.searchValue = value;
	},
}