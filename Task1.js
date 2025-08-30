//Q-1
var n = 11;
if (n % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
//Q-2
var a = 20;
var b = 10;
if (a > b) {
    console.log("Largest:", a);
}
else {
    console.log("Largest:", b);
}
//Q-3
var a = 20;
var b = 30;
var c = 25;
if (a > b && a > c) {
    console.log("Largest:", a);
}
else if (b > c) {
    console.log("Largest:", b);
}
else {
    console.log("Largest:", c);
}
//Q-4
var n = -7;
if (n > 0) {
    console.log("Positive");
}
else if (n < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}
//Q-5
var age = 67;
if (age >= 18) {
    console.log("Eligible for Vote");
}
else {
    console.log("Not Eligible for Vote");
}
//Q-6
var marks = 90;
if (marks >= 90) {
    console.log("Grade: A");
}
else if (marks >= 75) {
    console.log("Grade: B");
}
else if (marks >= 60) {
    console.log("Grade: C");
}
else if (marks >= 40) {
    console.log("Grade: D");
}
else {
    console.log("Grade: Fail");
}
//Q-7
//Leap year[not done]
//Q-8
var n = 55;
if (n % 5 == 0 && n % 11 == 0) {
    console.log("Divisible by 5 and 11");
}
else {
    console.log("Not Divisible by 5 and 11");
}
//Q-9
var ch = "A";
if (ch >= "A" && ch <= "Z") {
    console.log("Uppercase");
}
else if (ch >= "a" && ch <= "z") {
    console.log("Lowercase");
}
else if (ch >= "0" && ch <= "9") {
    console.log("Digit");
}
else {
    console.log("Special Character");
}
//Q-10
var d = 5;
switch (d) {
    case 1: {
        console.log("Sunday");
        break;
    }
    case 2: {
        console.log("Monday");
        break;
    }
    case 3: {
        console.log("Tuesday");
        break;
    }
    case 4: {
        console.log("Wednesday");
        break;
    }
    case 5: {
        console.log("Thursday");
        break;
    }
    case 6: {
        console.log("Friday");
        break;
    }
    case 7: {
        console.log("Saturday");
        break;
    }
    default: {
        console.log("Invalid");
    }
}
//Q-11
var m = 9;
switch (m) {
    case 1: {
        console.log("31 Days");
        break;
    }
    case 2: {
        console.log("28 or 29 Days");
        break;
    }
    case 3: {
        console.log("31 Days");
        break;
    }
    case 4: {
        console.log("30 Days");
        break;
    }
    case 5: {
        console.log("31 Days");
        break;
    }
    case 6: {
        console.log("30 Days");
        break;
    }
    case 7: {
        console.log("31 Days");
        break;
    }
    case 8: {
        console.log("31 Days");
        break;
    }
    case 9: {
        console.log("30 Days");
        break;
    }
    case 10: {
        console.log("31 Days");
        break;
    }
    case 11: {
        console.log("30 Days");
        break;
    }
    case 12: {
        console.log("31 Days");
        break;
    }
    default: {
        console.log("Invalid");
    }
}
//Q-12
var a = 20;
var b = 10;
var op = "+";
switch (op) {
    case "+": {
        console.log("Addition:", a + b);
        break;
    }
    case "-": {
        console.log("Subtraction:", a - b);
        break;
    }
    case "*": {
        console.log("Multiply:", a * b);
        break;
    }
    case "/": {
        console.log("Division:", a / b);
        break;
    }
    default: {
        console.log("Invalid");
    }
}
//Q-13
var marks = 39;
if (marks >= 40) {
    console.log("Pass");
}
else {
    console.log("Fail");
}
//Q-14
var amt = 6000;
if (amt >= 5000) {
    console.log("Discount:", amt * 0.1);
}
else {
    console.log("Discount:", amt * 0.05);
}
//Q-15
var ch = "e";
if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u" || ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") {
    console.log("Vowel");
}
else {
    console.log("Consonant");
}
//Q-16
var n = 56;
if (n >= 1 && n <= 100) {
    console.log("In Range");
}
else {
    console.log("Not in Range");
}
//Q-17
var amt = 1200;
if (amt % 100 == 0) {
    console.log("Can withdraw");
}
else {
    console.log("Cannot withdraw");
}
//Q-18
var a = 5;
var b = 5;
var c = 5;
if (a == b && b == c) {
    console.log("Equilateral");
}
else if (a == b || b == c || a == c) {
    console.log("Isosceles");
}
else {
    console.log("Scalene");
}
//Q-19
var t = 30;
if (t >= 35) {
    console.log("Hot");
}
else if (t >= 25) {
    console.log("Warm");
}
else if (t >= 15) {
    console.log("Cool");
}
else {
    console.log("Cold");
}
//Q-20
var u = 350;
var bill = 0;
if (u <= 100) {
    bill = u * 5;
}
else if (u <= 300) {
    bill = 100 * 5 + (u - 100) * 7;
}
else {
    bill = 100 * 5 + 200 * 7 + (u - 300) * 10;
}
console.log("Bill:", bill);
