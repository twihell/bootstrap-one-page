const carouselItem = document.querySelectorAll(".slide>.row");
const imageThumbnail = document.querySelectorAll(".slide>.row>.item>.img-thumbnail");

const music = [

    {
        "imageSource": "./images/music/21-pilots.jpg",
        "alt": "21 pilots - trench",
        "cardTextB": "21 Pilots",
        "cardTextI": "Trench"
    },

    {
        "imageSource": "./images/music/daughter.jpeg",
        "alt": "daughter album",
        "cardTextB": "Daughter",
        "cardTextI": "Music from before the Storm"
    },

    {
        "imageSource": "./images/music/gesaffelstein.jpg",
        "alt": "thom yorke - anima",
        "cardTextB": "Thom Yorke",
        "cardTextI": "Anima"
    },

    {
        "imageSource": "./images/music/lamb.jpg",
        "alt": "lamb - fear of fours",
        "cardTextB": "Lamb",
        "cardTextI": "Fear of Fours"
    },

    {
        "imageSource": "./images/music/phantogram.jpg",
        "alt": "phantogram - ceremony",
        "cardTextB": "Phantogram",
        "cardTextI": "Ceremony"
    },

    {
        "imageSource": "./images/music/linkin-park.jpg",
        "alt": "lp-reanimation",
        "cardTextB": "Linkin Park",
        "cardTextI": "Reanimation"
    },

    {
        "imageSource": "./images/music/king-arthur.jpg",
        "alt": "King Arthur Score",
        "cardTextB": "Daniel Pemberton",
        "cardTextI": "King Arthur"
    },

    {
        "imageSource": "images/music/gesaffelstein.jpg",
        "alt": "Gesaffelstein - Aleph",
        "cardTextB": "Gesaffelstein",
        "cardTextI": "Aleph"
    },

    {
        "imageSource": "./images/music/helios.jpg",
        "alt": "helios-eingya",
        "cardTextB": "Helios",
        "cardTextI": "Eingya"
    },

    {
        "imageSource": "./images/music/lorn-rarities.jpg",
        "alt": "lorn - rarities",
        "cardTextB": "Lorn",
        "cardTextI": "Rarities"
    },

    {
        "imageSource": "./images/music/mike-shinoda.jpg",
        "alt": "Mike Shinoda - Post Traumatic",
        "cardTextB": "Mike Shinoda",
        "cardTextI": "Post Traumatic"
    },

    {
        "imageSource": "./images/music/tame-impala.jpg",
        "alt": "tame impala - currents",
        "cardTextB": "Tame Impala",
        "cardTextI": "Currents"
    }

];

const movies = [
    {
        "imageSource": "./images/movies-series-anime/american-beauty.jpg",
        "alt": "american-beauty",
        "cardTextB": "American Beauty"
    },

    {
        "imageSource": "./images/movies-series-anime/monty-python.jpg",
        "alt": "monty-python-and-the-holy-grail",
        "cardTextB": "Monty Python and the Holy Grail"
    },

    {
        "imageSource": "./images/movies-series-anime/no-country-for-old-men.jpg",
        "alt": "no-country-for-old-men",
        "cardTextB": "No Country for Old Men"
    },

    {
        "imageSource": "./images/movies-series-anime/snatch.jpg",
        "alt": "snatch",
        "cardTextB": "Snatch"
    },

    {
        "imageSource": "./images/movies-series-anime/its-always-sunny-in-philadelphia.jpg",
        "alt": "its-always-sunny-in-philadelphia",
        "cardTextB": "It's Always Sunny in Philadelphia"
    },

    {
        "imageSource": "./images/movies-series-anime/scrubs.jpg",
        "alt": "scrubs",
        "cardTextB": "Scrubs"
    },

    {
        "imageSource": "./images/movies-series-anime/the-office.jpg",
        "alt": "the-office",
        "cardTextB": "The Office"
    },

    {
        "imageSource": "./images/movies-series-anime/twin-peaks.jpg",
        "alt": "twin-leaks",
        "cardTextB": "Twin Peaks"
    },

    {
        "imageSource": "./images/movies-series-anime/disappearance-of-haruhi-suzumiya.jpg",
        "alt": "haruhi-suzumiya",
        "cardTextB": "Disappearance of Haruhi Suzumiya"
    },

    {
        "imageSource": "./images/movies-series-anime/kill-la-kill.jpg",
        "alt": "kill-la-kill",
        "cardTextB": "Kill La Kill"
    },

    {
        "imageSource": "./images/movies-series-anime/penguin-highway.jpg",
        "alt": "penguin-highway",
        "cardTextB": "Penguin Highway"
    },

    {
        "imageSource": "./images/movies-series-anime/SpiritedAway.jpg",
        "alt": "spirited-away",
        "cardTextB": "Spirited Away"
    }
];

