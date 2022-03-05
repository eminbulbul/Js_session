//

let id =  setTimeout(() => {
    console.log('asynch programming is amazing');
}, 4000);

console.log(id);
clearTimeout(id); //islemi durdurduk.
console.log('contiuning....');


let id2 =  setTimeout(() => {
    console.log('asynch programming is amazing');
}, 4000);

console.log(id2);