import Vuex from 'vuex'

export const store = new Vuex.Store(
  {
      state: {
          authenticated: false
      },
      mutations: {
          setAuthentication(state) {
              state.authenticated = !state.authenticated;
          }
      }
  }
)