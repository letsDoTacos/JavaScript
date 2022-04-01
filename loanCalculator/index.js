// alert('Peanut Butter Jelly Time!!!');

function computeLoan() {
   const amount = document.querySelector('#amount').value;
   const interest_rate = document.querySelector('#intrest_rate').value;
   const months = document.querySelector('#months').value;

   const interest = (amount * (interest_rate * 0.01)) / months;

  //  calculate payment w/ to 2 decimal points
  let payment = ((amount / months) + interest).toFixed(2);

  //  add a comma after ever 3rd diget
  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 

  //  innerHTML fto display info
  document.querySelector('#payment').innerHTML = `Monthly Payment = ${payment}`
}