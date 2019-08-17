let Person = require('./Villager.js');
let util = require('./utilities');
let colony = [];


let joe = Person("Joe", 37);
console.log(joe);
let pat = Person("Pat", 22, util.randomGender());
console.log(pat);
joe.greet();
pat.greet();
joe.eat();
pat.eat();