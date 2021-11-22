const text = document.querySelector(".text");
const submit = document.querySelector(".btn");
const span = document.querySelector("h1");
console.log(span);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  maskifyIt();
});

const maskifyIt = () => {
  let getText = text.value;
  let jeez = [...getText];
  console.log(typeof jeez);
  if (getText.length > 4) {
    for (let i = 0; i < jeez.length - 4; i++) {
      jeez[i] = "#";
    }
  }
  span.innerText = jeez.join("");
};
function maskify(userInput) {
  let jax = [...userInput];
  if (userInput.length > 4) {
    for (let i = 0; i < jax.length - 4; i++) {
      jax[i] = "#";
    }
  }
  return jax.join("");
}
console.log(maskify("information"));
