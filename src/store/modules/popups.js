export default {
	namespaced: true,

	state: {
		auth_popup: false,
		cart_popup: false,
	},

	getters: {
		isAuthPopupVisible: (state) => state.auth_popup,
		isCartPopupVisible: (state) => state.cart_popup,
	},

	mutations: {
		changeAuthPopup(state, value) {
			state.auth_popup = value;
		},

		changeCartPopup(state, value) {
			state.cart_popup = value;
		},
	},

	actions: {
		toggleAuthPopup({ commit }, value) {
			commit("changeAuthPopup", value);
		},

		toggleCartPopup({ commit }, value) {
			commit("changeCartPopup", value);
		},
	}
};
