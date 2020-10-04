let packageCost = localStorage.getItem("amount");
let time = localStorage.getItem("subscription");
let package = localStorage.getItem("package");
let Name    = localStorage.getItem("Name");
let Name1   = localStorage.getItem("Name1");
let Name2   = localStorage.getItem("Name2");
let Name3   = localStorage.getItem("Name3");
let contact = localStorage.getItem("contact");
let email   = localStorage.getItem("email");
let houseN  = localStorage.getItem("houseN");
let settleN = localStorage.getItem("settleN");
let planet  = localStorage.getItem("planet");
let serTax  = localStorage.getItem("serTax");
let GST     = localStorage.getItem("GST");
let TotCost = localStorage.getItem("TotCost");
let packageType = localStorage.getItem('packageType');
if(package==2)
{
    document.querySelector("#billName1").classList.remove("hide");
}
if(package==3)
{
    document.querySelector("#billName1").classList.remove("hide");
    document.querySelector("#billName2").classList.remove("hide");
}
if(package==4)
{
    document.querySelector("#billName1").classList.remove("hide");
    document.querySelector("#billName2").classList.remove("hide");
    document.querySelector("#billName3").classList.remove("hide");
}
let d = new Date();
let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
let endDate;
time = Number(time);
if(month+time+1>12)
{
    let x = (month+time+1)%12;
    endDate = `${date}/${x}/${year+1}`
}
else{
    endDate = `${date}/${(month+time+1)}/${year}`
}
document.querySelector("#billStartDate").textContent = `${date}/${month+1}/${year}`;
document.querySelector("#billEndDate").textContent = endDate;
document.querySelector("#billName").textContent = Name;
document.querySelector("#billNamee").textContent = Name;
document.querySelector("#billName1").textContent = Name1;
document.querySelector("#billName2").textContent = Name2;
document.querySelector("#billName3").textContent = Name3;
document.querySelector("#billPackage").textContent = packageType;
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