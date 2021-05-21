let movieArray = [
    {
    'title': 'The Intouchables',
    'year' : 2011,
    'poster' : 'Posters/the_intouchable.jpeg',
    'country' : ['France'],
    'genres' : ['Comedy', 'Drama'],
        'description' : `After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man
         from the projects to be his caregiver.`,
        'cast' : ['François Cluzet', 'Omar Sy'],
        'wallpaper' : 'Wallpapers/the_intouchables_wallpaper.jpg'
}, {
    'title': 'Avatar',
    'year': 2009,
    'poster': 'Posters/avatar.jpg',
    'country' : ['USA'],
    'genres' : ['Adventure', 'Action', 'Drama', 'Fantasy'],
        'description' : `A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between
         following his orders and protecting the world he feels is his home.`,
        'cast' : ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver', 'Stephen Lang',
                  'Michelle Rodriguez', 'Giovanni Ribisi'],
        'wallpaper' : 'Wallpapers/avatar_wallpapers.jpg'
}, {
    'title': 'The Amazing Spider-man',
    'year': 2012,
    'poster': 'Posters/the_amazing_spider_man.jpeg',
    'country' : ['USA'],
    'genres' : ['Adventure', 'Action', 'Fantasy'],
        'description' : `After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers
         and ventures out to save the city from the machinations of a mysterious reptilian foe.`,
        'cast' : ['Starring', 'Andrew Garfield', 'Emma Stone', 'Rhys Ifans',
                  'Denis Leary', 'Campbell Scott', 'Irrfan Khan', 'Martin Sheen', 'Sally Field'],
        'wallpaper' : 'Wallpapers/the_mazing_pider_man_wallpaper.jpg'
}, {
    'title': 'Safe House',
    'year': 2012,
    'poster': 'Posters/safe_house.jpg',
    'country' : ['USA', 'Japan', 'Republic of South Africa'],
    'genres' : ['Action', 'Thriller'],
        'description' : `A young CIA agent is tasked with looking after a fugitive in a safe house.
         But when the safe house is attacked, he finds himself on the run with his charge.`,
        'cast' : ['Denzel Washington', 'Ryan Reynolds', 'Vera Farmiga', 'Brendan Gleeson', 'Sam Shepard',
                  'Rubén Blades', 'Nora Arnezeder', 'Robert Patrick'],
        'wallpaper' : 'Wallpapers/safe_house_wallpaper.jpeg'
}, {
    'title': 'Knives Out',
    'year': 2019,
    'poster': 'Posters/knifes_out.jpeg',
    'country' : ['USA'],
    'genres' : ['Comedy', 'Crime', 'Drama', 'Mystery'],
        'description' : `A detective investigates the death of a patriarch of an eccentric, combative family.`,
        'cast' : ['Daniel Craig', 'Chris Evans', 'Ana de Armas', 'Jamie Lee Curtis', 'Michael Shannon',
            'Don Johnson', 'Toni Collette', 'Lakeith Stanfield', 'Katherine Langford', 'Jaeden Martell', 'Christopher Plummer'],
        'wallpaper' : 'Wallpapers/knives_out_wallpaper.jpg'
}, {
    'title': 'Ford v Ferrari',
    'year': 2019,
    'poster': 'Posters/ford_v_ferrari.jpg',
    'country' : ['USA'],
    'genres' : ['Action', 'Drama', 'Sport'],
        'description' : `American car designer Carroll Shelby and driver Ken Miles battle corporate interference
         and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.`,
        'cast' : ['Matt Damon', 'Christian Bale'],
        'wallpaper' : 'Wallpapers/ford_v_ferrari_wallpaper.jpg'
}, {
    'title': 'Fast Five',
    'year': 2011,
    'poster': 'Posters/fast_five.jpeg',
    'country' : ['USA', 'Japan', 'Brazil'],
    'genres' : ['Adventure', 'Action', 'Crime', 'Thriller'],
        'description' : `Dominic Toretto and his crew of street racers plan a massive heist to buy their freedom
         while in the sights of a powerful Brazilian drug lord and a dangerous federal agent.`,
        'cast' : ['Vin Diesel', 'Paul Walker', 'Jordana Brewster', 'Tyrese Gibson', 'Ludacris',
            'Sung Kang', 'Tego Calderon', 'Don Omar', 'Gal Gadot', 'Dwayne Johnson', 'Matt Schulze'],
        'wallpaper' : 'Wallpapers/fast_five_wallpaper.jpg'
}, {
    'title': 'Edge of tomorrow',
    'year': 2014,
    'poster': 'Posters/edge_of_tomorrow.jpeg',
    'country' : ['USA', 'Canada'],
    'genres' : ['Adventure', 'Action', 'Fantasy'],
        'description' : `A soldier fighting aliens gets to relive the same day over and over again,
         the day restarting every time he dies.`,
        'cast' : ['Tom Cruise', 'Emily Blunt', 'Bill Paxton', 'Brendan Gleeson'],
        'wallpaper' : 'Wallpapers/edge_of_tomorrow_wallpaper.jpg'
}, {
    'title': 'Hancock',
    'year': 2008,
    'poster': 'Posters/hancock.jpg',
    'country' : ['USA'],
    'genres' : ['Action', 'Comedy', 'Drama', 'Fantasy'],
        'description' : `Hancock is a superhero whose ill-considered behavior regularly causes damage in the millions.
         He changes when the person he saves helps him improve his public image.`,
        'cast' : ['Will Smith', 'Charlize Theron', 'Jason Bateman'],
        'wallpaper' : 'Wallpapers/hancock_wallpaper.jpg'
}, {
    'title': 'I Am Legend',
    'year': 2007,
    'poster': 'Posters/i_am_legend.jpg',
    'country' : ['USA'],
    'genres' : ['Adventure', 'Action', 'Drama', 'Fantasy', 'Thriller'],
        'description' : `Years after a plague kills most of humanity and transforms the rest into monsters,
         the sole survivor in New York City struggles valiantly to find a cure.`,
        'cast' : ['Will Smith', 'Alice Braga', 'Dash Mihok'],
        'wallpaper' : 'Wallpapers/i_am_legend_wallpaper.jpg'
}, {
    'title': 'Jack Reacher',
    'year': 2012,
    'poster': 'Posters/jack_reacher.jpeg',
    'country' : ['USA'],
    'genres' : ['Action', 'Crime', 'Mystery', 'Thriller', ],
        'description' : `A homicide investigator digs deeper into a case involving a trained military sniper
         who shot five random victims.`,
        'cast' : ['Tom Cruise', 'Rosamund Pike', 'Richard Jenkins', 'Werner Herzog', 'David Oyelowo', 'Robert Duvall'],
        'wallpaper' : 'Wallpapers/jack_reacher_wallpaper.jpg'
}, {
    'title': 'The Gentlemen',
    'year': 2019,
    'poster': 'Posters/the_gentlemen.jpeg',
    'country' : ['USA', 'Britain'],
    'genres' : ['Action', 'Comedy', 'Crime'],
        'description' : `An American expat tries to sell off his highly profitable marijuana empire in London,
         triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.`,
        'cast' : ['Matthew McConaughey', 'Charlie Hunnam', 'Henry Golding', 'Michelle Dockery', 'Jeremy Strong',
            'Eddie Marsan', 'Colin Farrell', 'Hugh Grant'],
        'wallpaper' : 'Wallpapers/the_gentlemen_wallpaper.jpg'
}, {
    'title': 'Lucy',
    'year': 2014,
    'poster': 'Posters/lucy.jpg',
    'country' : ['France'],
    'genres' : ['Action', 'Fantasy'],
        'description' : `A woman, accidentally caught in a dark deal, turns the tables on her captors
         and transforms into a merciless warrior evolved beyond human logic.`,
        'cast' : ['Scarlett Johansson', 'Morgan Freeman'],
        'wallpaper' : 'Wallpapers/lucy_wallpaper.jpg'
}, {
    'title': 'Avengers: Endgame',
    'year': 2019,
    'poster': 'Posters/avengers_endgame.jpeg',
    'country' : ['USA'],
    'genres' : ['Adventure', 'Action', 'Drama', 'Fantasy'],
        'description' : `After the devastating events of Мстители: Война бесконечности (2018),
         the universe is in ruins. With the help of remaining allies, the Avengers assemble once more
          in order to reverse Thanos' actions and restore balance to the universe.`,
        'cast' : ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth', 'Scarlett Johansson',
            'Jeremy Renner', 'Don Cheadle', 'Paul Rudd', 'Brie Larson', 'Karen Gillan', 'Danai Gurira',
            'Benedict Wong', 'Jon Favreau', 'Bradley Cooper', 'Gwyneth Paltrow', 'Josh Brolin'],
        'wallpaper' : 'Wallpapers/avengers_endgame_wallpaper.jpg'
}, {
    'title': 'Lockout',
    'year': 2012,
    'poster': 'Posters/lockout.jpg',
    'country' : ['France', 'USA'],
    'genres' : ['Action', 'Fantasy', 'Thriller'],
        'description' : `A man wrongly convicted of conspiracy to commit espionage against the U.S. is offered
         his freedom if he can rescue the president's daughter from an outer space prison taken over by violent inmates.`,
        'cast' : ['Guy Pearce', 'Maggie Grace', 'Vincent Regan', 'Joe Gilgun', 'Lennie James', 'Peter Stormare'],
        'wallpaper' : 'Wallpapers/lockout_wallpaper.jpeg'
}, {
    'title': 'The Expendables',
    'year': 2010,
    'poster': 'Posters/the_expendables.jpeg',
    'country' : ['USA' ,'Spain', 'Germany', 'Bulgaria'],
    'genres' : ['Adventure', 'Action', 'Thriller'],
        'description' : `A CIA operative hires a team of mercenaries to eliminate a Latin dictator and a renegade CIA agent.`,
        'cast' : ['Sylvester Stallone', 'Jason Statham', 'Jet Li', 'Dolph Lundgren', 'Eric Roberts', 'Randy Couture',
            'Steve Austin', 'David Zayas', 'Giselle Itié', 'Charisma Carpenter', 'Gary Daniels', 'Terry Crews', 'Mickey Rourke'],
        'wallpaper' : 'Wallpapers/the_expandebles_wallpaper.jpg'
}, {
    'title': 'Passengers',
    'year': 2016,
    'poster': 'Posters/passengers.jpg',
    'country' : ['USA', 'Australia'],
    'genres' : ['Drama', 'Fantasy', 'Romance', 'Thriller'],
        'description' : `A malfunction in a sleeping pod on a spacecraft traveling to a distant colony planet wakes one passenger 90 years early.`,
        'cast' : ['Jennifer Lawrence', 'Chris Pratt', 'Michael Sheen', 'Laurence Fishburne', 'Andy García'],
        'wallpaper' : 'Wallpapers/passengers_wallpaper.jpg'
}, {
    'title': 'Captain America: The First Avenger',
    'year': 2011,
    'poster': 'Posters/captain_america_first_avenger.jpg',
    'country' : ['USA'],
    'genres' : ['Adventure', 'Action', 'Fantasy', 'Military'],
        'description' : `Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a "Super-Soldier serum".
         But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.`,
        'cast' : ['Chris Evans', 'Tommy Lee Jones', 'Hugo Weaving', 'Hayley Atwell', 'Sebastian Stan', 'Dominic Cooper',
            'Neal McDonough', 'Derek Luke', 'Stanley Tucci'],
        'wallpaper' : 'Wallpapers/captain_america_the_first_avenger_wallpaper.jpg'
}, {
    'title': 'Pirates of the Caribbean: On Stranger Tides',
    'year': 2011,
    'poster': 'Posters/pirates_of_the_caribbean_on_stranger_tides.jpg',
    'country' : ['USA', 'Britain'],
    'genres' : ['Adventure', 'Action', 'Comedy', 'Fantasy'],
        'description' : `Jack Sparrow and Barbossa embark on a quest to find the elusive fountain of youth, only to discover that Blackbeard
         and his daughter are after it too.`,
        'cast' : ['Johnny Depp', 'Penélope Cruz', 'Ian McShane', 'Kevin R. McNally'],
        'wallpaper' : 'Wallpapers/pirates_of_the_caribbean_on_stranger_tides_wallpaper.jpg'
}, {
    'title': 'Prince of Persia: The Sands of Time',
    'year': 2010,
    'poster': 'Posters/prince_of_persia.jpeg',
    'country' : ['USA'],
    'genres' : ['Adventure', 'Action', 'Fantasy'],
        'description' : `A young fugitive prince and princess must stop a villain who unknowingly threatens to destroy the world with
         a special dagger that enables the magic sand inside to reverse time.`,
        'cast' : ['Jake Gyllenhaal', 'Gemma Arterton', 'Ben Kingsley', 'Toby Kebbell', 'Alfred Molina'],
        'wallpaper' : 'Wallpapers/prince_of_persia_wallpaper.jpg'
}, {
    'title': 'Friends with Benefits',
    'year': 2011,
    'poster': 'Posters/friends_with_benefits.jpg',
    'country' : ['USA'],
    'genres' : ['Comedy', 'Drama', 'Romance'],
        'description' : `A young man and woman decide to take their friendship to the next level without becoming a couple,
         but soon discover that adding sex only leads to complications.`,
        'cast' : ['Justin Timberlake', 'Mila Kunis', 'Patricia Clarkson', 'Jenna Elfman', 'Bryan Greenberg', 'Richard Jenkins', 'Woody Harrelson'],
        'wallpaper' : 'Wallpapers/friends_with_benefits_wallpaper.jpg'
}, {
    'title': 'Jumper',
    'year': 2008,
    'poster': 'Posters/jumper.jpeg',
    'country' : ['USA', 'Canada'],
    'genres' : ['Adventure', 'Action', 'Fantasy', 'Thriller'],
        'description' : `A teenager with teleportation abilities suddenly finds himself in the middle of an ancient war between those
         like him and their sworn annihilators.`,
        'cast' : ['Hayden Christensen', 'Jamie Bell', 'Rachel Bilson', 'Michael Rooker', 'AnnaSophia Robb', 'Max Thieriot',
            'Diane Lane', 'Samuel L. Jackson'],
        'wallpaper' : 'Wallpapers/jumper_wallpaper.jpg'
}, {
    'title': 'Transformers: Dark of the Moon',
    'year': 2011,
    'poster': 'Posters/transformers_dark_of_moon.jpg',
    'country' : ['USA'],
    'genres' : ['Adventure', 'Action', 'Fantasy'],
        'description' : `The Autobots learn of a Cybertronian spacecraft hidden on the moon, and race against the Decepticons
         to reach it and to learn its secrets.`,
        'cast' : ['Shia LaBeouf', 'Josh Duhamel', 'John Turturro', 'Tyrese Gibson', 'Rosie Huntington-Whiteley',
            'Patrick Dempsey', 'Kevin Dunn', 'Julie White', 'John Malkovich', 'Frances McDormand'],
        'wallpaper' : 'Wallpapers/transformers_dark_of_the_moon_wallpaper.jpg'
}, {
    'title': 'In Time',
    'year': 2011,
    'poster': 'Posters/in_time.jpeg',
    'country' : ['USA'],
    'genres' : ['Action', 'Drama', 'Romance'],
        'description' : `In a future where people stop aging at 25, but are engineered to live only one more year,
         having the means to buy your way out of the situation is a shot at immortal youth. Here, Will Salas finds himself
          accused of murder and on the run with a hostage - a connection that becomes an important part of the way against the system.`,
        'cast' : ['Amanda Seyfried', 'Justin Timberlake', 'Alex Pettyfer', 'Cillian Murphy'],
        'wallpaper' : 'Wallpapers/in_time_wallpaper.jpeg'
}, {
    'title': 'Total Recall',
    'year': 2012,
    'poster': 'Posters/total_recall.jpeg',
    'country' : ['USA', 'Canada'],
    'genres' : ['Adventure', 'Action', 'Fantasy', 'Thriller'],
        'description' : `A factory worker, Douglas Quaid, begins to suspect that he is a spy after visiting Rekall -
         a company that provides its clients with implanted fake memories of a life they would like to have led -
          goes wrong and he finds himself on the run.`,
        'cast' : ['Colin Farrell', 'Kate Beckinsale', 'Jessica Biel', 'Bryan Cranston', 'John Cho', 'Bill Nighy'],
        'wallpaper' : 'Wallpapers/total_recall_wallpaper.jpg'
}, {
    'title': 'Green Book',
    'year': 2018,
    'poster': 'Posters/green_book.jpg',
    'country' : ['USA', 'China'],
    'genres' : ['Comedy', 'Drama'],
        'description' : `A working-class Italian-American bouncer becomes the driver of
         an African-American classical pianist on a tour of venues through the 1960s American South.`,
        'cast' : ['Viggo Mortensen', 'Mahershala Ali', 'Linda Cardellini'],
        'wallpaper' : 'Wallpapers/green_book_wallpaper.jpg'
}, {
    'title': 'Iron Man',
    'year': 2008,
    'poster': 'Posters/iron_man.jpg',
    'country' : ['USA', 'Canada'],
    'genres' : ['Adventure', 'Action', 'Fantasy'],
        'description' : `After being held captive in an Afghan cave, billionaire engineer Tony Stark
         creates a unique weaponized suit of armor to fight evil.`,
        'cast' : ['Robert Downey Jr.', 'Terrence Howard', 'Jeff Bridges', 'Shaun Toub', 'Gwyneth Paltrow'],
        'wallpaper' : 'Wallpapers/iron_man_wallpaper.jpg'
}, {
    'title': 'The Old Guard',
    'year': 2020,
    'poster': 'Posters/the_old_guard.jpeg',
    'country' : ['USA'],
    'genres' : ['Action', 'Fantasy'],
        'description' : `A covert team of immortal mercenaries is suddenly exposed and must now fight
         to keep their identity a secret just as an unexpected new member is discovered.`,
        'cast' : ['Charlize Theron', 'KiKi Layne', 'Marwan Kenzari', 'Luca Marinelli', 'Harry Melling',
            'Veronica Ngo', 'Matthias Schoenaerts', 'Chiwetel Ejiofor'],
        'wallpaper' : 'Wallpapers/the_old_guard_wallpaper.jpg'
}, {
    'title': 'The Revenant',
    'year': 2015,
    'poster': 'Posters/the_revenant.jpeg',
    'country' : ['USA', 'China', 'Taiwan'],
    'genres' : ['Adventure', 'Action', 'Drama', 'Western'],
        'description' : `A frontiersman on a fur trading expedition in the 1820s fights for survival
         after being mauled by a bear and left for dead by members of his own hunting team.`,
        'cast' : ['Leonardo DiCaprio', 'Tom Hardy', 'Domhnall Gleeson', 'Will Poulter'],
        'wallpaper' : 'Wallpapers/the_revenant_wallpaper.jpg'
}, {
    'title': 'Aquaman',
    'year': 2018,
    'poster': 'Posters/aquaman.jpg',
    'country' : ['USA', 'Australia'],
    'genres' : ['Adventure', 'Action', 'Fantasy'],
        'description' : `Arthur Curry, the human-born heir to the underwater kingdom of Atlantis,
         goes on a quest to prevent a war between the worlds of ocean and land.`,
        'cast' : ['Jason Momoa', 'Amber Heard', 'Willem Dafoe', 'Patrick Wilson', 'Dolph Lundgren',
            'Yahya Abdul-Mateen II', 'Nicole Kidman'],
        'wallpaper' : 'Wallpapers/aquaman_wallpaper.jpg'
}, {
    'title': 'Escape Plan',
    'year': 2013,
    'poster': 'Posters/escape_plan.jpg',
    'country' : ['USA'],
    'genres' : ['Action', 'Thriller'],
        'description' :  `When a structural-security authority finds himself set up and incarcerated
                      in the world's most secret and secure prison, he has to use his skills
                      to escape with help from the inside.`,
        'cast' : ['Sylvester Stallone', 'Arnold Schwarzenegger'],
        'wallpaper' : 'Wallpapers/escape_plan_wallpaper.jpg'
}, {
    'title': 'The Martian',
    'year': 2015,
    'poster': 'Posters/the_martian.jpg',
    'country' : ['USA', 'Britain', 'Hungary'],
    'genres' : ['Adventure', 'Fantasy'],
        'description' : `An astronaut becomes stranded on Mars after his team assume him dead,
         and must rely on his ingenuity to find a way to signal to Earth that he is alive.`,
        'cast' : ['Matt Damon', 'Jessica Chastain', 'Kristen Wiig', 'Jeff Daniels', 'Michael Peña',
            'Kate Mara', 'Sean Bean', 'Sebastian Stan', 'Aksel Hennie', 'Chiwetel Ejiofor'],
        'wallpaper' : 'Wallpapers/the_martian_wallpaper.jpg'
}, {
    'title': 'Tucker & Dale vs Evil',
    'year': 2010,
    'poster': 'Posters/tucker_and_dale_vs_evil.jpeg',
    'country' : ['Canada'],
    'genres' : ['Comedy', 'Horror'],
        'description' : `Affable hillbillies Tucker and Dale are on vacation at their
         dilapidated mountain cabin when they are mistaken for murderers by a group of preppy college students.`,
        'cast' : ['Tyler Labine', 'Alan Tudyk', 'Katrina Bowden', 'Jesse Moss', 'Chelan Simmons'],
        'wallpaper' : 'Wallpapers/tucker_and_dail_vs_evil_wallpaper.jpeg'
}, {
    'title': 'The Accountant',
    'year': 2016,
    'poster': 'Posters/the_accountant.jpeg',
    'country' : ['USA'],
    'genres' : ['Action', 'Crime', 'Drama', 'Thriller'],
        'description' : `As a math savant uncooks the books for a new client, the Treasury Department
         closes in on his activities, and the body count starts to rise.`,
        'cast' : ['Ben Affleck', 'Anna Kendrick', 'J. K. Simmons', 'Jon Bernthal', 'Jeffrey Tambor', 'John Lithgow'],
        'wallpaper' : 'Wallpapers/the_accountant_wallpaper.jpg'
}, {
    'title': 'Guardians of the Galaxy',
    'year': 2014,
    'poster': 'Posters/guardians_of_the_galaxy.jpeg',
    'country': ['USA'],
    'genres': ['Adventure', 'Action', 'Comedy', 'Fantasy'],
        'description' : `A group of intergalactic criminals must pull together to stop a fanatical warrior
         with plans to purge the universe.`,
        'cast' : ['Chris Pratt', 'Zoe Saldana', 'Dave Bautista', 'Vin Diesel', 'Bradley Cooper', 'Lee Pace',
            'Michael Rooker', 'Karen Gillan', 'Djimon Hounsou', 'John C. Reilly', 'Glenn Close', 'Benicio del Toro'],
        'wallpaper' : 'Wallpapers/guardians_of_the_galaxy_wallpaper.jpg'
}, {
    'title': 'The Mechanic',
    'year': 2010,
    'poster': 'Posters/the_mechanic.jpeg',
    'country' : ['USA'],
    'genres' : ['Action', 'Thriller'],
        'description' : `An elite hitman teaches his trade to an apprentice who has a connection to one of his previous victims.`,
        'cast' : ['Jason Statham', 'Ben Foster', 'Donald Sutherland', 'Tony Goldwyn', 'James Logan',
            'Mini Andén', 'Jeff Chase', 'Christa Campbell'],
        'wallpaper' : 'Wallpapers/the_mechanic_wallpaper.jpeg'
}
];

