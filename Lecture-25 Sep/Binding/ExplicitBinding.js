function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const person = { name: 'Pratham' };

greet.call(person); // "Hello, my name is Pratham"
