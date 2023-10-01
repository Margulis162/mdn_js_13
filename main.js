const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(.7)' },
  { transform: 'rotate(720deg) scale(1)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: Infinity,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");


alice1.animate(aliceTumbling, aliceTiming,);