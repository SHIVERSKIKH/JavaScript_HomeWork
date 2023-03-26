// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function Cube (num) {
    return Math.pow(num, 3);
}
const firstNumber = Cube(2);
const secondNumber = Cube(3);
console.log(firstNumber + secondNumber);


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let num = +prompt("Введите число");
function Tax (num) {
    return num = num * 0.87;
}
if (isNaN(num)) {
    console.log(`Нужно писать число`);
} else {
    console.log(`Размер заработной платы за вычетом налогов равен ${Tax(num)}`);
}
// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function MaxNumber (a, b, c) {
    return Math.max(a, b, c);
}
const a = +prompt("Введите первое число");
const b = +prompt("Введите второе число");
const c = +prompt("Введите третье число");
console.log(`Максимальное значение равно ${MaxNumber(a, b, c)}`);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление

function Sum(a, b) {
    return a + b;
}

function Difference(a, b){
    if (a > b) {
        return a - b;
    } else {
        return b - a;
    }
}

function Multiplication(a, b){
    return a * b;
}

function Division(a, b){
    return a / b;
}
console.log(Sum(2,6));
console.log(Difference(2,6));
console.log(Multiplication(2,6));
console.log(Division(2, 6));