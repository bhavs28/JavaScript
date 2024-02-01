const tvd=['vampires','warewolves','witches','originals','hybrids']
console.log(tvd)

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Creating an instance of Person
  var person1 = new Person('John', 30);
  
  // Accessing the prototype of the object
  console.log(Person.prototype);