let genresArray = ['All genres', 'Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Fantasy',
    'Horror', 'Military', 'Mystery', 'Romance', 'Sport', 'Thriller', 'Western'];

let countriesArray = ['All countries', 'USA', 'India', 'Russia', 'Canada', 'France', 'Britain',
    'China', 'Germany', 'Australia', 'Belarus'];

let yearsArray = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020, 2021];

let showFilter = function () {
    let ul = document.createElement('ul');
    ul.className = 'main_filter';

    showFilterItems(ul, 'movie_genre_filter', 'movie_genres', 'movie genres', genresArray);

    showFilterItems(ul, 'countries_filter', 'movie_country', 'countries', countriesArray);

    showFilterYears(ul);

    document.querySelector('.header_filter').prepend(ul);
}

let showFilterItems = function (ul, className, selectClass, selectName, itemsArray) {
    let li = document.createElement('li');
    li.className = className;
    li.className += ' filter_item';

    ul.append(li);

    createOption(li,selectClass, selectName, itemsArray);
}

let showFilterYears = function (ul) {
    let li = document.createElement('li');
    li.className = 'years_filter';
    li.className += ' filter_item';

    ul.append(li);

    createOption(li, 'first_years_menu', 'years', yearsArray);

    li.innerHTML += '-';

    createOption(li, 'second_years_menu', 'years', yearsArray);
}

