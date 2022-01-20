// console.log("I'm from file");

// var x = 7;
// var y = 5;

// console.log(x);
// console.log({ y });
// y = x
// console.log(y);

// var alert = 'Merhaba'
// console.log(alert);
// alert('Hey')

// var a = 'Global'
// console.log(a); {
//     let a = 'Scope'
//     console.log(a); {
//         let a = 'inner scope'
//         console.log(a);

//     }
//     console.log(a);
//     // eğer inner scope içerisinde let ifadesi kullanılmasaydı, yukarıdaki console.log(a); değişikliği farklı olurdu. scope olmazdı

// }
// console.log(a);

// let c = 3;
// console.log(c);
// c = 5;
// console.log(c);

// const h = "const var";
// console.log(h);
// const h = "2";

//daha önce declare edildiği için const'a ikinci bir sefer daha atama yapılmaz

// DATA TYPES

// var f;

// console.log(typeof f);

// f = 5;

// console.log(typeof f);

// f = 'merhaba ben string';

// console.log(typeof f);

// NUMBERS

// console.log(typeof 5);
// console.log(typeof 5.45);
// console.log(typeof - 2);
// console.log(typeof 0);
// console.log(typeof 1 / 0);
// console.log(typeof NaN);
// console.log(typeof Infinity); // 1/0

// bunların hepsi number tipindedir.

// STRINGS
// bildiğimiz metinlerdir
// (\) bu ifadeyi escape seq olarak kullanabiliriz.

// var merhaba = 'Merhaba';
// var selam = "sanada selam";

// console.log(merhaba);
// console.log(selam);

// var instructor = 'Mark'
// var d = `merhaba dünya ${instructor} ` // $ işareti ve süslü parantez ile bir değişkeni metin içerisinde yazdırabiliriz. bu sadece backtick yani `işareti ile kullanılır. diğer tırnaklar ile çalışmaz.

// console.log(d);

//Booleans

//true yada false . evet veya hayır bu kadar.

console.log(Boolean("")); //false
console.log(Boolean(3 < 5)); //true
console.log(Boolean(3 > 5)); //false
console.log(Boolean(3 == 5)); //false
console.log(Boolean(0)); //false
console.log(Boolean("0")); //true
var s;
console.log(Boolean(s)); //false undefined
console.log(Boolean(null)); //false
console.log(typeof s); //true
console.log(typeof null); //object

console.log(null == false);
console.log(null == true); //null yokluk demektir.