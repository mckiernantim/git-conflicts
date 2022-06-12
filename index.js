function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(person, somePerson) {
    person.friends.push(somePerson);
    return person;
  }
  
  module.exports = {
    createPerson,
    addPersonAsFriend,
  };