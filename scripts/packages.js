let in_color = "#C0FF80";
let co_color = "#09F098";
let fa_color = "#40C040";
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
let in_month = [380, 310, 210, 200, 160, 100];
let in_year = [4500, 3650, 2450, 2320, 1880, 1150];
let co_month = [740, 600, 390, 370, 300, 190];
let co_year = [8760, 7100, 4600, 4380, 3520, 2200];
let fa_month = [1420, 1150, 750, 710, 550, 360];
let fa_year = [16900, 13600, 8900, 8450, 6500, 4200];
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

function SendAmount() {
  let amount;
  for (let k = 0; k < 5; k++) {
    buttony[k].addEventListener("click", function () {
      if (ans === 0) {
        amount = in_year[k];
      } else if (ans == 1) {
        amount = co_year[k];
      } else if (ans == 2) {
        amount = fa_year[k];
      }
      localStorage.setItem("amount", amount);
      localStorage.setItem("package", ans);
      localStorage.setItem("subscription", 0);
       window.location.href = "./form.html";
    });
    buttonm[k].addEventListener("click", function () {
      if (ans === 0) {
        amount = in_month[k];
      } else if (ans == 1) {
        amount = co_month[k];
      } else if (ans == 2) {
        amount = fa_month[k];
      }
      localStorage.setItem("amount", amount);
      localStorage.setItem("package", ans);
      localStorage.setItem("subscription", 1);
      window.location.href = "./form.html";
    });
  }
}
  
SendAmount();