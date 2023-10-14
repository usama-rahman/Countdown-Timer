const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const gineaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate =  new Date(2023, 11, 14, 6, 30 ,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
let month = futureDate.getMonth();
month = months[month];

gineaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}pm`;

const futureTime = futureDate.getTime();
 
function getRemainTime (){
  const today = new Date().getTime();
  const t = futureTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const value = [days, hours, minutes, seconds];

  function format(item){
    if(item < 10){
      return item = `0${item}`
    }
    return item;
  }

  items.forEach(function(item, index){
    item.innerHTML = format(value[index]);
  });

  if(t< 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry!!</h4>`
  }

}
let countdown = setInterval(getRemainTime, 1000)
getRemainTime();
