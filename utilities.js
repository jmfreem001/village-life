const _ =  require('lodash');

// Move utility functions to a separate module. 
function percentChance(probability){
  let randNo = _.random(0,100)
  console.log(`Random number was ${randNo}`)
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

module.exports = {percentChance, randomGender}