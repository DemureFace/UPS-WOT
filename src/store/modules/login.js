import TokenService from "@/services/storage.service";
import router from "@/router/index";

const name = "Admin";
const pass = "12345";

export default {
  namespaced: true,

  state: {
    isLogin: false,
    user: {
      password: "",
      name: "",
    },
  },

  getters: {
    isLogin: (state) => state.isLogin,
    user: (state) => state.user,
  },

  actions: {
    setLogin({ commit }, { username, password }) {
      const promise = new Promise((resolve, reject) => {
        if (name === username && pass === password) {
          resolve(true);
        } else {
          reject(new Error("fail login"));
        }
      });

      promise
        .then((res) => {
          commit("setLogin", res);
          commit("setUser", { username, password });
          TokenService.saveToken(res);
          router.push("/todo");
        })
        .catch((error) => console.error(error.message));
    },
  },

  mutations: {
    setLogin(state, payload) {
      state.isLogin = payload;
    },
    setUser(state, { username, password }) {
      state.user.name = username;
      state.user.password = password;
    },
  },
};
