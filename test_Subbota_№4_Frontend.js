//Задание 1 дата
/*Ваша задача, используя методы объекта date, вывести на экран
время в формате: час:минута:секунда (пример: 14:23:11)
При этом, если секунды и минуты попадают в интервал от 0 до 10,
они должны выводиться с нулем впереди.
т.е. вместо 18:7:3 у Вас должно выводиться 18:07:03
*/
var date = new Date();
var hour = date.getHours(); 
var minutes = date.getMinutes(); 
var seconds = date.getSeconds(); 

if (minutes < 10){
	minutes = "0" + minutes; 
}
if (seconds < 10){
	seconds = "0" + seconds;
}
alert("Текущее время: " + hour + ":" + minutes + ":" + seconds);


//Задание 2 дата
/*Написать функцию, которая выводит на экран дату, которая наступит через n дней от сегодняшней.
n - количество дней, которое нужно запросить у пользователя при загрузке страницы.
Это значение передаете в функцию в качестве параметра.
При этом итоговую дату надо вывести в нормальном формате на русском языке.
Например так (пример для ввода числа 79):

Через 79 дней будет вот такая дата:
День недели: Воскресенье
Число: 10
Месяц: Октябрь
Год: 2010

При этом пользователь должен ввести число от 1 до 1000.
Если он не попал в интервал или ввел не число, то надо вывести ошибку.
Проверку можно осуществлять за пределами функции.
*/
var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница","Суббота"]; 
var now = new Date();
var milliNow = now.getTime();

function nowDate(N){
var day_after_N = new Date(1000 * 60 * 60 * 24 * N);
var milliN = day_after_N.getTime();
var milliNowPlusN = new Date(milliNow + milliN); 
document.write("Через " + N + " дней будет вот такая дата: " + "<br>");
document.write("День недели: " + days[milliNowPlusN.getDay()] + "<br>");
document.write("Число: " + milliNowPlusN.getDate() + "<br>");
document.write("Месяц: " + months[milliNowPlusN.getMonth()] + "<br>");
document.write("Год: " + milliNowPlusN.getFullYear() + "<br>");
}

var user = prompt("Введите число от 1 до 1000:");
var n = Math.round(user);

if (n >= 1 && n <= 1000){
	nowDate(n); 
} 
else{
	document.write("Ошибка! Вы ввели не число или оно за пределами диапазона от 1 до 1000") 
}

//Задание 1 объекты
/*Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
Если объект пустой, то результат должен быть 0.
//... 650
*/
var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
var sum = 0;
for (var key in salaries) {
	sum += salaries[key];
}
	alert("Cумма всех зарплат = " + sum);

//Задание 2 объекты
/*Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.
Если объект пустой, то пусть он выводит «нет сотрудников».
// ...  "Петя"
*/

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
var max = 0;
var maxName = "";
for (var name in salaries) {
  if (max < salaries[name]) {
    max = salaries[name];
    maxName = name;
  }
}
alert(maxName || "нет сотрудников" );

//Задание 1 рекурсия, setInterval, setTimeout
/*
1) Спросить у пользователя натуральное число(n). 
2) Написать рекурсивную функцию которая будет выводить все от 1 до n.
*/

var n = +prompt("Введите натуральное число", '');
function factorial(n){
    if (n == 1) return n.toString();
    else return factorial(n - 1) + " " + n;
}
alert(factorial(n));

//Задание 2 рекурсия, setInterval, setTimeout
/*Напишите функцию которая будет спрашивать у пользователя число(n) и 
будет вычислять сумму чисел от 1 до n, например:
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
Сделайте два варианта решения:
1.	С использованием цикла.
2.	Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
*/

//С использованием цикла.
var n = +prompt("Введите число", '');
function sumTo(n) {
	var sum = 0;
	for (var i = 1; i <= n; i++) {
	sum += i;
}
	return sum;
}
alert(sumTo(n));

//Через рекурсию.
var n = +prompt("Введите число", '');
function sumTo(n) {
	if (n == 1) return 1;
	return n + sumTo(n - 1);
}
alert(sumTo(n));

//Задание 3 рекурсия, setInterval, setTimeout
/*
1) Напишите функцию , которая последовательно выводит в консоль числа от 1 до 20, 
с интервалом между числами 100 мс. То есть, весь вывод должен занимать 2000 мс, 
в течение которых каждые 100 мс в консоли появляется очередное число.
Функция должна использовать setInterval.

2) Сделайте то же самое, но с использованием рекурсивного setTimeout вместо setInterval.
*/

//C использованием setInterval.
function printInterval() {
	var i = 1;
	var timerId = setInterval(function() {
		console.log(i);
		if (i == 20) clearInterval(timerId);
		i++;
	}, 100);
}
printInterval();

//C использованием setTimeout.
function printTimeout() {
var i = 1;	
var timerId = setTimeout(function run(){
	console.log(i);
	timerId = setTimeout(run, 100);
	if (i == 20) clearInterval(timerId);
	i++;	
}, 100);
}
printTimeout();