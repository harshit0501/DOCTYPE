let in_color = "#E60000";
let co_color = "#FFFF33";
let fa_color = "#55FFFF";
const data = [
  {
    name: "Platinum",
    description: "The package includes all sports and Spa facility. GalaxoEarth included."
  },
  {
    name: "Gold",
    description: "The package includes all sports except Swimming and Spa. GalaxoEarth included"
  },
  {
    name: "Silver",
    description: "The package includes all sports except Swimming and Spa. GalxoEarth not included"
  },
  {
    name: "Gym and swim Gold",
    description: "The package includes Gym, Spa and Swimming. GalaxoEarth not included",
  },
  {
    name: "gym and swim",
    description: "The package includes Gym, Spa and Swimming. GalaxoEarth not included",
  },
  {
    name: "Gym-only",
    description: "The package includes Gym Only. GalaxoEarth included.",
  }
];
let in_month = [120, 120, 120, 120, 120, 120];
let in_year = [1300, 1300, 1300, 1300, 1300, 1300];
let co_month = [220, 220, 220, 220, 220, 220];
let co_year = [2400, 2400, 2400, 2400, 2400, 2400];
let fa_month = [440, 440, 440, 440, 440, 440];
let fa_year = [4800, 4800, 4800, 4800, 4800, 4800];
let ans = 0;
const header = document.querySelectorAll(".header");
const price = document.querySelectorAll(".price");
const month = document.querySelectorAll("#month");
const year = document.querySelectorAll("#year");
const description = document.querySelectorAll(".description");
const buttonm = document.querySelectorAll(".btn");
const buttony = document.querySelectorAll(".btny");
const cards = document.querySelectorAll(".card");
const buttonIndividual = document.querySelector(".individual");
const buttonCouple = document.querySelector(".couple");
const buttonFamily = document.querySelector(".family");
let i;

for (i = 0; i < 6; i++) {
  header[i].textContent = data[i].name;
  description[i].textContent = data[i].description;
  month[i].textContent = `${in_month[i]}`;
  year[i].textContent = `${in_year[i]}`;
  price[i].style.color = in_color;
  buttonm[i].style.backgroundColor = in_color;
  buttony[i].style.backgroundColor = in_color;
  cards[i].style.borderColor = in_color;
}

buttonCouple.addEventListener("click", function () {
  buttonCouple.classList.add("co_active");
  buttonIndividual.classList.remove("in_active");
  buttonFamily.classList.remove("fa_active");
  ans = 1;
  for (i = 0; i < 6; i++) {
    month[i].textContent = `${co_month[i]}`;
    year[i].textContent = `${co_year[i]}`;
    buttonm[i].style.backgroundColor = co_color;
    buttony[i].style.backgroundColor = co_color;
    cards[i].style.borderColor = co_color;
    price[i].style.color = co_color;
  }
});
buttonIndividual.addEventListener("click", function () {
  buttonCouple.classList.remove("co_active");
  buttonIndividual.classList.add("in_active");
  buttonFamily.classList.remove("fa_active");
  ans = 0;
  for (i = 0; i < 6; i++) {
    month[i].textContent = `${in_month[i]}`;
    year[i].textContent = `${in_year[i]}`;
    buttonm[i].style.backgroundColor = in_color;
    buttony[i].style.backgroundColor = in_color;
    cards[i].style.borderColor = in_color;
    price[i].style.color = in_color;
  }
});
buttonFamily.addEventListener("click", function () {
  buttonCouple.classList.remove("co_active");
  buttonIndividual.classList.remove("in_active");
  buttonFamily.classList.add("fa_active");
  ans = 2;
  for (i = 0; i < 6; i++) {
    month[i].textContent = `${fa_month[i]}`;
    year[i].textContent = `${fa_year[i]}`;
    buttonm[i].style.backgroundColor = fa_color;
    buttony[i].style.backgroundColor = fa_color;
    cards[i].style.borderColor = fa_color;
    price[i].style.color = fa_color;
  }
});
