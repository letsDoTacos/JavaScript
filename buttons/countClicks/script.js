
const button = document.querySelector("input");
const pargraph = document.querySelector("p");

button.addEventListener("click", clickCount)

var count = 0;
function clickCount(){
  count = parseInt(count) + parseInt(1);
  var divData = document.getElementById("showCount");
  divData.innerHTML = `Number of clicks: ${count}`;
}
 



