const currentDate = document.querySelector("#currentDate");
const current = new Date();
const dateNow = document.querySelector("#dateClock");
const time = document.querySelector("#timeClock");

let daysList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let monthsList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Aug",
  "Oct",
  "Nov",
  "Dec",
];
//Get Current Day/Date/Month/Year
let date = current.getDate();
let month = monthsList[current.getMonth()];
let year = current.getFullYear();
let day = daysList[current.getDay()];

let todayClock = `${day} ${month} ${date} ${year} `;

dateNow.innerHTML = `<h3>` + todayClock + `</h3>`;

//Display Current Time
function showTime() {
  let currentTime = new Date();
  let h = currentTime.getHours();
  let m = currentTime.getMinutes();
  let s = currentTime.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 00;
  }
  if (h >= 12) {
    session = "PM";
  }

  if (h < 10) {
    h = "0" + h;
  }

  if (m < 10) {
    m = "0" + m;
  }

  if (s < 10) {
    s = "0" + s;
  }

  let actualTime = h + ":" + m + ":" + s + " " + session;

  time.innerHTML = `<h3>` + actualTime + `</h3>`;

  setTimeout(showTime, 1000);
}

showTime();
