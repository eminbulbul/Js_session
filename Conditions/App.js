//conditions

//let score = 51;


//kullanicidan deger aldik.
// let score = prompt('Notunuzu girin : ')



// let grade = score >= 50

// if (grade) {
//     console.log(`Tebrikler, notunuz ${score} gectiniz`);
//     //tek if bloklarinda suslu parantezler silinebilir.
// }

//eger yukaridaki if calismazsa alttaki calisir
// console.log('kod sonu');

// if (grade) {
//     console.log(`Tebrikler, notunuz ${score} gectiniz`);
// } else {
//     console.log('uzgunum kaldiniz');
// }
// --------------------------------------------------------
// let score = 75

// if (score > 80) {
//     console.log('Tebrikler cok basirilisiniz');

// } else if (score >= 50) {
//     console.log(`tebrikler notunuz ${score} gectiniz`);
// } else {
//     console.log('uzgunum kaldiniz');
// }
// ----------------------------------------------------------------
// let score = 49

// if (score >= 50) {
//     if (score > 80) {
//         console.log('Tebrikler cok basirilisiniz');
//     } else {
//         console.log('Tebrikler gectiniz');
//     }
// } else {
//     console.log('uzgunum kaldiniz');
// }
//yukaridaki ile ayni islem yapilir. nested if kullanilarak yapildi.
// ------------------------------------------------------------------------

//Ternary if else

// var score = 52;

// score >= 50 ? console.log('Tebrikler gectiniz') : console.log('uzgunum kaldiniz');

// soru isareti (?) ise demek ':' dan sonra else conditions yazilir

// score >= 50 ? console.log('Tebrikler cok basirilisiniz') : 
// (console.log('Tebrikler gectiniz'):console.log('uzgunum kaldiniz');
//nested ternary, okumayi zorlastirdigi icin tavsiye edilmiyor.

// ---------------------------------------------------------------------

//Switch yapisi

var text;
// var fruits = 'lemon'

// toLowercase yada toUppercase verdigimiz stringin icerisindeki butun ifadeleri kucuk veya buyuk harfle yapar

//burada or and ifadeleri calismaz.

// var fruits = prompt("Enter your favarite fruit :")

// switch (fruits.toLowerCase()) {
//     case "banana":
//         text = "Banana is good"
//         break;

//     case "lime":
//     case "lemon": //buraya ayni sonucu cikaracak farkli kosullari ekleyebiliriz
//     case "orange":
//         text = `I am not fan of ${fruits.toLowerCase()}.`;
//         break;
//     case "apple":
//         text = " How you like them apples";
//         break;

//     default:
//         text = " I have never heard of that fruit...";
//         break;
// }
// console.log(text);

//
// ---------------------Ders ici alistirma-----------------------------------
var text;


var gun = prompt("Enter your day :")

switch (gun.toLowerCase()) {
    case "pazartesi":
    case "carsamba":
    case "persembe":
    case "cumartesi":
        text = ` ${gun.toLowerCase()} gunu ders var.`;
        break;
    case "sali":
    case "cuma":
        text = ` ${gun.toLowerCase()} gunu teamwork var.`;
        break;
    case "pazar":
        text = ` ${gun.toLowerCase()} gunu tatil var.`;
        break;

    default:
        text = " Yanlsi gun girildi";
        break;
}
console.log(text);

//