/* eslint-disable*/
import Vue from "vue";
import Vuex from "vuex";

import covid from "@/store/modules/covid";

Vue.use(Vuex);

let store = new Vuex.Store({
  modules: {
    covid,
  },
});

export { store };
