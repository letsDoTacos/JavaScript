// alert('taco time!!');

const hours = document.querySelector('hours');
// console.log(hours);
const minuets = document.querySelector('minuets');
// console.log(minuets);
const seconds = document.querySelector('seconds');
// console.log(seconds);

const month = document.querySelector('month');
// console.log(month);
const day = document.querySelector('day');
// console.log(month);
const year = document.querySelector('years');
// console.log(year);


function setDate() {

  
  // newDate method get the current time from the device 
  const now = new Date();
  // now you can uwe the info; month, day and year from the device 

  const mm = now.getMonth();
  const dd = now.getDate();
  const yyyy = now.getFullYear();
  // console.log(yyyy);

  // info for sec, mins and hrs
  const secs = now.getSeconds();
  const mins = now.getMinutes();
  const hrs = now.getHours();
  // console.log(hrs);

  // months
  const monthName = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'];
  

  // Add a zero when the time is below 10
  if (hrs < 10) {
    hours.innerHTML = '0' + hrs;
  } else {
    hours.innerHTML = hrs;
  }

  if(secs < 10) {
    seconds.innerHTML = '0' + secs;
  } else {
    seconds.innerHTML = secs;
  }
  if(mins < 10) {
    minuets.innerHTML = '0' + secs;
  } else {
    minuets.innerHTML = secs;
  }
  // date
  month.innerHTML = monthName[mm];
  day.innerHTML = dd;
  year.innerHTML = yyyy;
}

setInterval(setDate, 1000);