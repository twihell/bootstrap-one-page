const carouselItem = document.querySelectorAll(".slide>.row");
const carouselInModalItem = document.querySelectorAll("#carousel-in-modal>.carousel-inner>.big-view");
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
        "imageSource": "./images/music/thom-yorke.jpg",
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
        "cardTextI": "Hard-boiled Wonderland..."
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
        "cardTextB": "Strugatsky brothers",
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

const moviesCaption = [
    {
        "caption": `<i>American Beauty</i> was one of the first movies I watched consciously,
        of my own free will. And I remember being absolutely shocked and frustrated in the end. It starts off as
        a regular drama, but the following sequence of events and character actions leaves you completely unaware of
        where this all goes. Ultimately, the themes invoked in the film go beyond regular social problems, putting
        more emphasis on personal freedom, self-identity and the source of true happiness. For a youngster I was when I first 
        watched it, that was quite a revelation at the time. And it still is one of my all-time favorite movies today.`
    },

    {
        "caption": `Discovering <i>Monty Python</i> was one of the best experiences in my life. I already knew and could distinguish
        the difference between the US and British humour at that time, and, for some reason, the latter appeared to be more appealing to me.
        Perhaps thanks to the way the <i>Monty Python</i> show delivers it. <i>...The Holy Grail</i> feauture film is truly a masterpiece of
        the English humour, and I never stop laughing my guts out, no matter how many times I rewatch it.`
    },

    {
        "caption": `My friend once gave me a book on Coen brothers' filmography because, for some reason, <i>The Big Lebowski</i> had
        always been considered one of the most favorite movies in our company. However, up until that moment, I had never seen
        any other movie of these guys, so I decided to use this opportunity to get to know their creative path better. Coen brothers have
        a very extraordinary writing and directing style, and they have proved to be equally good in shooting both comedies and dramas. <i>No Country
        for Old Men</i> is a very tough and controversial dramatic book adaptation about free will and the moral limits of human-to-human violence.`
    },

    {
        "caption": `Guy Ritchie is a master of criminal comedy. Thanks to our rich history of pirate media production, we have lots of movies that were distributed on our local markets in the 1990s
        and localized by our fellow citizens. There is a number of highly talented dubbing actors that largely contributed to the spread of Western movies here, and one of them - Dmitry Puchkov aka Goblin
        - became essentially famous for dubbing Guy Ritchie's <i>Snatch</i>. Numerous lines from his version of the movie have now become eternal memes on the Eastern Europe Internet scene. So many people who 
        become interested in Guy Ritchie's movies usually start with watching Goblin's version of <i>Snatch</i>.`
    },

    {
        "caption": `I'm a huge fan of dark humor, so I got super excited when I first discovered <i>IASIP</i>.
        Despite being cruel and stupid at times, this show also has a good deal of satire that always has a lot to say about
        our actual world and all the problems our society encounters on a daily basis. You both love and hate the show's characters
        and you never stop surprising over how much unpredictable they remain even after 10 seasons of pure trash and chaos.`
    },

    {
        "caption": `For people of my generation, <i>Scrubs</i> is closely associated with the Russian MTV channel that 
        was immensly popular with teenagers in 2000s. At that time, the channel mainly aired localized versions of American shows
        and had almost no shows of its own. Nevertheless, I still remember the voices of dubbing actors that worked on our local version
        of the <i>Scrubs</i> show that - even today - brings me the warmest and most nostalgic memories about that time in my life. The
        show itself is a huge source of positive emotions that will never get old. Its comedy, drama, and romance has eventually become one of the 
        first sources of adulthood experience for me and many people of my age.`
    },

    {
        "caption": `While I previously told that I tend to love English humor more than American one, <i>The Office</i> from the 
        US happened to amaze me to the core. This show is a perfect guidebook on human relationships that are always ambiguous and
        extremely volatile. Delivering these ideas through (often) darkish humor, mocumentary stylistics, and highly expressive cast was
        the best choice for a TV show. The original British series leaned more towards simply highlighting everyday office interactions through
        a dark humor lense, while the American adaptation was given more drama, hope, and positivity, which eventually made it so much better.`
    },

    {
        "caption": `<i>Twin Peaks</i> is a truly magical show that will never satisfy your curiosity, nor it will answer
        your questions. At least not all of them. It's doomed to always leave you in a state of uneasiness, discomfort, sadness, and
        deep awe. David Lynch has given us a masterpiece that cannot be fully comprehended, yet it's so captivating and wild. Originally set out
        as a typical detective story, it gradually grows into a surreal/mystical tale that lives according to its own rules and conventions. The music, the
        characters, the atmosphere - everything here is so unnaturally attractive, inviting you to stay in this world forever.`
    },

    {
        "caption": `When I was a child, I saw anime works merely as cartoons from Asia. However, as I grew older,
        I was introduced to anime that could be hardly viewed as cartoons for chilren. There are many adult works that explore quite complex
        themes and ideas. Basically, anime offers the same esthetical and cultural depth as any other work of art. <i>The Melancholy of Haruhi Suzumiya</i>, as well as the following full-length movie <i>The Disappearance of Haruhi Suzumiya</i>, combines 
        in itself a light school comedy, drama, and sci-fi, cleverly intermingled in a captivating story with unique and catchy characters.`
    },

    {
        "caption": `<i>Kill La Kill</i> is a very unusual anime TV series, especially for those who have never seen anime before. In fact, it's a cleverly built parody making fun of popular anime features, such as excessive nudity, 
        pretentious dialogues, extremely unrealistic battles and human interactions. Despite having such an ironic setup, <i>Kill La Kill</i>
        has a very comprehensive story, unique world structure, and a bunch of highly caricature yet thoroughly developed characters that are so easy
        to sympathize with.`
    },

    {
        "caption": `<i>Penguin Highway</i> is a full-length movie that tells a story of a young boy who is in love with his female dentist. However, due to 
        inexplicable reasons, his city gets suddenly filled with dozens of penguins that came out of nowhere and strangely disappeared a few hours later. The following
        events will turn the main character into a clever detective who will inevitably solve the penguin mistery and accidentally save the world. The movie is indeed a memorable piece 
        with a masterful direction and stunning animation that goes beyond any measurable level. It tells a very touching and simple growing-up story but in such an amusing setting
        and with such a huge love that even an adult will be left in tears.`
    },

    {
        "caption": `I think many people have heard of Hayao Miyazaki and his works, even if they don't watch anime on a regular basis. One of the first Ghibli movies I've seen was
        <i>Spirited Away</i>, and it eventually became my all-time favorite Miyazaki's movies. A magical story of a girl who got trapped in a haunted world and had to 
        go through a series of challenges and adventures to save her parents and change herself in the end got deeply sealed in my heart. It's flled with kindness, hope, love, friendship, and loyalty, all of which are essential aspects
        of a happy human existence. Perhaps that's the main reason why it's so cool to watch it both as a child and a grown-up.`
    },

];


