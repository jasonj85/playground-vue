import { createStore } from "vuex";

export const state = () => {
  return {
    isLoggedIn: false,
  };
};

export const mutations = () => {
  return {
    LOGIN_USER(state) {
      state.isLoggedIn = true;
    },
    LOGOUT_USER(state) {
      state.isLoggedIn = false;
    },
  };
};

export const getters = () => {
  return {
    isLoggedIn: false,
  };
};

export const actions = () => {
  return {
    isLoggedIn: false,
  };
};

export const modules = () => {
  return {
    isLoggedIn: false,
  };
};

const store = createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
