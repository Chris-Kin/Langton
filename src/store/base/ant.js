/* eslint-disable no-shadow */
import config from './config';

const validateXY = (point, boundary) => {
  const { x, y } = point;
  if (x === 0 || y === 0 || x === boundary - 1 || y === boundary - 1) {
    return false;
  }
  return true;
};

const directionMap = {
  0: 'up',
  1: 'right',
  2: 'down',
  3: 'left',
};
const directionNum = {
  up: 0,
  right: 1,
  down: 2,
  left: 3,
};

const state = {
  location: config.originLocation,
  direction: config.originDirection,
};

const mutations = {
  MOVE(state, payload) {
    const { location, direction } = state;
    const { size } = config;
    const { x, y } = location;

    if (!validateXY(location, size)) {
      return;
    }

    const cell = payload[x][y];
    cell.isBlack = !cell.isBlack;

    switch (direction) {
      case 'down':
        state.location = {
          x: x + 1,
          y,
        };
        break;
      case 'up':
        state.location = {
          x: x - 1,
          y,
        };
        break;
      case 'right':
        state.location = {
          x,
          y: y + 1,
        };
        break;
      case 'left':
        state.location = {
          x,
          y: y - 1,
        };
        break;
      default:
        break;
    }
  },
  TURN(state, payload) {
    state.direction = payload;
  },
};

const actions = {
  move({ commit, rootState }) {
    const { grid, ant } = rootState;
    const { direction, location } = ant;
    const { x, y } = location;
    const isBlack = grid[x][y].isBlack;
    const n = directionNum[direction];
    if (isBlack) {
      const m = (n + 1) % 4;
      commit('TURN', directionMap[m]);
    } else {
      let m = n - 1;
      if (m < 0) {
        m = 3;
      }
      commit('TURN', directionMap[m]);
    }
    commit('MOVE', grid);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
