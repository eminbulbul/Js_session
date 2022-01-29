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

// let i = 0;

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     i++
// }
// console.log(i);

// -----------------------------------------------------------------

// for (; i < 10; i++) {    i disarda tanimlanirsa sanki icinde tanimlanmis gibi basina ; koyulabilir. 
//     console.log(i);
//     i++
// }
// console.log(i);

// let str = 'clarusway'

// console.log(str.length);

// console.log(str[str.length-1]);  //son elemana ulasmak icin kullanilir.

// console.log(str[0]);

// for (let i = 0; i < str.length; i++) {
//     console.log({ i }, str[i]);
// }

// ----------------continue ve break ornekleri ----------------

// for (let i = 0; i <= 100; i++) {
//     if (i % 5 == 0) continue; //5 in katlarini yazdirmadik
//     console.log(i);
// }

// for (let a = 0; a <= 100; a++) {
//     if (a % 5 == 0) break; //5 in ilk katinda donguyu bozar
//     console.log(i);
// }

// while (true) {
//     let x = prompt(`bir sayi giriniz: \n q ile cikis yapiniz`);
//     if (x == `q`) {
//         console.log(`cikis yapildi`);
//         break;
//     } else if (isNaN(x)) {
//         continue;
//     } else {
//         console.log(`${x}'in karesi = ${x*x}`);
//         break; //buraya break yazarak ilk dogru islemden sonra koddan cikariz
//     }
// }
// else icindeki break silinirse q yazana kadar yazilan sayilarin karesi alan bir kod olur



// console.log(Math.random()); //asla 1 olmayacak bir sayi uretir.

// console.log(Math.random()*6+1); //0 dan kurtarmak icin boyle yazdik

// console.log(Math.trunc()); // virgunden sonrasini siler

// console.log(Math.trunc(Math.random()*6)+1); // zar yapmis olduk


// -----------zar yapma oyunu----------------------
let x, y;
let count = 0;
let cift = 0;

while (true) {
    x = Math.trunc(Math.random() * 6) + 1;
    y = Math.trunc(Math.random() * 6) + 1;


    if (x == 6 && y == 6) {
        count++;
        console.log(x, y, 'kazandiniz');
        break;
    } else if (x == y && x != 6) {
        cift++
        console.log(x, y, `${cift}. cift zar`);
        if (cift == 3) {
            console.log('kaybettiniz');
            break;
        }
    }

    console.log(x, y);
    count++
}
console.log(count);