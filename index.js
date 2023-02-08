//задачи 1 вариант 1
function sum(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}
let a = sum(5, 6);

//задача 1 вариант 2
function sum(a, b) {
  console.log(a + b);
}
let c = sum(5, 6);

//задача 2 длинна строки
let myName = "eleonora";
console.log(myName.length); //сколько букв в слове

//задача 3
let number = 5; // считает от 5 до 25
while (number <= 25) {
  console.log(number);
  number++;
}

//задача 4 отчитать от 10 до -10 используя for
for (let a = 10; a >= -10; a--) {
  console.log(a);
}

// тема: Массивы (переменная которая хранит несколько значений)
let example1 = [];
let example2 = [3, 4, 1, 54, 33];
let example3 = ["hello", 55, true, null];

let example4 = ["aibek", "radbek", "elya"];

let example5 = ["issyk-kul", "osh", "chui", "talas", "jalal-abad", "naryn"];

console.log(example3);
console.log(example3);
console.log(example3);
console.log(example4[1]); //отчет идет от нуля, это для того чтобы вывести определенный элемент из массива

example4.push("ajar"); //добавить элемент в массив
example4.unshift("tina"); //добавить элемент в начало массива
console.log(example4);

let name1 = example4.pop(); //убирает элемент с конца
let name2 = example4.shift(); //убирет элемент с начала
console.log(example4);

example4[0] = "aigerim"; // изменяет элемент в массиве
console.log(example4);
console.log(example5.length); //сколько элементов находится в массиве

console.log("hello my mname is " + example4[0]);
console.log("hello my mname is " + example4[1]);
console.log("hello my mname is " + example4[2]);

// 1 вариант
for (let i = 0; i < 3; i++) {
  console.log("hello, my name is " + example4[i] + " . Nice to meet you.");
}

for (let i = 0; i < example4.length; i++) {
  console.log("hello, my name is " + example4[i] + " . Nice to meet you.");
}

for (let i = 0; i < example5.length; i++) {
  console.log("my city " + example5[i]);
}

//2 вариант

for (let name of example4) {
  console.log("hello, i'm " + name);
}

// 3 вариант

for (let i in example4) {
  let name = example4[i];
  console.log("hello, name is " + name);
}

//4 вариант
// forEach для каждого
example4.forEach(function (name, i) {
  console.log("hello... " + name);
});

//5 вариант
//while (example4.length > 0) {
// console.log(example4.pop());
//}

//выводим количество букв в именах
for (let i = 0; i < example4.length; i++) {
  console.log(example4[i].length);
}

//выводим имена большими буквами
for (let i = 0; i < example4.length; i++) {
  console.log(example4[i].toUpperCase());
}

let example6 = ["i", "love", "karakol"];
let result = "";
for (let i = 0; i < example6.length; i++) {
  result = result + example6[i] + " ";
}
console.log(result);

let example7 = [54, 11, 44, 21, 3, 110];
let result1 = 0;
for (let i = 0; i < example7.length; i++) {
  result1 = result1 + example7[i];
}
console.log(result1);
