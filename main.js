const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(.4)' },
  { transform: 'rotate(720deg) scale(1)' }
];

const aliceTiming = {
  duration: 1000,
  iterations: 10,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");





// here will be my code

// animating with pyramyd of dooom

// function animate_spiral(spiral, callback,){
//               // an alternative solution 

//               // spiral.animate(aliceTumbling, aliceTiming).onfinish = callback;
//    let x = spiral.animate(aliceTumbling, aliceTiming,);
//    x.finished.then(() => {
//     callback();
//    }
    
//    )
   
// }

// animate_spiral( alice1, () => {
//   animate_spiral(alice2, () => {
//     animate_spiral(alice3,() => {
//       console.log("sucsess");
//     })
//   })
// })

// animating with promise chain 

// function animate_spiral(alice1){
//   let x = alice1.animate(aliceTumbling, aliceTiming,);
//   x.finished.then(animate_spiral(alice2)).then(animate_spiral(alice3));
// }

//   animate_spiral();

  function animate_obj_fx(spiral){
    let animate_obj = spiral.animate(aliceTumbling, aliceTiming);
    return(animate_obj);
  }

  

  animate_obj_fx(alice1).finished.then( () => animate_obj_fx(alice2).finished.then( () => animate_obj_fx(alice3)));
  


// animatin with  async and await


// alice1.animate(aliceTumbling, aliceTiming,);