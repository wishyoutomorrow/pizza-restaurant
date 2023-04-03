import helpers from "./helpers/helpers";

const state = {
  products: [],
  checkSum: 0,
};
const getters = {
  getCheckSum: (state) => state.checkSum,
  getProducts: (state) => state.products,
};
const mutations = {
  ADD_PRODUCT(state, product) {
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
  INCREMENT_PRODUCT(state, product) {
    helpers.incrementProduct(state, product);
  },
  DECREMENT_PRODUCT(state, product) {
    product.count == 1 ? helpers.removeProduct(state.products, product) : null;
    helpers.decrementProduct(state, product);
  },
  REMOVE_PRODUCT(state, product) {
    helpers.removeProduct(state.products, product);
  },
};
const actions = {};

const modules = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules,
};
