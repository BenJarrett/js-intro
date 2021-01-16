// console.log("This is for js-intro")

// function sayHello() {
//   console.log("Hello"); // DECLARED FUNCTION // // This can hoist 
// }

// const sayHello = function() { // 2nd way to declare function //
//   console.log("Hello!")
// }

// const sayHello = () => { // Third way to declare function //
//   console.log("Hello!")
// }
 

//  sayHello(); // Called Function //


// // *******  FUNCTIONS WITH ARGUMENTS ******
// function logsHello(name) {
//   console.log('Hello, ${name}!');
// }

// logsHello('Ben Jarrett');

const addsTwoNumbers = (num1, num2) => {
  const sum = num1 + num2;
  console.log(sum); 
  return sum;
}

console.log (addsTwoNumbers(5,7));
