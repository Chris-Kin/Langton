/* eslint-disable no-shadow */

const state = {
  width: 100,
  height: 100,
  // cellObj: {
  //   isBlack: false,
  // },
  originBlackCells: [],
  originLocation: {
    x: 50,
    y: 50,
  },
  originDirection: 'down',
};

const mutations = {
  SET_WIDTH(state, payload) {
    state.width = Math.max(parseInt(payload, 10), 10);
    state.originLocation.x = Math.floor(state.width / 2);
  },
  SET_HEIGHT(state, payload) {
    state.height = Math.max(parseInt(payload, 10), 10);
    state.originLocation.y = Math.floor(state.height / 2);
  },
};

const actions = {
  move({ commit, rootState }) {
    const { grid } = rootState;
    commit('MOVE', grid);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
