const sports = [
  {
    sport: 'Basketball',
    image: '../resources/sports/basketball.jpeg',
    isTrainer: true,
    isGalaxoEarth: true,
  },
  {
    sport: 'Lawn Tennis',
    image: '../resources/sports/lawntennis.jpeg',
    isTrainer: true,
    isGalaxoEarth: true,
  },
  {
    sport: 'Table Tennis',
    image: '../resources/sports/table-tennis.jpeg',
    isTrainer: true,
    isGalaxoEarth: true,
  },
  {
    sport: 'squash',
    image: '../resources/sports/squash.jpg',
    isTrainer: true,
    isGalaxoEarth: true,
  },
  {
    sport: 'Jogging Track',
    image: '../resources/sports/track.jpg',
    isTrainer: false,
    isGalaxoEarth: true,
  },
  {
    sport: 'Cricket',
    image: '../resources/sports/cricket.jpeg',
    isTrainer: true,
    isGalaxoEarth: false,
  },
  {
    sport: 'Football',
    image: '../resources/sports/football.jpg',
    isTrainer: true,
    isGalaxoEarth: false,
  },
  {
    sport: 'Gym',
    image: '../resources/sports/gym.jpeg',
    isTrainer: true,
    isGalaxoEarth: true,
  },
  {
    sport: 'Swimming Pool',
    image: '../resources/sports/swimming-pool.jpg',
    isTrainer: true,
    isGalaxoEarth: true,
  },
  {
    sport: 'LightSaber Duel',
    image: '../resources/sports/lightsaber.jpeg',
    isTrainer: false,
    isGalaxoEarth: false,
  },
  {
    sport: 'Quidditch',
    image: '../resources/sports/quidditch.jpg',
    isTrainer: true,
    isGalaxoEarth: false,
  },
  {
    sport: 'Space Hockey',
    image: '../resources/sports/space-hockey.jpeg',
    isTrainer: true,
    isGalaxoEarth: false,
  },
  {
    sport: 'Space Wrestle',
    image: '../resources/sports/wrestling.jpeg',
    isTrainer: true,
    isGalaxoEarth: false,
  },
  {
    sport: 'Golf',
    image: '../resources/sports/golf.jpeg',
    isTrainer: true,
    isGalaxoEarth: false,
  },
  {
    sport: 'Badminton',
    image: '../resources/sports/badminton.jpeg',
    isTrainer: true,
    isGalaxoEarth: true,
  },
  {
    sport: 'Baseball',
    image: '../resources/sports/baseball.jpeg',
    isTrainer: false,
    isGalaxoEarth: false,
  },
  {
    sport: 'Boxing',
    image: '../resources/sports/boxing.jpeg',
    isTrainer: true,
    isGalaxoEarth: false,
  },
  {
    sport: 'Volleyball',
    image: '../resources/sports/volleyball.jpeg',
    isTrainer: false,
    isGalaxoEarth: false,
  },
  {
    sport: 'hockey',
    image: '../resources/sports/hockey.jpeg',
    isTrainer: true,
    isGalaxoEarth: false,
  },
  {
    sport: 'rugby',
    image: '../resources/sports/rugby.jpeg',
    isTrainer: true,
    isGalaxoEarth: false,
  },
  {
    sport: 'ice hockey',
    image: '../resources/sports/icehockey.jpeg',
    isTrainer: false,
    isGalaxoEarth: false,
  },
  {
    sport: 'archery',
    image: '../resources/sports/archery.jpeg',
    isTrainer: true,
    isGalaxoEarth: false,
  },
  {
    sport: 'yoga',
    image: '../resources/sports/yoga.jpg',
    isTrainer: true,
    isGalaxoEarth: false,
  },
  {
    sport: 'skateboarding',
    image: '../resources/sports/skateboarding.jpg',
    isTrainer: true,
    isGalaxoEarth: false,
  },
];

const searchBar = document.getElementById('searchBar');
const filter = document.getElementById('filters');
searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value;

  let sport = searchSport(searchString, sports);
  build(filterSport(filter.value, sport));
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

filter.addEventListener('change', function () {
  searchBar.value = '';
  build(filterSport(filter.value, sports));
});
function filterSport(value, data) {
  let filtersport = [];
  if (value == 'isTrainer') {
    for (let i = 0; i < data.length; i++) {
      if (data[i].isTrainer) {
        filtersport.push(data[i]);
      }
    }
  } else if (value == 'isGalaxo') {
    for (let i = 0; i < data.length; i++) {
      if (data[i].isGalaxoEarth) {
        filtersport.push(data[i]);
      }
    }
  } else if (value == 'isTrainerGalaxo') {
    for (let i = 0; i < data.length; i++) {
      if (data[i].isGalaxoEarth && data[i].isTrainer) {
        filtersport.push(data[i]);
      }
    }
  } else {
    filtersport = data;
  }
  return filtersport;
}

build(sports);

function build(data) {
  let sportcard = document.getElementById('container');
  sportcard.innerHTML = '';

  let i;
  for (i = 0; i < data.length; i++) {
    let trainer = data[i].isTrainer
      ? 'Trainer available'
      : 'Trainer not available';
    let earth = data[i].isGalaxoEarth
      ? 'GalaxoEarth available'
      : 'GalaxoEarth not available';
    let trainerColor = data[i].isTrainer ? 'lightgreen' : 'red';
    let earthColor = data[i].isGalaxoEarth ? 'lightgreen' : 'red';
    let card = `<div class="card">
        <h3 class="header">${data[i].sport}</h3>
        <div class="content">
          <img class="image" src="${data[i].image}" alt="" />
          <div class="label">
            <div class="t">
              <span><i class="fas fa-user" style="color: ${trainerColor};"></i><span class="trainer"></span> ${trainer} </span>
          </div>
          <div class="e">
              <span><i class="fas fa-globe-asia" style="color: ${earthColor};"></i><span class="earth"></span> ${earth}</span>
          </div>
          </div>
        </div>`;
    sportcard.innerHTML += card;
  }
}
