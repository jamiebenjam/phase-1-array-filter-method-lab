// Code your solution here

//takes in array of names and a string as arguments
//returns matching list of drivers
//case insensitive 
//localeCompare(compareString)
//  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection, string) {
    const newCollection = [];
    for (const user of collection) {
        if (user === string) {
      return(newCollection.push(user));
    }
    }
  }

  

