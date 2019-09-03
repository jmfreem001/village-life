let Person = require('./Colonist.js');
let util = require('./utilities');
let store = require('./store');


const colony = ( () => {
  let manifest = [];
  let population = 0;
  let year = 0;
  let name = "Pilgrim's Rest";

  const displayManifest = () => {
    console.log(manifest);
  }
  const displayPopulation = () => {
    console.log(population);
  }
  const numberOfPeople = (type) => {
    let n = 0;

    if (type === 'living'){
      for (let person of manifest){
        if (person.isAlive){
          n++;
        }
      }
    }else{
      for (let person of manifest){
        if (person.isAlive === false){
          n++;
        }
      }
    }
    return n;
  }


  const generateStartingColonists = (n) => {
    // Generates n random colonists;
    // gender = util.randomGender
    // First name = util.randomFirstname(gender);
    // Lastname = util.random LastName
    //TODO
  }

  const status = () => {
    console.log(`${name} was founded ${year} year(s) ago and has a population of ${numberOfPeople('living')}.`) 
    console.log(`${numberOfPeople('dead')} have passed on while in the colony.`)
  }

  const advanceYear = () => {
    console.log(`One year has passed in ${name}`)
    for (let person of manifest){
      person.growOlder();
    }
    year++
  }

  const rename = (newName) => {
    oldName = name;
    name = newName;
    console.log(`${oldName} has been renamed to ${name}.`)
  }

  const updateManifest = (type, obj) => {
    if (type === 'add'){
      manifest.push(obj);
      population++;
    } else if (type === 'rmv'){
      manifest.pop(obj);
      population--;
    }

  }
  return {
    displayManifest,
    updateManifest,
    displayPopulation,
    advanceYear,
    status,
    rename
  }

})();


// TODO, look to move this to generate colonists
let numberOfColonists = 20
(async () => {
  for (let i = 0; i < numberOfColonists; i++) {
    let colonist = await util.randomPerson()
    colony.updateManifest('add', colonist)
  }
  colony.advanceYear();
  colony.rename('Jab Town');
  colony.status();
})();
