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


// let student = 'Mustafa';

// function sayHi(studentName) {
//     console.log(`Welcome ${studentName}`);
// }
// sayHi(student)

// let students = ['John', 'Jane', 'Joe'];

// sayHi2(students)

// function sayHi2(studentName) {
//     console.log(`Welcome ${studentName}`);
// }

// for (let i = 0; i < students.length; i++) {
//     sayHi2(students[i])
// }


// ---------------2. yontem--------------
// function sayHi(student) {
//     for (let i = 0; i < students.length; i++) {
//         console.log(`Welcome ${students[i]}`);
//     }
// }

// sayHi(students)

// ------------------Yeni Ornek-Mulakat sorusu-----------
// function sum() {
//     let sum = 0;
//     console.log(arguments);
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum;
// }
// // console.log(sum(1));
// console.log(sum(1, 2, 3, 4, 5, 6));

// function sum(a, b, ...others) {
//     console.log(arguments);
//     console.log(others);
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum;
// }
// console.log(sum(1, 2, 3, 4, 5, 6));

// others rest parametreleri olarak gecer - icerdekileri ayirmak icin kullandik. yani soyle burada ki a,b ve diger elemanlar olarak ayrildi. a veya b yi daha sonra baska birsey icin kullanabiliriz.

// const bill = function(item, tax) {
//     let total = 0;
//     for (let i = 0; i < item.length; i++) {
//         total += item[i] + item[i] * tax;

//     }
//     return total;
// }
// console.log(bill([10, 15, 20], 0.18));

// https://thrkardak.medium.com/javascript-harikaları-1-rest-parameters-7ba6ddcf6874 

// function bolme(num1, num2) {
//     if (num2 === 0) {
//         return "Zero Division Error"
//     } else {
//         return num1 / num2
//     }
// }
// // console.log(bolme(12, 2));
// console.log(bolme(12, 0));
// -------------------------------------------------------
// function bolme(num1, num2) {
//     if (num2 === 0) return "Zero Division Error"
//     return num1 / num2

// }
// console.log(bolme(12, 0)); tek arguman ooldugu icin bu sekilde de yazilabilir

// function div2(num3, num4) {
//     return num3 ? num3 / num4 : "Zero Division Error!"
// }
// console.log(div2(10, 3));
// --------------------------------------------------------------
// kendi kendini cagiran fonksiyonlar

// function pascalNumber1(n) {
//     let sum = 0;
//     for (let i = 1; i < n + 1; i++) {
//         sum += i
//     }
//     return sum
// }
// console.log(pascalNumber1(5));

// function pascalNumber(n) {
//     return (n * (n + 1) / 2)
// }
// console.log(pascalNumber(100));

// function pascal(n) {
//     if (n === 1) return 1;
//     return n + pascal(n - 1)
// }
// console.log(pascal(100));


// Arrow Functions 
//Anonim fonksiyon
// let toplam = function(a) { return a + 100 }
// console.log(toplam(10));

//Arrow fonksiyon

// let toplam = (a) => {
//     return a + 100
// }




// let mehmet = (a) => a + 100;

// console.log(mehmet(20));


// en kisa hali

// let toplam = a => a + 100;
// console.log(toplam(30));

// let user = 'Murat';
// let sayHi = () => console.log(`welcome ${user}`);

// sayHi()

// let toplam = (num1, num2) => num1 + num2;
// console.log(toplam(10, 5));
// console.log(toplam(15, 5));