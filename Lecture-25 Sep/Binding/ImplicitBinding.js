const person = {
  name: 'Pratham',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // "Hello, my name is Pratham"
