const add = (firstNumber, secondNumber) => {
    const sum = firstNumber + secondNumber
    return sum
}

const subtract = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
}

//divide
const divide = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
}

//multiply
const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

//square
const square = (aNumber) => {
    return aNumber * aNumber;
}

let tVar1 = 5;
let tVar2 = 10;

console.log(subtract(tVar1, tVar2));
console.log(multiply(tVar1, tVar2));
console.log(divide(tVar1, tVar2));
console.log(square(tVar1));
