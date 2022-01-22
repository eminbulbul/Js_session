// var x = 2;
// var y = 5;
// var z = 8;

// var t = '2'

// var u = t - y;

// console.log(x + y);
// console.log(x + t); toplama isleminde her zaman string sonuc veriyor

// console.log(z - t); //burada integer olarak deger verir.

// console.log(t - y); // -3

// console.log(typeof u, u) // -3

// console.log(z / t); //4

// console.log(5 % 2); // kalani verir

// var a = 10;

// console.log(a++); //10
// console.log(a); //11

// var b = 5;
// console.log(b); //5
// console.log(++b); //6
// console.log(++b); //7

//eger once opertaor yazilirsa direk arttirilmis sonucu verecektir.

// var c = 8;
// console.log(c--); //8
// console.log(c); //7

// var d = 10;
// console.log(--d); //9

// console.log({ d }, { c }); // {d: 9} {c: 7}

// console.log(c++ + ++c); //9 + 9 = 18 bu durumda toplama oncesi c++ islemi yapar.

// var input = prompt("enter your age");

// console.log(input, typeof input); //kullanicidan deger algimiz metod. prompt tur.

// var c = '8';

// console.log(-c); //stringi integer eksi degere cevirir.

// var a = 4;
// var b = '4';

// var c = a == b;
// console.log(c); //true
// console.log(a == b); //true

// console.log(a === b); //tipinide sorgular 'false'

// console.log(a != b); // false
// console.log(a !== b); //true

// var a = 'a';

// var b = 20;
// console.log(a.charCodeAt()); //charCodeAt() ascii codunu sorgular
// console.log('2'.charCodeAt());

// console.log(b > a); //false verir ascii codlarini karsilastirir 50 > 97 demek istiyor
// // ascii tablosunda once buyuk harfler siralanir

// console.log('FullStack' > 'Fullstack'); //false verir

// var a = (false || true); //or isareti direk trueyu alir

// console.log(a);

// var b = (0 && 2)

// console.log(b); //0 dondurur 've' ifadesi

// var b = (0 && false)

// console.log(b); //0 dondurur ilk false u alir

// var b = (2 && 3);
// console.log(b);

// console.log(null && NaN); //null verir

// ------------------ornek-------------------------

// var capitalLetter = true;
// var symbol = true;
// var passLength = false;

// var result = capitalLetter && symbol && passLength;

// console.log(result || console.log('Try Again'));
// console.log(!result || console.log('Try Again')); // ! isareti sonucun tersini alir not demektir.

// var a;
// console.log(a);
// console.log(a ?? 'Null veya Undefined');
// var b;
// console.log(b ?? a); ?? or un tersi gibi calisir