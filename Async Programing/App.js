//

// let id =  setTimeout(() => {
//     console.log('asynch programming is amazing');
// }, 4000);

// console.log(id);
// clearTimeout(id); //islemi durdurduk.
// console.log('contiuning....');


// let id2 =  setTimeout(() => {
//     console.log('asynch programming is amazing');
// }, 4000);

// console.log(id2);

//? Example

const slowTask = ()=>{
    let i =0;
    let result ={firstName:'john',LastName:'Doe'};
    do{
        i++
        //some long operation
    }while(i<1_000_000_000);
    return result;
};

function wait(ms) { //this func for wait bekletme fonksiyonu 
    const start = new Date().getTime();
    let end = start;
    while (end < start +ms) {
        end = new Date().getTime();
    }
}


// console.log('» A..1');
// wait(3000); // 1 second wait
// console.log('» ...2');
// // setTimeout(() => {
// //   let res = slowTask();
// //   console.log(res);
// // });
// alert('!');
// console.log('» ...3');
// console.log('» ...4');

// console.time();
// slowTask();
// console.timeEnd();

// //? synchronous example
// console.time('»» olc');
// console.timeLog('»» olc');
// console.log('hello');
// wait(1500);
// console.timeLog('»» olc');
// console.log('world');
// console.timeEnd('»» olc');

//? timeout example
// console.time('»» time elapsed');
// setTimeout(() => {
//   console.warn('this message is printed after 2 seconds');
//   console.timeEnd('»» time elapsed');
// }, 2000);
// wait(2000);
// console.timeLog('»» time elapsed');

//? another example
console.time('»» setTimeout example');
console.timeLog('»» setTimeout example');
setTimeout(() => {
  console.warn('this is the third message');
  console.timeLog('»» setTimeout example');
}, 3000);
setTimeout(() => {
  slowTask();
  console.error('this is the first message');
  console.timeLog('»» setTimeout example');
}, 1000);
setTimeout(() => {
  console.warn('this is the second message');
  console.timeLog('»» setTimeout example');
}, 2000);