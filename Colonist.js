const _ =  require('lodash');

const baseBehaviors = require('./behaviors/base');
const mortalBehaviors = require('./behaviors/mortal');

const createPerson = (name, age=0, gender='m') => {
  let state = {
    name,
    age,
    gender,
    health: _.random(33,100),
    physBeauty: _.random(0,100),
    intBeauty: _.random(0,100)
  }
  return Object.assign(state, baseBehaviors(state), mortalBehaviors(state))
}



module.exports = createPerson;