//loops

//while
// let i = 10;
// let sum = 0;


// while (i < 6) {
//     sum += i
//     i++
// }
// console.log(sum);

//pythontutor sitesi kodu gorsellestirir.

//do while

// do {
//     sum = +i
//     i++
// } while (i < 6);
// console.log({ sum }, { i });

// ------------------------------------------------------------

// let i = +prompt('bir sayi giriniz : ')


//prompt onune koyan + degeri number yapar.
// console.log(isNaN(i), { i });
//isNaN sayisi icerideki degerin sayi mi olup olmadigini kontrol eder. Sayi degil ise true verir.


// while (isNaN(i)) {
//     i = +prompt('bir sayi giriniz : ')
// }
// console.log('Bir sayi girdiniz');
// ----------------------------------------------------------------------

// let i;
// do {
//     i = +prompt('bir sayi giriniz : ')
// } while (isNaN(i));
// console.log(`girilen deger ${i}`);

// sayi girilene kadar kullanicidan girdi ister
// ---------------------------------------------------

//for

let i = 0;

for (let i = 0; i < 10; i++) {
    console.log(i);
    i++
}
console.log(i);

// for (; i < 10; i++) {    i disarda tanimlanirsa sanki icinde tanimlanmis gibi basina ; koyulabilir. 
//     console.log(i);
//     i++
// }
// console.log(i);