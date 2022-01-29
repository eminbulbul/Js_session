// console.log('hello');

// function sayHi() {
//     console.log('Hi');
// }

// sayHi();
// sayHi();
// sayHi();

// let userName = "Munir"

// function sayHi(name = 'New User') {
//     console.log(`Hello ${name}`);
// }


// sayHi()
// sayHi(userName);
// sayHi('Mark') 

// function sayHi2(name) {
//     return ('Hello' + name)
// }

// console.log(sayHi2('Matthew'));
// console.log(typeof sayHi2());
// sayHi2()
// console.log(add100(12, 23));

// function add100(num1, num2 = 0) {
//     return num1 + num2
// }



// let square = function(a) {
//     return a * a;
// }
// console.log(square(3));


// let adder = new Function ('a','b', 'return a+b'); 

// //constructerlarin ilk harfi buyuk yazilir. function yazilirken

// console.log(adder(2,6));

// console.log(typeof adder);

// let sum = function(a, b) { return a + b };

// let addTwo = function(num1) {
//     return sum(+num1, 2)
// }
// console.log(addTwo(5));
// console.log(addTwo('4'));


//shortcut tanimlama
// function sayHello(name = 'New User') {
//     name && console.log(`Hello ${name}`);
// }

// sayHello('Mark')
// sayHello()

//Fonksiyon kendine verilen degeri degistirmeyecek


// function square(num1) {
//     num1 *= num1;
//     return num1;
// }
// let myNum = 4;

// console.log(square(myNum));
// console.log(myNum);

// let student = {};

// student.name = 'Mesut'

// function sayHi3(student) {
//     console.log(`Hello ${student.name} from entry point`);
//     // student.name = 'Zeynep';
//     // console.log(`Hello ${student.name} from inside function`); istenen bir durum degil
//     student = { name: 'Leon' };
//     console.log(`Hello ${student.name} from inside function`);
// }
// sayHi3(student)
// console.log(`Hello ${student.name} from outside`);