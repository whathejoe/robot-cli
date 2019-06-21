const inquirer = require('inquirer');
const question = require('./question');
const { defaultState, getNewState } = require('./state');

const init = async () => {
  let state = defaultState;

  while (!state.done) {
    await inquirer.prompt(question).then(({ input }) => {
      state = getNewState(state, input);
    });
  }

  if (state.placed) {
    const {
      report: { x, y, face },
    } = state;
    console.log(`${x},${y},${face}`);
  }
};

init();
