function greet() {
    console.log(this); // In non-strict mode, this will point to the global object
  }
  
  greet(); // In non-strict mode, prints the global object (window in browsers)
  