const photos = [
    {
        "imageSource": "./images/photography/abandoned_tires.jpg",
        "alt": "abandoned tires"
    },

    {
        "imageSource": "./images/photography/afternoon.jpg",
        "alt": "street picture"
    },

    {
        "imageSource": "./images/photography/architectural_degradation.jpg",
        "alt": "broken house"
    },

    {
        "imageSource": "./images/photography/close_fitting_substances.jpg",
        "alt": "river bank"
    },

    {
        "imageSource": "./images/photography/double_expo_goat.jpg",
        "alt": "goat eating bush leaves"
    },

    {
        "imageSource": "./images/photography/gazing_at_the_sunset.jpg",
        "alt": "a person watching sunset in a forest"
    },

    {
        "imageSource": "./images/photography/green_tunnel.jpg",
        "alt": "a railway covered in green"
    },

    {
        "imageSource": "./images/photography/lonesome_tree.jpg",
        "alt": "a tree shot on an inverted bluish film"
    },

    {
        "imageSource": "./images/photography/plastic_trip.jpg",
        "alt": "a few manikins tied to an old car top"
    },

    {
        "imageSource": "./images/photography/post-box.jpg",
        "alt": "a blue post_box in the middle of the street"
    },

    {
        "imageSource": "./images/photography/sky_through_the_branches.jpg",
        "alt": "tree branches covering the sunset sky"
    },

    {
        "imageSource": "./images/photography/sunset_through_the_hall.jpg",
        "alt": "a house hallway filled with sunlight"
    }
];

const compressedPhotos = [
    {
        "imageSource": "./images/compressed_photography/abandoned_tires.jpg",
        "alt": "abandoned tires"
    },

    {
        "imageSource": "./images/compressed_photography/afternoon.jpg",
        "alt": "street picture"
    },

    {
        "imageSource": "./images/compressed_photography/architectural_degradation.jpg",
        "alt": "broken house"
    },

    {
        "imageSource": "./images/compressed_photography/close_fitting_substances.jpg",
        "alt": "river bank"
    },

    {
        "imageSource": "./images/compressed_photography/double_expo_goat.jpg",
        "alt": "goat eating bush leaves"
    },

    {
        "imageSource": "./images/compressed_photography/gazing_at_the_sunset.jpg",
        "alt": "a person watching sunset in a forest"
    },

    {
        "imageSource": "./images/compressed_photography/green_tunnel.jpg",
        "alt": "a railway covered in green"
    },

    {
        "imageSource": "./images/compressed_photography/lonesome_tree.jpg",
        "alt": "a tree shot on an inverted bluish film"
    },

    {
        "imageSource": "./images/compressed_photography/plastic_trip.jpg",
        "alt": "a few manikins tied to an old car top"
    },

    {
        "imageSource": "./images/compressed_photography/post-box.jpg",
        "alt": "a blue post_box in the middle of the street"
    },

    {
        "imageSource": "./images/compressed_photography/sky_through_the_branches.jpg",
        "alt": "tree branches covering the sunset sky"
    },

    {
        "imageSource": "./images/compressed_photography/sunset_through_the_hall.jpg",
        "alt": "a house hallway filled with sunlight"
    }

];

