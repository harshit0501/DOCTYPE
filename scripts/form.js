let packageCost = localStorage.getItem("amount");
let time = localStorage.getItem("subscription");
let package = localStorage.getItem("package");
const name1 = document.querySelector("#name1")
const name2 = document.querySelector("#name2")
const name3 = document.querySelector("#name3")
if(package==1)
{
    name1.classList.remove("hide");
    document.querySelector("#billName1").classList.remove("hide");
}
if(package==2)
{
    name1.classList.remove("hide");
    name2.classList.remove("hide");
    name3.classList.remove("hide");
    document.querySelector("#billName1").classList.remove("hide");
    document.querySelector("#billName2").classList.remove("hide");
    document.querySelector("#billName3").classList.remove("hide");
}
const form = document.querySelector("form");
const body = document.querySelector("body");
const bill = document.querySelector(".bill");

form.addEventListener("submit",async () => {
    body.style.backgroundColor = "white";
    form.style.display = "none";
    const Name = document.querySelector("#name").value;
    const Name1 = document.querySelector("#name1").value;
    const Name2 = document.querySelector("#name2").value;
    const Name3 = document.querySelector("#name3").value;
    const contact = document.querySelector("#contact").value;
    const email = document.querySelector("#email").value;
    const houseN = document.querySelector("#houseN").value;
    const settleN = document.querySelector("#settleN").value;
    const planet = document.querySelector("#planet").value;
    const serTax = (packageCost*2)/100;
    const GST = (packageCost*5)/100;
    const TotCost = (packageCost*107)/100;
    document.querySelector("#billName").textContent = Name;
    document.querySelector("#billNamee").textContent = Name;
    document.querySelector("#billName1").textContent = Name1;
    document.querySelector("#billName2").textContent = Name2;
    document.querySelector("#billName3").textContent = Name3;
    document.querySelector("#billEmail").textContent = email;
    document.querySelector("#billHouseN").textContent = houseN;
    document.querySelector("#billSettleN").textContent = settleN;
    document.querySelector("#billPlanet").textContent = planet;
    document.querySelector("#billHouseN").textContent = houseN;
    document.querySelector("#billContact").textContent = contact;
    document.querySelector("#billCost").textContent = packageCost;
    document.querySelector("#billSerTax").textContent = serTax;
    document.querySelector("#billGST").textContent = GST;
    document.querySelector("#billTotal").textContent = TotCost;
    bill.style.display = "block";
});