// alert('Peanut Butter Jelly Time!!!');

// create global vars
const textarea = document.querySelector('textarea');
const counter = document.querySelector('.counter');

// run on keyup
function countChar() {
  const text = textarea.value;
  const textLength = textarea.value.length;
  counter.innerText = `${textLength}`;
 }