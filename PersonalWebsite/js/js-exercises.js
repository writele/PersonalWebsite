(function() {
/* Shared Functions */
function getValue(id) {
    var value = document.getElementById(id).value;
    return value;
}

function isValid(number) {
    if (!isNaN(number) && number !== "") {
        return true;
    }
    else {
        return false;
    }
}

function appendOutput(element, variable) {
    $(element).append(variable);
}

function clearOutput(element) {
    $(element).html("");
}

function runProgram(element, program) {
    $(element).on("click", function (event) {
        event.preventDefault();
        program();
    });
}

/* Simple Statistics */
var greatestNumber;
var leastNumber;
var meanNumber;
var productNumber;
var sumNumber;

var number1;
var number2;
var number3;
var number4;
var number5;

var numbers = [];


function calculateLeastNumber(arr) {
    return Math.min.apply(Math, arr);
}

function calculateGreatestNumber(arr) {
    return Math.max.apply(Math, arr);
}

function calculateMeanNumber(arr) {
    var mean = 0;
    for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
        mean += arr[i];
    }
    return mean / arrLength;
}

function calculateSumNumber(arr) {
    var sum = 0;
    for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
        sum += arr[i];
    }
    return sum;
}

function calculateProductNumber(arr) {
    var product = 1;
    for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
        product *= arr[i];
    }
    return product;
}

function getValues() {
    number1 = getValue("number1");
    number2 = getValue("number2");
    number3 = getValue("number3");
    number4 = getValue("number4");
    number5 = getValue("number5");
}

function pushValuestoArray() {
    numbers.push(Number(number1));
    numbers.push(Number(number2));
    numbers.push(Number(number3));
    numbers.push(Number(number4));
    numbers.push(Number(number5));
}

function clearValues() {
    numbers = [];
}


function setOutput() {
    leastNumber = calculateLeastNumber(numbers);
    greatestNumber = calculateGreatestNumber(numbers);
    meanNumber = calculateMeanNumber(numbers);
    sumNumber = calculateSumNumber(numbers);
    productNumber = calculateProductNumber(numbers);
}

function clearOutputNumbers() {
    clearOutput("span#error");
    clearOutput("span#least");
    clearOutput("span#greatest");
    clearOutput("span#mean");
    clearOutput("span#sum");
    clearOutput("span#product");
    clearOutput("p#stat-error")
}

function appendOutputNumbers() {
    appendOutput("span#least", leastNumber);
    appendOutput("span#greatest", greatestNumber);
    appendOutput("span#mean", meanNumber);
    appendOutput("span#sum", sumNumber);
    appendOutput("span#product", productNumber);
}

function statisticsProgram() {
    clearOutputNumbers();
    getValues();
    pushValuestoArray();
    setOutput();
    if (isValid(number1) && isValid(number2) && isValid(number3) && isValid(number4) && isValid(number5)) {
        appendOutputNumbers();
    }
    else {
        appendOutput("p#stat-error", "<p>There's been an error. Please make sure you've entered valid numbers.</p>")
    }
    clearValues();
}

runProgram(".statistics-btn", statisticsProgram);

/* Factorial */
var factorialInput;
var factorialOutput;


function factorialize(factorial) {
    var result = 1;
    for (var i = factorial; i > 0; i--) {
        result *= i;
    }
    return result;
}

function factorialProgram() {
    clearOutput("p#factorialOutput");
    factorialInput = getValue("fac-number");
    factorialOutput = factorialize(factorialInput);
    if (isValid(factorialInput)) {
        appendOutput("p#factorialOutput", factorialOutput);
    }
    else {
        appendOutput("p#factorialOutput", "There's been an error. Please make sure you've entered a valid number.")
    }
};

runProgram(".factorial-btn", factorialProgram);

/* Fizzbuzz */
var fbNumberInput1;
var fbNumberInput2;
var fizzbuzzOutput;

function fizzbuzz(number1, number2) {
    for (var i = 1; i <= 100; i++) {
        if (i % number1 === 0 && i % number2 === 0) {
            appendOutput("#fizzbuzzOutput", "FizzBuzz");
        }
        else if (i % number1 === 0) {
            appendOutput("#fizzbuzzOutput", "Fizz");
        }
        else if (i % number2 === 0) {
            appendOutput("#fizzbuzzOutput", "Buzz");
        }
        else {
            appendOutput("#fizzbuzzOutput", i);
        }
        appendOutput("#fizzbuzzOutput", "<br>");
    }
}

function getFBValues() {
    fbNumberInput1 = getValue("fb-number1");
    fbNumberInput2 = getValue("fb-number2");
}

function isValidFB(number) {
    if (!isNaN(number) && number > 0 && number <= 100) {
        return true;
    }
    else {
        return false;
    }
}

function fizzbuzzProgram() {
    clearOutput("#fizzbuzzOutput");
    getFBValues();
    if (isValidFB(fbNumberInput1) && isValidFB(fbNumberInput2)) {
        fizzbuzz(fbNumberInput1, fbNumberInput2);
    }
    else {
        appendOutput("#fizzbuzzOutput", "<p>There's been an error. Please make sure you've entered two numbers, each between 1 and 100!</p>")
    }
}

runProgram(".fizzbuzz-btn", fizzbuzzProgram);

/* Palindrome */
var wordInput;
var wordOutput;

function palindrome(word) {
    var wordArr = word.split("");
    var newArr = [];
    for (var i = wordArr.length - 1; i >= 0; i--) {
        newArr.push(wordArr[i]);
    }
    return newArr.join("");
}

function isPalindrome(word1, word2) {
    if (word1 === word2) {
        appendOutput("#palindromeOutput", "<p>It's a palindrome!</p>");
    }
    else {
        appendOutput("#palindromeOutput", "<p>It's not a palindrome.</p>");
    }
}

function isValidWord(word) {
    var reTrue = /[a-z]/i;
    var reFalse = /[0-9\W]/;
    var letters = reTrue.test(word);
    var numbers = reFalse.test(word);
    if (letters && !numbers) {
        return true;
    }
    else {
        return false;
    }
}

function palindromeProgram() {
    clearOutput("#palindromeOutput");
    wordInput = getValue("word").replace(/\s+/g, "");
    wordOutput = palindrome(wordInput);
    if (isValidWord(wordInput)) {
        isPalindrome(wordInput, wordOutput);
        appendOutput("#palindromeOutput", "<p>" + wordOutput + "</p>");
    }
    else {
        appendOutput("#palindromeOutput", "<p>There's been an error. Please make sure you've entered valid text.</p>")
    }
    
}

runProgram(".palindrome-btn", palindromeProgram);
})();