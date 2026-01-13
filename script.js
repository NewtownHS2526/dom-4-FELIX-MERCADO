let totalInCents = 0;

const popcorn = document.querySelector("#popcorn");
const soda = document.querySelector("#soda");
const candy = document.querySelector("#candy");
const nachos = document.querySelector("#nachos");
const icecream = document.querySelector("#icecream");

const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");

const updateTotal = () => {
  totalSpan.innerHTML = totalInCents / 100;
};

const addSticker = () => {
  shoppingCart.innerHTML += `<p>Popcorn</p>`;
  totalInCents += 450;
  updateTotal()
};
popcorn.addEventListener("click", addSticker);

const addKeychain = () => {
  shoppingCart.innerHTML += `<p>Soda</p>`;
  totalInCents += 250;
  updateTotal()
};
soda.addEventListener("click", addKeychain);

const addPlush = () => {
  shoppingCart.innerHTML += `<p>Candy</p>`;
  totalInCents += 175;
  updateTotal()
};
candy.addEventListener("click", addPlush);

const addComic = () => {
  shoppingCart.innerHTML += `<p>Nachos</p>`;
  totalInCents += 500;
  updateTotal()
};
nachos.addEventListener("click", addComic);

const addMystery = () => {
  shoppingCart.innerHTML += `<p>Ice Cream</p>`;
  totalInCents += 325;
  updateTotal()
};
    
icecream.addEventListener("click", addMystery);