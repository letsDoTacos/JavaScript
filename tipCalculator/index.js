// alert('Peanut Butter Jelly Time!!!');

// global const
const form = document.getElementById("form");
const totalBill = document.getElementById("bill");
const totalPeople = document.getElementById("people");
const tipPercentage = document.getElementById("percentage");
const percentageOutput = document.getElementById("percentage-output");
const output = document.getElementById("output");

  // event listeners
  form.addEventListener("change", calculateTip);
  tipPercentage.oninput = calculateTip;

//I have added a manual formula to calculate the tip in the "calculate Tip" function.
function calculateTip() {
  //Manual tip calculation formula stored in "dollar suPerPerson" constant
   const dollarsPerPerson = (
     (totalBill.value * (tipPercentage.value / 100)) /
     totalPeople.value
   ).toFixed(2); //The toFixed() method converts a number to a string.

   displayTip(`$${dollarsPerPerson}`);
   displayPercentage();
 }

//  edge case number of people
function displayTip(totalPerPerson) {
  output.innerText =
    totalPeople.value > 1
      ? `Each person should tip ${totalPerPerson}`
      : `You should tip ${totalPerPerson}`;
}

// display 
function displayPercentage() {
  percentageOutput.innerText = `${tipPercentage.value}%`;
}

// on load
calculateTip