const booksCaption = [
    {
        "caption": `A lot of people despise classical literature due to it being boring, out of date, or simply
        uninteresting. However, it's important to read books not out of necessity (like when it's a school assignment)
         but rather when you really want to read them. That's what happened when I decided to get acquainted with Leo 
         Tolstoy's <i>Anna Karenina</i>. I was quite intrigued by the story and its main character's life, and it was unusual
         to read a novel about a female character as a work of a male author in general. Although it does follow the morals and social conventions of the time 
         it was written, it is still very captivating and deeply psychological, which makes you constantly contemplate on the complexities of
         the human nature.`

    },

    {
        "caption": `Reading Goethe's <i>Faust</i> was once indeed my home assignment for school, although I didn't expect I
        would immerse in the book so much that I would end up reading it the whole night without a pause. Despite having a form of a poem, 
        <i>Faust</i> tells a very bright and easily unerstood mystical story, and each verse of the poem has plenty of vivid and truly
        beautiful imagery, intricate metaphors, and a catchy rhythm. But the book is actually too complex for a teenager to be able to grasp
        all the philosophical implications of the story, so it needs to be re-read at a middle age when a person gains some life experience 
        and a more profound literary background.`
    },

    {
        "caption": `I started reading Haruki Murakami a year ago, and the reason for that was mainly curiosity, as I wanted to
        get a better idea of why he is considered the most popular contemporary Japanese writer and why he's so loved overseas. After
        reading a few of his books, I realized that the author is a huge admirer of the Western culture, so I guess that's why Western 
        people get interest in his works in the first place. But there is more to his books than that. He is a great narrator that is
        capable of describing everyday life in the most enjoyable way. His numerous descriptions of food consumption, music listening, and city
        strolling are very relaxing and meditative. And, together with uniquely delivered mysticism and fantasy, they bring about the very
        best feelings within me. This particular book gave me exactly this kind of impression.`

    },

    {
        "caption": `Strangely enough, I found out about Dan Simmons after having watched <i>Disappearance of Haruhi Suzumia</i>. 
        So I guess it is thanks to anime that I fell in love with sci-fi literature. Simmons dedicated four books to the story of the mysterious Hyperion planet and 
        characters whose life was connected with it - one way or another. This tetralogy covers hundreds of story years to convey its complex and diverse cosmic mythology. 
        Apart from creating an in-depth universe, Dan Simmons can be also praised for developing comprehensive and compelling characters that are genuinely interesting to observe 
        and sympathise with.`
    },

    {
        "caption": `This one is yet another nearly-classical book that I absolutely adore. Mikhail Bulgakov, a master of witty satire and bright imagery, once managed to bring
        Russian literature to a whole new level. His works present a very unusual writing style that makes him stand out from other literary artists
        of his time. In <i>The Master an Margarita</i>, Bulgakov cleverly criticizes the Soviet society and its values by incorporating religious themes that 
        coexist parallel to modern Soviet setting transformed by the influence of fantasy-like narrative elements. All in all, this novel is fun to read, great to analyze and
        necessary to be familiar with.`
      },

      {
        "caption": `Strugatsky brothers' works are the proof that Soviet science-fiction does indeed have an outstanding value for the world literature.
        But, while some of their novels can be related to conventional sci-fi, books like <i>Monday Begins on Saturday</i> are much more ambiguous in terms of the genre
        differentiation. It shares some features with fantasy, although it's generally believed that there was no such genre in the Soviet Union. 
        Nevertheless, the story set in a book is pretty far from reality. It takes place in a magical scientific institute located in a small town of the Soviet Russia. 
        Scientists of this institute look more like wizards, while their studies are clearly of a supernatural origin. The most peculiar element of the story is an absurdity
        of most studies performed by the scientists. The further you read, the more you come to recognize the satirical nature behind characters' actions.`
      },

      {
        "caption": `As we all know, Stephen King is a king of horror, but he is also a talented narrator who knows a thing or two about human nature.
        My mother is huge fan of the guy, so it was just a matter of time until I would get to his works. <i>Needful Things</i> is my favorite King's book, the main
        reason for that being its charismatic characters, impressive mystical imagery, and a tone of psychological conflicts (both inner and outer ones). 
        Despite being conventionally violent, the novel also gets deep into exposing human hypocrisy, greed, and excessive consumerism, making it a relevant satirical
        work even today.`
      },

      {
        "caption": `Getting to know Lem and his works was sort of a necessity when I decided to watch Andrei Tarkovsky's key works. When it comes to
        book adaptations, I usually prefer to read the original work first. I also once heard that Tarkovsky often used book sources mainly for setting
        recreation, leaving all the character features and original ideas behind for the sake of conveying his own themes and ideas. With that thought in mind, 
        I decided to read Lem's <i>Solaris</i> first. And I never regretted doing that. The novel presents a thoroughly crafted extraterrestrial world that exists
        according to unique and unknowable rules. Humanity representatives who come in contact with this world and its inhabitant are doomed to face their own demons
        and end up questioning their own existence.`
      },

      {
        "caption": `As a logical follow-up of my sci-fi passion, I took a closer look at another famous sci-fi genius - Ray Bradbury. Although he
        worked in various genres, one of his famous books - <i>The Martian Chronicles</i> - is the brightest example of science fiction in the world literature. The book
        is a narratively connected set of short stories that tell us about the alien civilization living on Mars and the human expedition sent to Mars in order to
        explore the planet. In result of the contact, almost all Martians extinct, and those who survive are not welcome to newcomers. Many episodes of the book illustrate
         negative social aspects of human beings, like xenophobia, or inclination to violence. In addition, the author expresses a certain fear with regard to 
         possibilities of a tragic future for the human race through obtaining and utilizing nuclear weapons.`
      },

      {
        "caption": `<i>The Stranger</i> by Albert Camus became kind of a revelation for me as a student. I had never been that much
        depressed and at the same time impressed by a book before. Although it's written in a rather simple and laconic style, the fact
        that the narration happens from the first person allows the reader to be the subject of the events themselves. Experiencing the absurdity
        of the unfolding events is shocking and emotionally hard. It takes time to understand the underlying beliefs of the protagonist and the way he
        perceives his own life and things around him. In the end, you can't just finish the book and go on with your life until you don't spend a day or two ruminating
        on the purpose of your own existence.`
      },

      {
        "caption": `Daniil Kharms is that one guy from the world of art and literature that could be called one of the most prominent meme makers today. 
        Unfortunately, he died quite young, but his absurdic and extremely bold works still live among people who happen to stumble upon a random vignette of his
         here and there. As a solid member of the Soviet avant-garde movement, Kharms often experimented with literary forms in his works, which could be equally related
         to both his prose and poems. In his books, you will find a lot of dark humor, meaninglessness, cruelty, and absurdic violence that is as harsh as it is funny. 
        `
      },

      {
        "caption": `<i>We</i> by Yevgeny Zamyatin was one of the first dystopian novels I read. And, perhaps because it was written much earlier than Huxley's or Orwell's
        works, it felt much more authentic in terms of its ideas and themes. The story is set in the far future, hundreds of years after the great war that 
        destroyed almost all humanity. One State was the initiator of this war that basically conquered the remaining territory and established totalitarianism over the people
        who had survived the war. The key of controlling the population in this dystopia is through forced rationalism and near mathematical logic that applies
        to all spheres of a person's life. As the narration goes on, we learn that there are people outside of the state, and there are renegades among the members of the state who
        want to overthrow it and reunite its sitizens with the outer world.`
      }
      

      

];

