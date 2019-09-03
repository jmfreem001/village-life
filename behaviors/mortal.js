const canLive = (state) => ({
  isAlive: true
});

const canBeHealthy = (state) => ({
  isSick: false
});

const canGetSick = (state) => ({
  contractIllness: () => {
    console.log(`${state.name} is sick!`);
    isSick = true;
  }

});

const canDie = (state) => ({
  die: () => {
    console.log(`${state.name} has died!`);
    state.isAlive = false;
  }
});

const canGrowOlder = (state) => ({
  growOlder: () => {
    state.age++
    console.log(`${state.name} has aged a year and is now ${state.age}`)
  }
})

const mortalBehaviors = (state) => {
  return Object.assign({},
    canDie(state), canLive(state),canBeHealthy(state),
    canGetSick(state), canGrowOlder(state) 
  );
}

module.exports = mortalBehaviors;