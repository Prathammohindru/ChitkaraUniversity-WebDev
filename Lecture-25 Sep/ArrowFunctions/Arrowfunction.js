const person = {
    name: 'Pratham',
    greet: function() {
      const innerGreet = () => {
        console.log(`Hello, my name is ${this.name}`);
      };
      innerGreet();
    }
  };
  
  person.greet(); // "Hello, my name is Pratham"
  