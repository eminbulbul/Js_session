/* let str1 = 'Hello '
let str2 = "World"
let str3 = `${str1+str2}`
console.log(typeof str1, str1);
console.log(typeof str2, str2);
console.log(typeof str3, str3); */

/* let str2 = "World"
let str4 = new String("A string object")
// console.log(typeof str4); //object
console.log(str4);
console.log(str2); */

// concat()

/* var s1 = "Hello ";
var s2 = "World!";
var s3 = s1.concat(s2);
console.log(s3);
console.log(s3.concat(' 2022 ', s1));
console.log({s1},{s2}); */

//charAt

/* var a = 'primitive.\nlerin properti veya metodu olmaz.'
console.log(a);
//console.log(a.charAt()) //boş girilirse ilk indexi getirir
console.log(a.charAt(9));
// console.log(a.charAt(10));
// console.log(a.charAt(11));
// console.log(a.length);
// console.log(a.charAt(43));
console.log(a.charAt(a.length-1));
console.log(a[a.length-1]);  */


// var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

//includes

/* var n = str.includes("simply");
var n1 = str.includes("Simply");
console.log(n);
console.log(n1);
 */

//indexof 
/* var n = str.indexOf("simply");
console.log(n);
console.log(str.indexOf('xa')); // -1
console.log(str.indexOf("Simply")); // -1
console.log(str.indexOf('m')); // ilk bulduğu sonucu döndürür
console.log(str.lastIndexOf('m')); // sondan başlar ilk bulduğu sonucu döndürür
 */

// console.log(s.replace('Dummy', 'Hello'));
//case sensitive oldugu icin degistirmez.
// console.log(s.replace(/Dummy/i, 'Hello'));
//regex ile case sensitive boyle asilir.

// console.log(s.replace(/e/g, '--'));
//regex tumunu degistirme.

// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.text";

// console.log(s.search('text'));
// console.log(s.search('Text')); //case sensitive
// console.log(s.search(/Text/i)); //regex
// console.log(s.indexOf('text', 30)); // aramaya 30 dan sonra baslar.


//slice()


// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.text";

// console.log(s.slice(0, 5)); // 5 dahil degil 0-1-2-3-4 indexlerini getirdi.
// console.log(s.slice(6)); //6 dan baslar
// console.log(s.slice(12, -10)); //12 den -10 a kadar gitti- -10 tersten


//split()
// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.text";

//verilen stringi array'e cevirir.

// console.log(s.split(' ')); // bosluk olan heryerden elemanlari ayirdi

// console.log(s.split('')); //butun harflerini teker teker elemanlarina ayirir

// console.log(s.split()); // komplesini tek bir array yapar.



//substr()

// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.text";

// console.log(s.substr(22, 10));
// console.log(s.substr(22));

//substring()

// var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.text";

// console.log(s.substring(22, 33));
// console.log(s.substring(33, 22)); // bunlarin ikiside ayni sonucu getirir. negativ index kullanilmaz.



// //toLowercase toUppercase
// var pangram = "pijamalı hasta yağız şoföre çabucak güvendi"
//     // console.log(pangram.toUpperCase()); //PIJAMALI HASTA YAĞIZ ŞOFÖRE ÇABUCAK GÜVENDI
//     // console.log(pangram.toLocaleUpperCase('tr-TR')); //PİJAMALI HASTA YAĞIZ ŞOFÖRE ÇABUCAK GÜVENDİ

// var Pangram = pangram.toLocaleUpperCase('tr-TR')

// console.log(Pangram.toLowerCase()); //pi̇jamali hasta yağiz şoföre çabucak güvendi̇
// console.log(Pangram.toLocaleLowerCase()); //pi̇jamali hasta yağiz şoföre çabucak güvendi̇

// // trim
// var s = "                 <-Welcome \t to Clarus\tway->                 "

// console.log(s);

// console.log(s.trim());
// console.log(s.trimLeft());
// console.log(s.trimRight());