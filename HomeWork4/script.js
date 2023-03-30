// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
for(let i = 0; i < 11; i++) {
    if(i % 2 === 0 && i > 0) {
        console.log(`${i} четное число`);
    }
    if(i === 0) {
        console.log(`${i} это ноль`);
    }
    else {
        console.log(`${i} нечетное число`); 
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const length = 10;
const min = 0;
const max = 9;
let sum = 0;
const array = [...Array(length)];
for(let i = 0; i < array.length; i++) {
    array[i] = Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
for(let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
const minNumbers = Math.min(...array);

const threeNum = array.find(item => item === 3);
if (threeNum === 3) {
    console.log(`В массиве есть число 3`);
}
else {
    console.log(`В массиве нет числа 3`);
}
console.log(`Массив рандомных чисел ${array}`);
console.log(`Сумма элементов в массиве равна ${sum}`);
console.log(`Минимальное число в массиве равно ${minNumbers}`);

// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
 
let a = "";
for (let i = 0; i < 20; i++) {
    a = a + "x";
    console.log(a);
}
