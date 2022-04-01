// alert('Peanut Butter Jelly Time!!!');

let inputval = document.querySelector('#cityinput')
let btn = document.querySelector('#add');
let city = document.querySelector('#cityoutput');
let descrip = document.querySelector('#description');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let wdir = document.querySelector('#direction');

let apikey = "3045dd712ffe6e702e3245525ac7fa38";

function convertion(val) {
  return val.toFixed(2)
}

btn.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apikey+'&units=imperial')
  .then(res => res.json())
  .then(data => {
    //Now you need to collect the necessary information with the API link. Now I will collect that information and store it in different const
    let nameval = data['name'];
    let descrip = data['weather']['0']['description'];
    let tempature = data['main']['temp'];
    let wndspd = data['wind']['speed'];
    let deg = data['wind']['deg'];


    //Now with the help of innerHTML you have to make arrangements to display all the information in the webpage.
    city.innerHTML= `Weather for <span>${nameval}</span>`;
    description.innerHTML = `The current weather is ${descrip}`;
    temp.innerHTML = `Temperature: <span>${convertion(tempature)} F</span>`;
    wind.innerHTML = `Wind Speed: <span>${wndspd} mp/h</span>`;
    wdir.innerHTML = `Direction Deg: <span>${deg}</span>`;
    })
  //Now the condition must be added that what if you do not input anything in the input box.
    .catch(err => alert('You entered a wrong city name'))
})



