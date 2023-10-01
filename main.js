const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(.4)' },
  { transform: 'rotate(720deg) scale(1)' }
];

const aliceTiming = {
  duration: 1000000,
  iterations: 10,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");





// here will be my code

// animating with pyramyd of dooom

function animate_spiral(spiral, callback,){
              // an alternative solution 

              // spiral.animate(aliceTumbling, aliceTiming).onfinish = callback;
   let x = spiral.animate(aliceTumbling, aliceTiming,);
   x.finished.then(() => {
    callback();
   }
    
   )
   
}

animate_spiral( alice1, () => {
  animate_spiral(alice2, () => {
    animate_spiral(alice3,() => {
      console.log("sucsess");
    })
  })
})
// animating with promise chain 

// animatin with  async and await


// alice1.animate(aliceTumbling, aliceTiming,);