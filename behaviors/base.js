
const canEat = (state) => ({
  eat: () => {
    console.log(`${state.name} chows down!`);
  }
});

const canGreet = (state) => ({
  greet: () => {
    console.log(`${state.name} says: Hello!`);
  }
});

const baseBehaviors = (state) => {
  return Object.assign({},canEat(state), canGreet(state))
}

module.exports = baseBehaviors;