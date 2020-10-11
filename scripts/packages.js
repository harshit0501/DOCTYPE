let in_color = '#C0FF80';
let co_color = '#09F098';
let fa_color = '#40C040';
const data = [
  {
    name: 'Platinum',
    description:
      'The package includes all sports and Spa facility. GalaxoEarth included.',
  },
  {
    name: 'Gold',
    description:
      'The package includes all sports except Swimming and Spa. GalaxoEarth included',
  },
  {
    name: 'Silver',
    description:
      'The package includes all sports except Swimming and Spa. GalxoEarth not included',
  },
  {
    name: 'Gym and swim Gold',
    description:
      'The package includes Gym, Spa and Swimming. GalaxoEarth included',
  },
  {
    name: 'gym and swim',
    description:
      'The package includes Gym, Spa and Swimming. GalaxoEarth not included',
  },
  {
    name: 'Gym-only',
    description: 'The package includes Gym Only. GalaxoEarth included.',
  },
];
let in_month = [380, 310, 210, 200, 160, 100];
let in_year = [4500, 3650, 2450, 2320, 1880, 1150];
let co_month = [740, 600, 390, 370, 300, 190];
let co_year = [8760, 7100, 4600, 4380, 3520, 2200];
let fa_month = [1420, 1150, 750, 710, 550, 360];
let fa_year = [16900, 13600, 8900, 8450, 6500, 4200];
let ans = 1;

const buttonIndividual = document.querySelector('.individual');
const buttonCouple = document.querySelector('.couple');
const buttonFamily = document.querySelector('.family');
let i;

buttonCouple.addEventListener('click', function () {
  buttonCouple.classList.add('co_active');
  buttonIndividual.classList.remove('in_active');
  buttonFamily.classList.remove('fa_active');
  ans = 2;
  build(data, co_year, co_month);
});
buttonIndividual.addEventListener('click', function () {
  buttonCouple.classList.remove('co_active');
  buttonIndividual.classList.add('in_active');
  buttonFamily.classList.remove('fa_active');
  ans = 1;
  build(data, in_year, in_month);
});
buttonFamily.addEventListener('click', function () {
  buttonCouple.classList.remove('co_active');
  buttonIndividual.classList.remove('in_active');
  buttonFamily.classList.add('fa_active');
  ans = 4;
  build(data, fa_year, fa_month);
});

build(data, in_year, in_month);
function build(data, annual, monthly) {
  let packageCard = document.getElementById('container');
  packageCard.innerHTML = '';

  let i;
  for (i = 0; i < data.length; i++) {
    let card = `<div class="card">
      <h3 class="header">${data[i].name}</h3>
      <div class="content">
        <p class="description">${data[i].description}</p>
        <div class="label">
          <div class="price">
            <h2>$ <span id="month">${monthly[i]}</span> / month</h2>
            <h2>$ <span id="year">${annual[i]}</span> / year</h2>
          </div>
        </div>
        <button class="btn">BOOK MONTHLY</button>
        <button class="btny">BOOK YEARLY</button>
      </div>
    </div>`;
    packageCard.innerHTML += card;
  }
  const buttonm = document.querySelectorAll('.btn');
  const buttony = document.querySelectorAll('.btny');
  SendAmount(buttony, buttonm);
}

function SendAmount(buttony, buttonm) {
  let amount;
  for (let k = 0; k < 6; k++) {
    buttony[k].addEventListener('click', function () {
      if (ans == 1) {
        amount = in_year[k];
      } else if (ans == 2) {
        amount = co_year[k];
      } else if (ans == 4) {
        amount = fa_year[k];
      }
      localStorage.setItem('amount', amount);
      localStorage.setItem('package', ans);
      localStorage.setItem('subscription', 12);
      localStorage.setItem('packageType', data[k].name);
      window.location.href = './form.html';
    });
    buttonm[k].addEventListener('click', function () {
      if (ans == 1) {
        amount = in_month[k];
      } else if (ans == 2) {
        amount = co_month[k];
      } else if (ans == 4) {
        amount = fa_month[k];
      }
      localStorage.setItem('amount', amount);
      localStorage.setItem('package', ans);
      localStorage.setItem('subscription', 1);
      localStorage.setItem('packageType', data[k].name);
      window.location.href = './form.html';
    });
  }
}
