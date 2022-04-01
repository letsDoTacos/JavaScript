// alert('Peanut Butter Jelly Time!!!');

const hours = document.querySelector('.hours');
// console.log(hours);
const minuets = document.querySelector('.minuets');

const seconds = document.querySelector('.seconds');

const month = document.querySelector('.month');
const day = document.querySelector('.day');
const year = document.querySelector('.year');
// console.log(year);

function setDate() {

  
  // newDate method get the current time from the device 
  const now = new Date();
  // now you can uwe the info; month, day and year from the device 

  const mm = now.getMonth();
  // console.log(mm);
  const dd = now.getDate();
  // console.log(dd);
  const yyyy = now.getFullYear();
  // console.log(yyyy);

  // info for hrs, mins secs
  const hrs = now.getHours();
  // console.log(hrs);
  const mins = now.getMinutes();
  // console.log(mins);
  const secs = now.getSeconds();
  // console.log(secs);
 

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
    // console.log(hrs);
  }

  if (mins < 10) {
    minuets.innerHTML = '0' + mins;
  } else {
    minuets.innerHTML = mins;
    // console.log(mins);
  }

  if (secs < 10) {
    seconds.innerHTML = '0' + secs;
  } else {
    seconds.innerHTML = secs;
  }

  // date
  month.innerHTML = monthName[mm];
  day.innerHTML = dd;
  year.innerHTML = yyyy;
};

setInterval(setDate, 1000);