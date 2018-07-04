import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import base from './base';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Store({
  modules: {
    ...base,
  },
  strict: debug,
});
