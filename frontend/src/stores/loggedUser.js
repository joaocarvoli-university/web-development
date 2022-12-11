import Vuex from "vuex";

export const store = new Vuex.Store({
  state: {
    authenticated: false,
    role: "",
    cart: [],
    cartCleaned: [],
    cartToBeAdded: [],
    cartId: Number,
  },
  mutations: {
    setAuthentication(state) {
      state.authenticated = !state.authenticated;
    },
    setAuthorization(state, role) {
      state.role = role;
    },
    loadCart(state, cartItems) {
      state.cart = cartItems;
    },
    removeCart(state) {
      state.cart = state.cartCleaned;
    },
    putOnQueue(state, cartItem) {
      state.cartToBeAdded = state.cartToBeAdded.concat(cartItem);
    },
    clearQueue(state) {
      state.cartToBeAdded = state.cartCleaned;
    },
    setCartId(state, cartId) {
      state.cartId = cartId;
    },
  },
});
