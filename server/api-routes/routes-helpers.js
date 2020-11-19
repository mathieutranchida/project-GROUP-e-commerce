//Error simulation constants
const MAX_DELAY = 2000;
const FAILURE_ODDS = 1;

// - Add an arbitrary delay of 0-2 seconds
// - Add a 5% chance of a 500 error
const simulateProblems = (res) => {
  const delay = Math.random() * MAX_DELAY;

  setTimeout(() => {
    const shouldError = Math.random() <= FAILURE_ODDS;

    if (shouldError) {
      res.sendStatus(500);
      return;
    }
  }, delay);
};

//Check if element found, otherwise throw error
const checkIfFound = (element, name) => {
  if (!element) {
    throw new Error(`${name} not found.`);
  }
  return true;
};

module.exports = {
  simulateProblems,
  checkIfFound,
};