let createOption = function (li, selectClass, selectName, selectArray) {
    let select = document.createElement('select');
    select.className = 'select_menu ';
    select.className += selectClass;
    select.name = selectName;
    select.setAttribute('onchange', 'showMovieList()');
    li.append(select);

    for (let i = 0; i < selectArray.length; i++) {
        let option = document.createElement('option');
        if (selectArray[i] == 2021) option.selected = true;
        option.value = selectArray[i];
        option.innerHTML = selectArray[i];
        select.append(option);
    }
}

showFilter();

let firstYear = document.querySelector('.first_years_menu');
let secondYear = document.querySelector('.second_years_menu');
let movieGenre = document.querySelector('.movie_genres');
let movieCountry = document.querySelector('.movie_country');

let firstYearVal = firstYear.value;
let secondYearVal = secondYear.value;

let showHomePage = function () {
    let main = document.querySelector('.main_body');

    let div = document.createElement('div');
    div.className = 'main_movie_list';

    let ul = document.createElement('ul');
    ul.className = 'movie_list';

    main.prepend(div);
    div.prepend(ul);

    for (let i = 0; i < movieArray.length; i++) {
        let title = movieArray[i].title;
        let poster = movieArray[i].poster;

        showMovie(ul, title, poster);
    }
}

let createMovieInformationItems = function (div, itemName, movieItemName, movieItemNameClass) {
    let span = document.createElement('span');
    span.className = 'title_movie_information';
    span.innerHTML = itemName;
    div.append(span);

    for (let i = 0; i < movieItemName.length; i++) {
        let span = document.createElement('span');
        span.classList.add('movie_information_item', movieItemNameClass);
        span.innerHTML = movieItemName[i];
        div.append(span);
    }
}

