const sports = [
    {
        sport: 'Bastketball',
        image: '../resources/sports/basketball.jpeg',
        isTrainer: true,
        isGalaxoEarth: true
    },
    {
        sport: 'Lawn Tennis',
        image: '../resources/sports/lawntennis.jpeg',
        isTrainer: true,
        isGalaxoEarth: true
    },
    {
        sport: 'Table Tennis',
        image: '../resources/sports/table-tennis.jpeg',
        isTrainer: true,
        isGalaxoEarth: true
    },
    {
        sport: 'squash',
        image: '../resources/sports/squash.jpg',
        isTrainer: true,
        isGalaxoEarth: true
    },
    {
        sport: 'Jogging Track',
        image: '../resources/sports/track.jpg',
        isTrainer: false,
        isGalaxoEarth: true
    },
    {
        sport: 'Cricket',
        image: '../resources/sports/cricket.jpeg',
        isTrainer: true,
        isGalaxoEarth: false
    },
    {
        sport: 'Football',
        image: '../resources/sports/football.jpg',
        isTrainer: true,
        isGalaxoEarth: false
    },
    {
        sport: 'Gym',
        image: '../resources/sports/gym.jpeg',
        isTrainer: true,
        isGalaxoEarth: true
    },
    {
        sport: 'Swimming Pool',
        image: '../resources/sports/swimming-pool.jpg',
        isTrainer: true,
        isGalaxoEarth: true
    },
    {
        sport: 'LightSaber Duel',
        image: '../resources/sports/lightsaber.jpeg',
        isTrainer: false,
        isGalaxoEarth: false
    },
    {
        sport: 'Quidditch',
        image: '../resources/sports/quidditch.jpg',
        isTrainer: true,
        isGalaxoEarth: false
    },
    {
        sport: 'Space Hockey',
        image: '../resources/sports/space-hockey.jpeg',
        isTrainer: true,
        isGalaxoEarth: false
    },
    {
        sport: 'Space Wrestle',
        image: '../resources/sports/wrestling.jpeg',
        isTrainer: true,
        isGalaxoEarth: false
    },
    {
        sport: 'Golf',
        image: '../resources/sports/golf.jpeg',
        isTrainer: true,
        isGalaxoEarth: false
    },
    {
        sport: 'Badminton',
        image: '../resources/sports/badminton.jpeg',
        isTrainer: true,
        isGalaxoEarth: true
    },
    {
        sport: 'Baseball',
        image: '../resources/sports/baseball.jpeg',
        isTrainer: false,
        isGalaxoEarth: false
    },
    {
        sport: 'Boxing',
        image: '../resources/sports/boxing.jpeg',
        isTrainer: true,
        isGalaxoEarth: false
    },
    {
        sport: 'Volleyball',
        image: '../resources/sports/volleyball.jpeg',
        isTrainer: false,
        isGalaxoEarth: false
    },
    {
        sport: 'hockey',
        image: '../resources/sports/hockey.jpeg',
        isTrainer: true,
        isGalaxoEarth: false
    },
    {
        sport: 'rugby',
        image: '../resources/sports/rugby.jpeg',
        isTrainer: true,
        isGalaxoEarth: false
    },
    {
        sport: 'ice hockey',
        image: '../resources/sports/icehockey.jpeg',
        isTrainer: false,
        isGalaxoEarth: false
    },
    {
        sport: 'archery',
        image: '../resources/sports/archery.jpeg',
        isTrainer: true,
        isGalaxoEarth: false
    },
    {
        sport: 'yoga',
        image: '../resources/sports/yoga.jpg',
        isTrainer: true,
        isGalaxoEarth: false
    },
    {
        sport: 'skateboarding',
        image: '../resources/sports/skateboarding.jpg',
        isTrainer: true,
        isGalaxoEarth: false
    },
];


const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value;

  let sport = searchSport(searchString, sports);
  build(sport);
});

function searchSport(value, data) {
  let filteredSports = [];

  for (let i = 0; i < data.length; i++) {
    value = value.toLowerCase();
    let name = data[i].sport.toLowerCase();

    if (name.includes(value)) {
      filteredSports.push(data[i]);
    }
  }
  return filteredSports;
}

build(sports);
function build(data) {
  let sportcard = document.getElementById("container");
  sportcard.innerHTML = "";

  let i;
  for (i = 0; i < data.length; i++) {
    let trainer = data[i].isTrainer
      ? "Trainer is available"
      : "Trainer is not available";
    let earth = data[i].isGalaxoEarth
      ? "GalaxoEarth is available"
      : "GalaxoEarth is not available";
    let card = `<div class="card">
        <h3 class="header">${data[i].sport}</h3>
        <div class="content">
          <img class="image" src="${data[i].image}" alt="" />
          <div class="label">
            <div class="t">
              <span><i class="fas fa-user"></i><span class="trainer"></span> ${trainer} </span>
          </div>
          <div class="e">
              <span><i class="fas fa-globe-asia"></i><span class="earth"></span> ${earth}</span>
          </div>
          </div>
        </div>`;
    sportcard.innerHTML += card;
  }
}

// const header = document.querySelectorAll('.header');
// const image = document.querySelectorAll('.image');
// const trainer = document.querySelectorAll('.trainer');
// const galaxoEarth = document.querySelectorAll('.earth');
// const usericon = document.querySelectorAll('.fa-user');
// const earthicon = document.querySelectorAll('.fa-globe-asia');
// let i;
// const green = 'lightgreen' ;
// const red= "red";
// for(i = 0; i<sports.length;i++) {
//     header[i].textContent = sports[i].sport;
//     image[i].src = sports[i].image;
//     if(sports[i].isTrainer) {
//         trainer[i].textContent = '  Trainer available';
//         usericon[i].style.color = green;
//     } else {
//         trainer[i].textContent = '  Trainer not available';
//         usericon[i].style.color = red;
//     }

//     if (sports[i].isGalaxoEarth) {
//       galaxoEarth[i].textContent = "  GalaxoEarth available";
//       earthicon[i].style.color = green;
//     } else {
//       galaxoEarth[i].textContent = "  GalaxoEarth not available";
//       earthicon[i].style.color = red;
//     }

    

//     galaxoEarth[i].textContent = (sports[i].isGalaxoEarth)? '  GalaxoEarth is available': '  GalaxoEarth is not available';
// }
