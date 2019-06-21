const Utils = require('../utils');
const { place, move, turn, report } = require('../actions');

const defaultState = { done: false, placed: false, report: undefined };

const getNewState = (state = defaultState, input) => {
  const [command] = Utils.parseInput(input);
  let newState = { ...state };

  switch (command) {
    case 'PLACE':
      const [, x, y, face] = Utils.parseInput(input);
      newState = place(state, x, y, face);
      break;
    case 'MOVE':
      newState = move(state);
      break;
    case 'LEFT':
    case 'RIGHT':
      newState = turn(state, command.toLowerCase());
      break;
    case 'REPORT':
      newState = report(state);
      break;
    default:
      break;
  }

  return newState;
};

module.exports = {
  defaultState,
  getNewState,
};