const books = [
    {
        "imageSource": "./images/books/anna-karenina.jpg",
        "alt": "anna karenina",
        "cardTextB": "Leo Tolstoy",
        "cardTextI": "Anna Karenina"
    },

    {
        "imageSource": "./images/books/faust.jpg",
        "alt": "faust",
        "cardTextB": "Goethe",
        "cardTextI": "Faust"
    },

    {
        "imageSource": "./images/books/hard-boiled-wonderland.jpg",
        "alt": "hard-boiled wonderland and the end of the world",
        "cardTextB": "Haruki Murakami",
        "cardTextI": "Hard-boiled Wonderland and the End of the World"
    },

    {
        "imageSource": "./images/books/hyperion.jpg",
        "alt": "hyperion",
        "cardTextB": "Dan Simmons",
        "cardTextI": "Hyperion"
    },

    {
        "imageSource": "./images/books/master-and-margarita.jpg",
        "alt": "master and margarita",
        "cardTextB": "Mikhail Bulgakov",
        "cardTextI": "Master and Margarita"
    },

    {
        "imageSource": "./images/books/monday-starts-on-saturday.jpg",
        "alt": "monday starts on saturday",
        "cardTextB": "Arkady and Boris Strugatsky",
        "cardTextI": "Monday Starts on Saturday"
    },

    {
        "imageSource": "./images/books/Needful-things.jpg",
        "alt": "needful things",
        "cardTextB": "Stephen King",
        "cardTextI": "Needful Things"
    },

    {
        "imageSource": "./images/books/solaris.jpg",
        "alt": "solaris",
        "cardTextB": "Stanislaw Lem",
        "cardTextI": "Solaris"
    },

    {
        "imageSource": "./images/books/the-martian-chronicles.jpg",
        "alt": "the martian chronicles",
        "cardTextB": "Ray Bradbury",
        "cardTextI": "The Martian Chronicles"
    },


    {
        "imageSource": "./images/books/the-stranger.jpg",
        "alt": "the stranger",
        "cardTextB": "Albert Camus",
        "cardTextI": "The Stranger"
    },

    {
        "imageSource": "./images/books/today-i-wrote-nothing.jpg",
        "alt": "today I wrote nothing",
        "cardTextB": "Daniil Kharms",
        "cardTextI": "Today I Wrote Nothing"
    },

    {
        "imageSource": "./images/books/we.jpg",
        "alt": "we",
        "cardTextB": "Yevgeny Zamyatin",
        "cardTextI": "We"
    }

];



function clearCarousel() {
    for (let j = 0; j < carouselItem.length; j++) {
        carouselItem[j].innerHTML = "";

    }

};



function insertBooks() {

    clearCarousel();
    for (let j = 0; j < carouselItem.length; j++) {
        for (let i = 0; i <= 3; i++) {
            const booksSection = `
        <div class="item col col-md-5">
            <img class="img-thumbnail" src=${books[4 * j + i].imageSource}
            alt=${books[4 * j + i].alt}>
            <p class="card-text">
            <b>${books[4 * j + i].cardTextB}</b>
            <br>
            <i>${books[4 * j + i].cardTextI}</i>
            </p>
        </div>
     `;
            carouselItem[j].insertAdjacentHTML('beforeend', booksSection);
        }
    }
};

function insertMusic() {

    clearCarousel();
    for (let j = 0; j < carouselItem.length; j++) {
        for (let i = 0; i <= 3; i++) {
            const musicSection = `
        <div class="item col col-md-5">
            <img class="img-thumbnail" src=${music[4 * j + i].imageSource}
            alt=${music[4 * j + i].alt}>
            <p class="card-text">
            <b>${music[4 * j + i].cardTextB}</b>
            <br>
            <i>${music[4 * j + i].cardTextI}</i>
            </p>
        </div>
     `;
            carouselItem[j].insertAdjacentHTML('beforeend', musicSection);
        }
    }
};

function insertPhotos() {

    clearCarousel();
    for (let j = 0; j < carouselItem.length; j++) {
        for (let i = 0; i <= 3; i++) {
            const photosSection = `
        <div class="item col col-md-5">
            <img class="img-thumbnail" src=${compressedPhotos[4 * j + i].imageSource}
            alt=${compressedPhotos[4 * j + i].alt}>
            <p class="card-text">
            <br>
            </p>
        </div>
     `;
            carouselItem[j].insertAdjacentHTML('beforeend', photosSection);
        }
    }
};

function insertMovies() {

    clearCarousel();
    for (let j = 0; j < carouselItem.length; j++) {
        for (let i = 0; i <= 3; i++) {
            const moviesSection = `
        <div class="item col col-md-5">
            <img class="img-thumbnail" src=${movies[4 * j + i].imageSource}
            alt=${movies[4 * j + i].alt}>
            <p class="card-text">
            <b>${movies[4 * j + i].cardTextB}</b>
            <br>
            </p>
        </div>
     `;

            carouselItem[j].insertAdjacentHTML('beforeend', moviesSection);


        }
    }
};