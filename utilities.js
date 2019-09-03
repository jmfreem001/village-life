let Person = require('./Colonist.js');
const _ =  require('lodash');
const neatCsv = require('neat-csv');
const fs = require('fs').promises;

let maleNames = [];
let femaleNames = [];
let lastNames = [] 

function percentChance(probability){
  let randNo = _.random(0,100)
  // console.log(`Random number was ${randNo}`)
  if (randNo <= probability) {
    return true;
  }else {
    return false;
  }
}

function randomGender(){
  if (percentChance(50)){
    return 'm';
  }else{
    return 'f';
  }
}

async function csvColumnToArray(file, column, list){
  try{
    // Read and parse csv.
    let data = await fs.readFile(file)
    let rows = await neatCsv(data)
    // Keep only data in the column selected.
    let array = await rows.map(row => row[column])
    for (let item of array){
      list.push(item)
    }
    return array;
  }
  catch(err) {
    console.log(err.message)
    return err;
  }
}

async function randomPerson(){
  if ((maleNames === undefined || maleNames.length == 0)) {
    await csvColumnToArray('data/maleNames.csv', 'name', maleNames)
    await csvColumnToArray('data/femaleNames.csv', 'name', femaleNames)
    await csvColumnToArray('data/lastNames.csv', 'name', lastNames)
    console.log('This happened')
  }
  let gender = await randomGender()
  let firstName = ''

  if (gender = 'm'){
    firstName = _.sample(maleNames)
  }else {
    firstName = _.sample(femaleNames)
  }
  let lastName = _.sample(lastNames)

  let person = Person(`${firstName} ${lastName}`, randomAge() ,gender)
  return person;
}

function randomAge(){
  let randNo = _.random(0,100);
  // 25 % chance of 12 or under
  if (randNo < 25){
    return _.random(1,12)
  // 10% chance of elder
  } else if (randNo < 35){
    return _.random(55, 85)
    // 65% chance of teen to middle aged
  }else {
    return _.random(13, 54)
  }
}

module.exports = {percentChance, randomGender, randomPerson}