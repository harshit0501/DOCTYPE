const sports = [
    {
        sport: 'BastketBall',
        image: '../resources/sports/basketball.jpeg',
        isTrainer: true,
        isGalaxoEarth: true
    },
    {
        sport: 'Lawn Tennis',
        image: '../resources/sports/lawntennis.jpg',
        isTrainer: false,
        isGalaxoEarth: true
    },
    {
        sport: 'Table Tennis',
        image: '../resources/sports/table-tennis.jpg',
        isTrainer: false,
        isGalaxoEarth: true
    },
    {
        sport: 'squash',
        image: '../resources/sports/squash.jpg',
        isTrainer: true,
        isGalaxoEarth: true
    },
    {
        sport: 'Indoor Jogging Track',
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
        sport: 'FootBall',
        image: '../resources/sports/football.jpeg',
        isTrainer: false,
        isGalaxoEarth: false,
    },
    {
        sport: 'Gym',
        image: '../resources/sports/gym.jpg',
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
        sport: 'Out-of-this-World Wrestling',
        image: '../resources/sports/wrestling.jpeg',
        isTrainer: false,
        isGalaxoEarth: false
    }
];

const header = document.querySelectorAll('.header');
const image = document.querySelectorAll('.image');
const trainer = document.querySelectorAll('.trainer');
const galaxoEarth = document.querySelectorAll('.earth');
const usericon = document.querySelectorAll('.fa-user');
const earthicon = document.querySelectorAll('.fa-globe-asia');
let i;
const green = 'lightgreen' ;
const red= "red";
for(i = 0; i<sports.length;i++) {
    header[i].textContent = sports[i].sport;
    image[i].src = sports[i].image;
    if(sports[i].isTrainer) {
        trainer[i].textContent = '  Trainer is available';
        usericon[i].style.color = green;
    } else {
        trainer[i].textContent = '  Trainer is not available';
        usericon[i].style.color = red;
    }

    if (sports[i].isGalaxoEarth) {
      galaxoEarth[i].textContent = "  GalaxoEarth is available";
      earthicon[i].style.color = green;
    } else {
      galaxoEarth[i].textContent = "  GalaxoEarth is not available";
      earthicon[i].style.color = red;
    }

    

    galaxoEarth[i].textContent = (sports[i].isGalaxoEarth)? '  GalaxoEarth is available': '  GalaxoEarth is not available';
}
