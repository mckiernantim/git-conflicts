function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(personA, somePersonB) {
    personA.friends.push(somePersonB);
    return person;
  }
  
  module.exports = {
    createPerson,
    addPersonAsFriend,
  };