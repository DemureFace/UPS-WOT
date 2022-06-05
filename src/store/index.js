import { createStore } from "vuex";
import login from "./modules/login";
import todo from "./modules/todo";

export default createStore({
  modules: {
    login,
    todo,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
