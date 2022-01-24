
const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', kissKiss);

function kissKiss(){
  if(button.value === 'Tell her'){
    button.value = 'About time';
    paragraph.textContent = 'I love you so much and I am thankful for everyday we are together.';
  } else {
    button.value = 'Tell her';
    paragraph.textContent = 'How much do you love your wife?';
  }
};