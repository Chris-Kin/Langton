import Vue from 'vue';
import Router from 'vue-router';

import LangtonAnt from '@/view/Langton';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LangtonAnt',
      component: LangtonAnt,
    },
  ],
});
