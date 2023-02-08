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