let showMovieInformation = function (movie) {
    let div = document.createElement('div');
    div.className = 'movie_shadow';

    let divMovie = document.createElement('div');
    divMovie.classList.add('movie');
    div.prepend(divMovie);

    let img = document.createElement('img');
    img.className = 'movie_wallpaper';
    img.src = movie.wallpaper;
    img.height = '407';
    img.width = '720';

    let p = document.createElement('p');
    p.className = 'main_movie_title';
    p.innerHTML = movie.title;

    let spanYear = document.createElement('span');
    spanYear.className = 'main_movie_title_year';
    spanYear.innerHTML = movie.year;

    p.prepend(spanYear);

    let spanDescription = document.createElement('span');
    spanDescription.className = 'movie_description';
    spanDescription.innerHTML = movie.description;

    let divGenres = document.createElement('div');
    divGenres.classList.add('movie_information', 'movie_genres');

    createMovieInformationItems(divGenres, 'Genres: ', movie.genres, 'movie_genres_item');

    let divCast = document.createElement('div');
    divCast.classList.add('movie_information', 'movie_cast');

    createMovieInformationItems(divCast, 'Cast: ', movie.cast, 'movie_cast_item');

    let divClose = document.createElement('div');
    divClose.className = 'movie_close';

    let button = document.createElement('button');
    button.className = 'movie_button_close';
    button.type = 'button';
    divClose.prepend(button);

    divMovie.append(img);
    divMovie.append(p);
    divMovie.append(spanDescription);
    divMovie.append(divGenres);
    divMovie.append(divCast);
    divMovie.append(divClose);

    document.body.append(div);

    let movieButtonClose = document.querySelector('.movie_button_close');
    let movieShadow = document.querySelector('.movie_shadow');

    let buttonClose = function (button, movie) {
        button.addEventListener('click', function (evt) {
            evt.preventDefault();
            document.querySelector('.movie').classList.add('movie_close_animation');
            setTimeout(() => movie.remove(),400);
        });
    };

    let keyClose = function (movie) {
        window.addEventListener('keydown', function (evt){
            evt.preventDefault();
            document.querySelector('.movie').classList.add('movie_close_animation');
            if (evt.key === 'Escape') {
                setTimeout(() => movie.remove(),400);
            }
        });
    }

    buttonClose(movieButtonClose, movieShadow);
    keyClose(movieShadow);
}

