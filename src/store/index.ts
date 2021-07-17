import { createStore, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";
import axios from "axios";

export default createStore({
  state: {},
  mutations: {},
  actions: {
    test: ({ commit }) => {
      return new Promise((resolve, reject) => {
        axios
          .get("/getUser")
          .then((res) => resolve(res.data))
          .catch((err) => reject(err));
      });
    },
  },
  modules: {},
});
