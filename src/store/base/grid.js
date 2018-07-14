/* eslint-disable no-shadow */
import config from './config';

const grid = [];
for (let i = 0; i < config.size; i += 1) {
  const row = [];
  for (let j = 0; j < config.size; j += 1) {
    row.push({
      isBlack: false,
    });
  }
  grid.push(row);
}
config.originBlackCells.forEach((el) => {
  const { x, y } = el;
  grid[x][y].isBlack = true;
});

const state = grid;

const mutations = {
  SWITCH_BLACK(state, payload) {
    const { cell: { x, y }, isBlack } = payload;
    state[x][y].isBlack = isBlack;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
