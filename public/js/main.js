const cityName = document.getElementById("cityname");
const submittionButton = document.getElementById("submitbutton");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp_real_value = document.getElementById("temp_real_value");
const dataHide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault(); //After calling this method, our page is reloading to get back to it's oroginal state, to prevent this we are using this inbuilt method.

  let cityVal = cityName.value; //To get the value typed in cityName field and store it in cityVal variable.

  if (cityVal === "") {
    city_name.innerText = "Please type a city name before searching";
    dataHide.classList.add("data_hide");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a00f5f8e7b6dde498c26fead03b0e53d`;
      const response = await fetch(url);
      const data = await response.json();
      const arr = [data];

      city_name.innerText = `${arr[0].name}, ${arr[0].sys.country}`;
      temp_real_value.innerText = arr[0].main.temp;
      temp_status.innerText = arr[0].weather[0].main;

      const tempType = arr[0].weather[0].main;

      if (tempType == "Sunny") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68'></i>";
      } else if (tempType == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color: #f1f2f6'></i>";
      } else if (tempType == "Rainy") {
        temp_status.innerHTML =
          "<i class='fas fa-rain' style='color: #a4b0be'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68'></i>";
      }
      dataHide.classList.remove("data_hide");
    } catch (error) {
      city_name.innerText = "Please enter a valid city name before searching";
      dataHide.classList.add("data_hide");
    }
  }
};

submittionButton.addEventListener("click", getInfo);



//codes for displaying date/month/year on the weather page

let day = document.getElementById("day");
let date = document.getElementById("today_date");

let currentDay = new Date();

const getcurrentDay = () => {
    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let weekday = weekdays[currentDay.getDay()];
    day.innerText = weekday;
};

const getcurrentMonth = () => {
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
    let month = months[currentDay.getMonth()];
    let day = currentDay.getDate();
    let year = currentDay.getFullYear();

    date.innerText = `${day} / ${month}/ ${year}`;
};

getcurrentDay();
getcurrentMonth();