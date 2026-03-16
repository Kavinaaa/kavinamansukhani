let name = prompt("Hello, what is your name?");
alert("Welcome " + name + ", it's a pleasure to greet you!");

let age = prompt("May I ask how old are you?");
alert("In that case you were born around " + (2026 - age) + " right? 😁");

let f = prompt("What is the current temperature in F?");
alert("That means it is " + (f - 32) * 5/9 + " in C! 🌡️");


let numInput = prompt("Please enter an integer value:");  
let num = Number(numInput); 

let numInput2 = prompt("Please enter a second integer value");
let num2 = Number(numInput2);

alert("Let me show you what I can do with the numbers " + num + " and " + num2 + ":");


let addition = num + num2;
let subtraction = num - num2;
let multiplication = num * num2;
let division = num / num2;
let remainder = num % num2;
let max = Math.max(num, num2);
let min = Math.min(num, num2);

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

function biggerNum(num, num2) {
  if (num > num2) {
    return (num + " is greater than " + num2);
  } else if (num2 > num) {
    return (num2 + " is greater than " + num);
  } else {
    return "Both numbers are equal";
  }
}

alert(num + " + " + num2 + " = " + addition);
alert(num + " - " + num2 + " = " + subtraction);
alert(num + " * " + num2 + " = " + multiplication);
alert(num + " / " + num2 + " = " + division);
alert(num + " % " + num2 + " = " + remainder);
alert("The max of " + num + " and " + num2 + " is " + max);
alert("The min of " + num + " and " + num2 + " is " + min);
alert(num + " is an " + isEvenOrOdd(num) + " number");
alert(num2 + " is an " + isEvenOrOdd(num2) + " number");
alert(biggerNum(num, num2));


let decimal_num = prompt("Please enter a value with a decimal point");

let negative = "-" + decimal_num;
let sine = Math.sin(decimal_num);
let cosine = Math.cos(decimal_num);
let power = Math.pow(decimal_num, 10); 
let square_root = Math.sqrt(decimal_num);
let round = Math.round(decimal_num);
let floor = Math.floor(decimal_num);
let ceiling = Math.ceil(decimal_num);
let absolute_value = Math.abs(decimal_num);

alert("Let me show you what I can do with the number " + decimal_num);
alert("The negative of " + decimal_num + " is " + negative);
alert("The sine of " + decimal_num + " radians is " + sine);
alert("The cosine of " + decimal_num + " radians is " + cosine);
alert(decimal_num + " ^ 10 = " + power);
alert("Square root of " + decimal_num + " = " + square_root);
alert("Rounded " + decimal_num + " = " + round);
alert("Floor of " + decimal_num + " = " + floor);
alert("Ceiling of " + decimal_num + " = " + ceiling);
alert("Absolute value of " + decimal_num + " = " + absolute_value);

let favNum = prompt("What's your favorite number?")
alert("Fun fact! " + favNum + " squared is " + (favNum ** 2) + " and " + favNum + " cubed is " + (favNum ** 3));


alert("Thanks for doing some cool math with me today " + name + " have an awesome day! 🥳");











