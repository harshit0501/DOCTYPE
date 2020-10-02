let colors = ["#FFFF33", "#FF0000", "#00FF00", "#00FFFF", "#FF00FF", "#FF6600"];
const data = [
  {
    name: "Platinum",
    description: "This is the mega package with all sports included. Both with Earth like gravity and normal gravity",
    price: '5000/month',
  },
  {
      name: "Gold",
      description: "This Package includes the sports with only Earth Like gravity",
      price: "3500/month",
  },
  {
      name: "Bronze",
      description: "This Package includes the sports with only normal gravity",
      price: "2500/month",
  },
  {
      name: "Gym-only",
      description: "This package includes Gym and spa",
      price: "1000/month",
  },
  {
      name: "swim and gym",
      description: "This package includes Gym, spa and swimming pool",
      price: "1500/month"
  },
  {
      name: "kids package",
      description: "This package includes football, basketball, and badminton",
      price: "1000/month",
  },
  
];
const header = document.querySelectorAll(".header");
const price = document.querySelectorAll(".price");
const description = document.querySelectorAll(".description");
const button = document.querySelectorAll('.btn');
const cards = document.querySelectorAll('.card');
let i;
for(i = 0; i < 6; i++) {
    
    header[i].textContent = data[i].name;
    description[i].textContent = data[i].description;
    price[i].textContent = data[i].price;
    price[i].style.color = colors[i];
    button[i].style.backgroundColor = colors[i];
    cards[i].style.borderColor = colors[i];
}