let checkMovien = function (title) {
    for (let i = 0; i < movieArray.length; i++) {
        if (movieArray[i].title == title) showMovieInformation(movieArray[i]);
    }
}

let toMovie = function (li) {
    li.addEventListener('click', function (evt) {
        evt.preventDefault();
        checkMovien(li.textContent);
        let movie = document.querySelector('.movie').classList.add('movie_show');
    })
}

let showMovie = function (ul, title, poster) {
    let li = document.createElement('li');
    li.className = 'movie_list_item';

    let img = document.createElement('img');
    img.src = poster;
    img.height = '228';
    img.width = '160';

    let div = document.createElement('div');
    div.className = 'movie_title_background';

    let span = document.createElement('span');
    span.className = 'movie_title';
    span.innerHTML = title;

    div.prepend(span);
    li.prepend(img);
    li.append(div);
    ul.append(li);

    toMovie(li);
}

showHomePage();

let showYear = function () {
    if (firstYear.value > secondYear.value) {
        alert (`You can't choose this year.`);

        firstYear.value = firstYearVal;
        secondYear.value = secondYearVal;

        return false;
    }

    firstYearVal = firstYear.value;
    secondYearVal = secondYear.value;

    return true;
}

let showMovieList = function () {
    if(!showYear()) return;

    let movieList = document.querySelectorAll('.movie_list_item');

    for(let i = 0; i < movieList.length; i++) {
        movieList[i].remove();
    }

    let currentMovieArray = movieArray;

    if (movieGenre.value != 'All genres') {
        currentMovieArray = showGenres (currentMovieArray, movieGenre.value);
    }

    if (movieCountry.value != 'All countries') {
        currentMovieArray = showCountries (currentMovieArray, movieCountry.value);
    }

    for( let i = 0; i < currentMovieArray.length; i++) {
        if (currentMovieArray[i].year >= firstYear.value && currentMovieArray[i].year <= secondYear.value) {
            let title = currentMovieArray[i].title;
            let poster = currentMovieArray[i].poster;

            let ul = document.querySelector('.movie_list')

            showMovie(ul, title, poster);
        }
    }
}

let showCountries = function (array, country) {
    let newMovieArray = [];

    for (let i = 0; i < array.length; i++) {
        if (checkFilterItem(array[i].country, country) == true) {
            newMovieArray.push(array[i]);
        }
    }

    return(newMovieArray);
}

let showGenres = function (array, genre) {
    let newMovieArray = [];

    for (let i = 0; i < array.length; i++) {
        if (checkFilterItem(array[i].genres, genre) == true) {
            newMovieArray.push(array[i]);
        }
    }

    return(newMovieArray);
}

let checkFilterItem = function (movieItem, filterItem) {
    let count = 0;

    for (let i = 0; i < movieItem.length; i++) {
        if (movieItem[i] == filterItem) count++;
    }

    if (count > 0) return true;
    else return false;
}