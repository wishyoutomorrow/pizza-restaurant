const state = {
  auth_popup: false,
  cart_popup: false,
};
const getters = {
  isAuthPopupVisible: (state) => state.auth_popup,
  isCartPopupVisible: (state) => state.cart_popup,
};
const mutations = {
  changeAuthPopup(state, value) {
    state.auth_popup = value;
  },
  changeCartPopup(state, value) {
    state.cart_popup = value;
  },
};
const actions = {
  toggleAuthPopup({ commit }, value) {
    commit("changeAuthPopup", value);
  },
  toggleCartPopup({ commit }, value) {
    commit("changeCartPopup", value);
  },
};
// const modules = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  // modules,
};
