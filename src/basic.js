function welcome(){
   return "Hello World";
};

function evenOrOdd(num){
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

function greeting(name) {
   return "Hola, " + name + "!";
};

export { evenOrOdd, greeting, welcome }