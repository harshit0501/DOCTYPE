let packageCost = localStorage.getItem("amount");
let time = localStorage.getItem("subscription");
let package = localStorage.getItem("package");
const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const name3 = document.querySelector("#name3");
if (package == 2) {
  name1.classList.remove("hide");
}
if (package == 3) {
  name1.classList.remove("hide");
  name2.classList.remove("hide");
}
if (package == 4) {
  name1.classList.remove("hide");
  name2.classList.remove("hide");
  name3.classList.remove("hide");
}
const form = document.querySelector("form");
const body = document.querySelector("body");
const bill = document.querySelector(".bill");

form.addEventListener("submit", () => {
  const Name = document.querySelector("#name").value;
  const Name1 = document.querySelector("#name1").value;
  const Name2 = document.querySelector("#name2").value;
  const Name3 = document.querySelector("#name3").value;
  const contact = document.querySelector("#contact").value;
  const email = document.querySelector("#email").value;
  const houseN = document.querySelector("#houseN").value;
  const settleN = document.querySelector("#settleN").value;
  const planet = document.querySelector("#planet").value;
  const serTax = (packageCost * 2) / 100;
  const GST = (packageCost * 5) / 100;
  const TotCost = (packageCost * 107) / 100;
  localStorage.setItem("amount", packageCost);
  localStorage.setItem("package", time);
  localStorage.setItem("package", package);
  localStorage.setItem("Name", Name);
  localStorage.setItem("Name1", Name1);
  localStorage.setItem("Name2", Name2);
  localStorage.setItem("Name3", Name3);
  localStorage.setItem("contact", contact);
  localStorage.setItem("email", email);
  localStorage.setItem("houseN", houseN);
  localStorage.setItem("settleN", settleN);
  localStorage.setItem("planet", planet);
  localStorage.setItem("serTax", serTax);
  localStorage.setItem("GST", GST);
  localStorage.setItem("TotCost", TotCost);
  window.location.href = "./bill.html";
});
