//* ======================================================
//*                    CALLBACK
//* ======================================================

//* A callback function is a function that is passed as an argument
//* to another function, to be "called back" at a later time.
//* A function that accepts other functions as arguments is called
//* a higher-order function.

//* A callback function always has a specific action which is bound
//* to a specific circumstance. Therefore, a callback function is
//* only called once a clearly defined operation has been performed.
//? Callbacks make sure that a function is not going to run before
//? a task is completed but will run right after the task has completed.

//! 1- Event handlers are a good example of a type of callback function.
//!--------------------------------------------------------------------

// const increment = () =>{
//  const counter = document.querySelector('#counter')
//  counter.textContent = Number(counter.textContent) + 1;
// };

// document.querySelector('button').addEventListener('click',increment);

document.querySelector('button').addEventListener('click',()=>{
    const counter = document.querySelector('#counter')
    counter.textContent = Number(counter.textContent) + 1;
});

// increment() we acces func from here. we dont want this