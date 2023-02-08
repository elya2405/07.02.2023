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
