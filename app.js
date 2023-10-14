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
const deadlineformat = document.querySelectorAll(".deadline-format h4");

let futureDate =  new Date(2023, 10, 29, 6, 30 ,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

gineaway.textContent = `giveaway ends on ${year} ${hours}:${minutes}pm`;
 