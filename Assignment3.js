let number1 = prompt("Enter the first number: ");
let number2 = prompt("Enter the second number: ");
let number3 = prompt("Enter the third number: ");
let biggest;
if (number1 >= number2 && number1 >= number3) {
    biggest = number1;
}
else if (number2 >= number1 && number2 >= number3) {
    biggest = number2;
}
else {
    biggest = number3;
}
console.log("The biggest of the 3 numbers is " + biggest);