const musicCaption = [
    {
        "caption": `A friend of mine introduced me to 21 Pilots
        when they had already been considered
        worldwide famous pop idols. Frankly speaking, I didn't
        think their music was pop.
        On the contrary, I found it to be much more complex and
        diverse, and this particular
        album left me in the most uplifting state you could ever
        imagine. Keep on feeling the same
        vibe even after thousands of re-listenings.`
    },

    {
        "caption": `Daughter plays very sensual and melancholic music that
        triggers the most positive
        and warm feelings inside me. This one is a soundtrack,
        so it's instrumental for the most part.
        Occasional vocals of Elena Tonra, together with calm and
        ambient-like motives that steadily grow into
        intense guitar-percussion explosions, give me a huge
        goosebump effect.`
    },

    {
        "caption": `I'm not a huge fan of Radiohead, but I sure do love
        quite a few of their songs. However, listening to
        Thom Yorke's standalone projects is often a completely
        different experience for me. In his solo works, Yorke
        leans more heavily to electronic music which I
        absolutely adore. But the way he implements his music is
        entirely
        unique and otherwordly, and this album is a very nice
        example of his artistry.`
    },

    {
        "caption": `Lamb's music struck me as something very expressive and
        unusual at the same time —
        perhaps thanks to great abundance of extraordinary
        beats,
        or unique vocals of Lou Rhodes.
        There is some unhealthy energy and darkness in their
        music that feels very attractive though
        mysterious and dangerous at times.`
    },

    {
        "caption": `Phantogram is a fine mixture of dream pop, trip hop, and
        a few other electronic
        genres that massively contribute to their upbeat sound.
        Their music is perfect for
        starting a day, lifting one's spirits, cooking, working
        out, and basically living.`
    },

    {
        "caption": `Linkin Park was the first band that properly introduced
        me to the world of music
        when I was a kid. Listening to them while being a
        teenager felt like a
        long-awaited blessing and some kind of liberation for my
        soul. The aggressive energy of
        their first albums resonated with me so much that I
        couldn't resist but become a huge fan
        of theirs for quite some time. As I grew older, I
        recognized more value in their
        later albums that shifted away from anger towards
        lighter and more mature motives. However,
        their early works will always be an important part of my
        personality.`
    },

    {
        "caption": ` I'm a huge fan of music scores because movie-based music
        is so closely
        connected to visuals that you can literally see the
        movie in your head when
        you listen to it. The King Arthur score, though, is a
        powerful piece that managed to
        overshadow the movie thanks to highly peculiar creative
        choices and vibrant
        instrumentals.`
    },

    {
        "caption": `I really enjoy electronic music, but somehow I'm
        naturally more attracted
        to its darker subgenres. Gesaffelstein is a one-man
        project that is heavily
        into sad, at times aggressive, and overly dull motives,
        which is both pleasant and
        hard to listen to. Some of his works can be regarded as
        dance music, and you really want
        to dance to it, but the feeling inside you is more of a
        discomfort, or even unexplicable pain.`
    },

    {
        "caption": `Ambient has a very special place in my heart, as its
        uplifting and life-affirming
        energy has always helped me recover from all kinds of
        problems and negative feelings
        that I experienced throughout my life. Helios was one of
        the first ambient projects I
        discovered when I was young, and his music has never
        left my player since then. There is
        love, nature, serenity, and universal harmony in this
        music, which gives hope for the better,
        no matter what.`
    },

    {
        "caption": ` Just like Gesaffelstein, Lorn's music possesses a very
        similar kind of dark and
        dull spirit. However, it's still very unique and
        captivating. Some of his tracks
        always give me shivers, some can put me in the state of
        uneasiness, and some can
        literally get me high. There are thousands of different
        qualities in Lorn's music,
        and it's always interesting to rediscover it from time
        to time.`
    },

    {
        "caption": `Mike Shinoda has always had a very specific yet
        interesting approach
        to music. It was thanks to his love to hip-hop and
        electronic music that
        Linkin Park's sound became so easily recognized. As a
        former fan of Linkin Park,
        I was deeply affected by the death of the band's
        vocalist Chester Bennington. And
        I was not surprised having found out that Shinoda
        released a standalone album dedicated
        to his late close friend with whom they had shared a
        huge part of their lives. This
        album is highly emotional and creatively unique, and
        it's one of the most intimate
        tributes I've ever experienced in my life.`
    },

    {
        "caption": `Tame Impala was a nut that was rather hard to crack. I
        tried to get through his
        psychedelic discography for quite some time, but I would
        drop it every time because I couldn't relate
        to his music as much as I would expect. Nevertheless, I
        did recognize his talent and
        the artistic approach he implemented in his works.
        Finally, when I got to <i>Currents</i>,
        I realized it had reached a perfect balance between
        conventional psychedelic vibes and experimental
        electronic elements, and that's what I had been looking
        for in his works for such a long time.`
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
        <div class="item col-md-5 col-xs-6">
            <img class="img-thumbnail" src="${books[4 * j + i].imageSource}"
            alt="${books[4 * j + i].alt}" data-name="books">
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
        <div class="item col-md-5 col-xs-6">
            <img class="img-thumbnail" src="${music[4 * j + i].imageSource}"
            alt="${music[4 * j + i].alt}" data-name="music">
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
        <div class="item col-md-5 col-xs-6" style="padding-bottom: 90px;">
            <img class="img-thumbnail" src="${compressedPhotos[4 * j + i].imageSource}"
            alt="${compressedPhotos[4 * j + i].alt}" data-name="photography" style="object-fit: cover; height: 120px; width: 145px;">
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
        <div class="item col-md-5 col-xs-6">
            <img class="img-thumbnail" src="${movies[4 * j + i].imageSource}"
            alt="${movies[4 * j + i].alt}" data-name="movies-series-anime">
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

function insertModalMovies(div) {
    for (let i = 0; i < movies.length; i++) {
        const modalMoviesSection = `
        <img
        src="${movies[i].imageSource}"
        alt="${movies[i].alt}">
        <div class="carousel-caption d-md-block">
            <p>${moviesCaption[i].caption}</p>
        </div>
        `;

        div[i].insertAdjacentHTML('beforeend', modalMoviesSection);


    }
}

function insertModalPhotos(div) {
    for (let i = 0; i < photos.length; i++) {
        const modalPhotosSection = `
        <img
        src="${photos[i].imageSource}"
        alt="${photos[i].alt}">
       
        `;

        div[i].insertAdjacentHTML('beforeend', modalPhotosSection);

    }
}

function insertModalBooks(div) {
    for (let i = 0; i < books.length; i++) {
        const modalBooksSection = `
        <img
        src="${books[i].imageSource}"
        alt="${books[i].alt}">
        <div class="carousel-caption d-md-block">
            <p>${booksCaption[i].caption}</p>
        </div>
        `;

        div[i].insertAdjacentHTML('beforeend', modalBooksSection);

    }
}

function insertModalMusic(div) {
    for (let i = 0; i < music.length; i++) {
        const modalMusicSection = `
        <img
        src="${music[i].imageSource}"
        alt="${music[i].alt}">
        <div class="carousel-caption d-md-block">
            <p>${musicCaption[i].caption}</p>
        </div>
        `;

        div[i].insertAdjacentHTML('beforeend', modalMusicSection);


    }
}

