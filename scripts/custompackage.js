let data = [
  "Basketball",
  "Lawn Tennis",
  "Table Tennis",
  "Squash",
  "Jogging Track",
  "Cricket",
  "Football",
  "Gym",
  "Swimming Pool",
  "Lightsaber Dual",
  "Quidditch",
  "Space Hockey",
  "Space Wrestle",
  "Golf",
  "Badminton",
  "Baseball",
  "Boxing",
  "Volleyball",
  "Hockey",
  "Rugby",
  "Ice Hockey",
  "Archery",
  "Yoga",
  "Skateboarding",
  "Spa",
];
let cost = [
  170,
  170,
  170,
  170,
  150,
  120,
  120,
  170,
  170,
  100,
  120,
  120,
  120,
  120,
  170,
  100,
  120,
  100,
  120,
  120,
  100,
  120,
  120,
  120,
  200,
];
const display = document.querySelector(".cuContainer");

for (let i = 0; i < data.length; i++) {
  let listItem = `<li> <span class="cuName">${data[i]}</span><span class="cuCost">$${cost[i]}</span><span><i class="fa fa-plus"></i> <span><i class="fa fa-minus hide" ></i></span> </li>`;
  display.innerHTML += listItem;
}

const plusButton = document.querySelectorAll(".fa-plus");
const minusButton = document.querySelectorAll(".fa-minus");
const list = document.querySelectorAll(".cuContainer li");
const cuPackSel = document.querySelector("#cuPackSel");
const cuPackTotCost = document.querySelector("#cuPackTotCost");
const monthInp = document.querySelector("#cuNoMonth");
const memberInp = document.querySelector("#cuNoMember");
const cuCostText = document.querySelector("#cuCostText");
const cuExpand = document.querySelector("#cuExpand");
const cuFooter = document.querySelector("#cuFooter");

let totalCost = 0;
let packSel = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
let packSelStr = "";
let noMember = 1;
let noMonth = 1;
let multiplier = 1;

for (let k = 0; k < plusButton.length; k++) {
  plusButton[k].addEventListener("click", () => {
    list[k].classList.add("cuSelected");
    plusButton[k].classList.add("hide");
    minusButton[k].classList.remove("hide");
    totalCost += cost[k];
    packSel[k] = true;
    packSelStr = "";
    for (let j = 0; j < data.length; j++) {
      if (packSel[j] == true) packSelStr += `${data[j]}, `;
    }
    packSelStr = packSelStr.slice(0, packSelStr.length - 2);
    cuPackSel.innerHTML = packSelStr;
    cuPackTotCost.innerHTML = `$${totalCost * multiplier}`;
  });
}
for (let k = 0; k < minusButton.length; k++) {
  minusButton[k].addEventListener("click", () => {
    list[k].classList.remove("cuSelected");
    minusButton[k].classList.add("hide");
    plusButton[k].classList.remove("hide");
    totalCost -= cost[k];
    packSel[k] = false;
    packSelStr = "";
    for (let j = 0; j < data.length; j++) {
      if (packSel[j] == true) packSelStr += `${data[j]}, `;
    }
    packSelStr = packSelStr.slice(0, packSelStr.length - 2);
    cuPackSel.innerHTML = packSelStr;
    cuPackTotCost.innerHTML = `$${totalCost * multiplier}`;
  });
}
let memPlu = "";
let monPlu = "";
memberInp.addEventListener("change", () => {
  noMember = memberInp.value;
  if(noMember>4) 
  {
    noMember=4;
    memberInp.value=4;
  }
  if(noMember<1) 
  {
    noMember=1;
    memberInp.value=1;
  }
  if (noMember > 1) memPlu = "s";
  else memPlu = "";
  if (noMonth > 1) monPlu = "s";
  else monPlu = "";
  cuCostText.textContent = `(For ${noMember} Member${memPlu} For ${noMonth} Month${monPlu}.)`;
  multiplier = noMember * noMonth;
  cuPackTotCost.innerHTML = `$${totalCost * multiplier}`;
});
monthInp.addEventListener("change", () => {
  noMonth = monthInp.value;
  if(noMonth>12) 
  {
    noMonth=12;
    monthInp.value=12;
  }
  if(noMonth<1) 
  {
    noMonth=1;
    monthInp.value=1;
  }
  if (noMember > 1) memPlu = "s";
  else memPlu = "";
  if (noMonth > 1) monPlu = "s";
  else monPlu = "";
  cuCostText.textContent = `(For ${noMember} Member${memPlu} For ${noMonth} Month${monPlu}.)`;
  multiplier = noMember * noMonth;
  cuPackTotCost.innerHTML = `$${totalCost * multiplier}`;
});

const book = document.querySelector("#cuBook");

book.addEventListener("click", () => {
  localStorage.setItem("amount", totalCost * multiplier);
  localStorage.setItem("package", noMember);
  localStorage.setItem("subscription", noMonth);
  localStorage.setItem("packageType", `Custom (${packSelStr})`);
  window.location.href = "./form.html";
});

const displayr = document.querySelectorAll(".cuInputs");

cuExpand.addEventListener("click",() => {
  cuExpand.classList.add("hide")
  cuFooter.style.maxHeight = "280px";
})
display.addEventListener("click",() => {
  cuExpand.classList.remove("hide")
  cuFooter.style.maxHeight = "0";
});

for(let m=0; m<displayr.length; m++)
{
  displayr[m].addEventListener("click",() => {
    cuExpand.classList.remove("hide")
    cuFooter.style.maxHeight = "0";
  });
}

