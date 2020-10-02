
const data = [
  {
    name: "Platinum",
    description: "This is the mega package with all sports included. Both with Earth like gravity and normal gravity",
    price: '5000/month',
  },
  {
      name: "Gold",
      description: "description",
      price: "3500/month",
  },
  {
      name: "Bronze",
      description: "description",
      price: "2500/month",
  },
  {
      name: "Gym-only",
      description: "description",
      price: "1000/month",
  },
  {
      name: "swim and gym",
      description: "description",
      price: "1500/month"
  },
  {
      name: "kids package",
      description: "description",
      price: "1000/month",
  },
  
];
const header = document.querySelectorAll(".header");
const price = document.querySelectorAll(".price");
const description = document.querySelectorAll(".description");

let i;
for(i = 0; i < 6; i++) {
    
    header[i].textContent = data[i].name;
    description[i].textContent = data[i].description;
    price[i].textContent = data[i].price;
}



