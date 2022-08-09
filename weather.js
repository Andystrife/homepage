// //Declaring Global Variables

const input = document.querySelector("#input");
const city = document.querySelector("#city");
const cityName = document.querySelector("#cityName");
const temp = document.querySelector("#temp");
const feelsLike = document.querySelector("#feelsLike");
const humidity = document.querySelector("#humidity");
const description = document.querySelector(".description");
const image = document.querySelector("#image");
const wind = document.querySelector("#wind");

//API Call

function getLocation() {
  //Get Location from LocalStorage if user city previously was not found
  let localLocation = localStorage.getItem("location");
  if ("location" in localStorage) {
    const xhr2 = new XMLHttpRequest();
    xhr2.open("GET", localLocation);
    xhr2.send();
    xhr2.onload = () => {
      if (xhr2.status === 404) {
        alert("City Not Found");
      } else {
        //Populate Weather Data with User Entered City
        let data = JSON.parse(xhr2.response);
        cityName.innerHTML =
          "<h3>" + data.name + ", " + data.sys.country + "</h3>";
        temp.innerHTML = data.main.temp + "&degC";
        feelsLike.innerHTML = "Feels Like: " + data.main.feels_like + "&degC";
        humidity.innerHTML = "Humidity: " + data.main.humidity + "%";
        wind.innerHTML = "Wind: " + data.wind.speed + "km";
        description.innerHTML = data.weather[0].description;
        image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      }
    };
  } else {
    //Auto Grab Users Latitude and Longitude
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
          let geoLocation =
            "https://api.openweathermap.org/geo/1.0/reverse?lat=" +
            lat +
            "&lon=" +
            long +
            "&appid=4bfb47c0e3acabe02ac133ba217c3ff6";

          const xhr1 = new XMLHttpRequest();

          xhr1.open("GET", geoLocation);
          xhr1.send();
          xhr1.onload = () => {
            if (xhr1.status === 404) {
              alert("City Not Found");
            } else {
              //Get Name of City and Country from Latitude/Longitude
              let data = JSON.parse(xhr1.response);
              let cityTest = data[0].name;
              let countryTest = data[0].country;

              weatherUpdate = () => {
                const xhr = new XMLHttpRequest();

                let currentLocation =
                  "https://api.openweathermap.org/data/2.5/weather?q=" +
                  cityTest +
                  "," +
                  countryTest +
                  "&appid=4bfb47c0e3acabe02ac133ba217c3ff6&units=metric";
                xhr.open("GET", currentLocation);
                xhr.send();
                xhr.onload = () => {
                  if (xhr.status === 404) {
                    alert("City Not Found");
                    //If City Cannot be Found, User Enters Closest Large City
                    let addCity = prompt(
                      "Enter Closest City (e.g: Toronto, CA)"
                    );
                    let currentLocation =
                      "https://api.openweathermap.org/data/2.5/weather?q=" +
                      addCity +
                      "&appid=4bfb47c0e3acabe02ac133ba217c3ff6&units=metric";
                    console.log(addCity);
                    const xhr2 = new XMLHttpRequest();
                    xhr2.open("GET", currentLocation);
                    xhr2.send();
                    xhr2.onload = () => {
                      if (xhr2.status === 404) {
                        alert("City Not Found");
                      } else {
                        //Add User Entered Location into Local Storage
                        localStorage.setItem("location", currentLocation);
                        //Populate Weather Data with User Entered City
                        let data = JSON.parse(xhr2.response);
                        cityName.innerHTML =
                          "<h3>" +
                          data.name +
                          ", " +
                          data.sys.country +
                          "</h3>";
                        temp.innerHTML = data.main.temp + "&degC";
                        feelsLike.innerHTML =
                          "Feels Like: " + data.main.feels_like + "&degC";
                        humidity.innerHTML =
                          "Humidity: " + data.main.humidity + "%";
                        wind.innerHTML = "Wind: " + data.wind.speed + "km";
                        description.innerHTML = data.weather[0].description;
                        image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                      }
                    };
                  } else {
                    //Populate Weather Data with Location AutoGrab
                    let data = JSON.parse(xhr.response);
                    cityName.innerHTML =
                      "<h3>" + data.name + ", " + data.sys.country + "</h3>";
                    temp.innerHTML = data.main.temp + "&degC";
                    feelsLike.innerHTML =
                      "Feels Like: " + data.main.feels_like + "&degC";
                    humidity.innerHTML =
                      "Humidity: " + data.main.humidity + "%";
                    wind.innerHTML = "Wind: " + data.wind.speed + "km";
                    description.innerHTML = data.weather[0].description;
                    image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                  }
                };
              };
              weatherUpdate();
            }
          };
        },
        null,
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
}

getLocation();
