const prompt = require('prompt-sync')();

let running = true;
while(running){
    let numOne = prompt("Please enter the first numer: ");
    let numTwo = prompt("Please enter the second number: ");
    let operator = prompt("Please enter an operation(+,-,*,/,^): ");
    if(operator === "+"){
        console.log(parseInt(numOne) + parseInt(numTwo));
    } else if(operator === "-"){
        console.log(parseInt(numOne) - parseInt(numTwo));
    } else if(operator === "*"){
        console.log(parseInt(numOne) * parseInt(numTwo));
    } else if(operator === "/"){
        console.log(parseInt(numOne) / parseInt(numTwo));
    } else if(operator === "^"){
        console.log(parseInt(numOne) ** parseInt(numTwo));
    } else {
        console.log("You enter an invalid operator.")
    }
    let again = prompt("Thanks for using the calculator! If you would like to go again please enter y and press enter: ");
    if( again !== "y"){
    running = false;
    }
}
console.log("Thank You! Good Bye!");
