Here 's a JavaScript program containing functions to fulfill each of the requirements:

``
`javascript
// 1. Display current date & time
function displayCurrentDateTime() {
    var currentDateTime = new Date();
    console.log(currentDateTime.toString());
}

// 2. Greet user with full name
function greetUser(firstName, lastName) {
    alert("Hello, " + firstName + " " + lastName + "!");
}

// 3. Add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

// 4. Calculator
function calculate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

// 5. Square of a number
function square(num) {
    return num * num;
}

// 6. Factorial of a number
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// 7. Counting numbers from start to end
function countNumbers(start, end) {
    for (var i = start; i <= end; i++) {
        console.log(i);
    }
}

// 8. Compute hypotenuse of a right angle triangle
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
}

// 9. Calculate area of a rectangle
function calculateRectangleArea(width, height) {
    return width * height;
}

// 10. Check if a string is palindrome
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// 11. Convert first letter of each word to uppercase
function capitalizeWords(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

// 12. Find longest word in a string
function longestWord(str) {
    var words = str.split(" ");
    Here's a JavaScript program containing functions to fulfill each of the requirements:

`
``
javascript

function displayCurrentDateTime() {
    var currentDateTime = new Date();
    console.log(currentDateTime.toString());
}

function greetUser(firstName, lastName) {
    alert("Hello, " + firstName + " " + lastName + "!");
}

function addNumbers(num1, num2) {
    return num1 + num2;
}

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

function square(num) {
    return num * num;
}

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

function countNumbers(start, end) {
    for (var i = start; i <= end; i++) {
        console.log(i);
    }
}

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
}

function calculateRectangleArea(width, height) {
    return width * height;
}

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function capitalizeWords(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

function longestWord(str) {
    var words = str.split(" ");
    var longest = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

function calcCircumference(radius) {
    return 2 * Math.PI * radius;
}

function calcArea(radius) {
    return Math.PI * radius * radius;
}
``
`

You can call these functions with appropriate arguments to execute their respective functionalities.var longest = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

// 13. Count occurrences of a letter in a string
function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

// 14. Calculate circumference and area of a circle
function calcCircumference(radius) {
    return 2 * Math.PI * radius;
}

function calcArea(radius) {
    return Math.PI * radius * radius;
}
`
``

You can call these functions with appropriate arguments to execute their respective functionalities.