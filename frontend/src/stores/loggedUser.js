import Vuex from 'vuex'

export const store = new Vuex.Store(
  {
      state: {
          authenticated: false,
          role: "",
          cart: [],
          cartCleaned: [],
          cartToBeAdded: []
      },
      mutations: {
          setAuthentication(state) { state.authenticated = !state.authenticated },
          setAuthorization(state, role){ state.role = role },
          loadCart(state, cartItems){
            state.cart = cartItems
          },
          updateCart(state, cartItems){
            state.cart = state.cart.concat(cartItems)
          },
          removeCart(state){ 
            state.cart = state.cartCleaned
          },
          putOnQueue(state, cartItem){
            state.cartToBeAdded = state.cartToBeAdded.concat(cartItem)
          },
          clearQueue(state){
            state.cartToBeAdded = state.cartCleaned
          }
      }
  }
)