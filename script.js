// intialize the count as 0
let count = 0;
let countEl = document.querySelector('#count-el');
let saveEl = document.querySelector('#save-el');
let welcomeEl = document.querySelector('#welcome-el');

// increment the count variable when the button is clicked
function increment() {
  count += 1;
  countEl.textContent = count;
}

//create save function which logs out the count when it's called
function save() {
  let saveEntry = count +" - ";
  saveEl.textContent += saveEntry;
  countEl.textContent = 0;
  count = 0;
}


