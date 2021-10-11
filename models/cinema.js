const Cinema = function (films) {
    this.films = films;
  };
  
// 1. OLD WAY BEFORE HIGHER ORDER FUNCTIONS
// 1. should be able to get a list of film titles
// Cinema.prototype.filmsTitleList = function () {
//   const titles = []; 

//   for (const film of this.films) {
//     titles.push(film.title);
//   }
//   console.log('1. list of film titles: ', titles);
//   return titles;
// }


// NEW WAY HIGHER ORDER FUNCTION APPROACH
Cinema.prototype.filmsTitleList = function () {
  return this.films.map((film) => {
    console.log('1. film title list: ', film.title);
    return film.title;
  });
};

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// 2. OLD WAY BEFORE HIGHER ORDER FUNCTIONS
// 2. should be able to find a film by title
// Cinema.prototype.filmsFindByTitle = function (title) {
//   const titleFound = [];

//   for (const film of this.films) {
//     if (film.title === title) {
//         titleFound.push(film.title);
//     }
//   }
//   console.log('2. find a film by title: ', titleFound);
//   return titleFound;
// }


// NEW WAY HIGHER ORDER FUNCTION APPROACH
Cinema.prototype.filmsFindByTitle = function (title) {
  return this.films.find((film) => {
    return film.title === title;
  });
};

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// 3. OLD WAY BEFORE HIGHER ORDER FUNCTIONS
// 3. should be able to filter films by genre
// OLD WAY BEFORE HIGHER ORDER FUNCTIONS
// Cinema.prototype.filmsFilterByGenre = function (genre) {
//   const genreFound = [];

//   for (const film of this.films) {
//     if (film.genre === 'drama') {
//         genreFound.push(film);
//     }
//   }
//   console.log('3. filter films by genre: ', genreFound);
//   return genreFound;
// }


// NEW WAY HIGHER ORDER FUNCTION APPROACH
Cinema.prototype.filmsFilterByGenre = function (genre) {
  return this.films.filter((film) => {
    return film.genre === genre;
  });
};

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// 4. OLD WAY BEFORE HIGHER ORDER FUNCTIONS
// 4. should be able to check whether there are some films from a particular year
// Cinema.prototype.filmsFromYear = function (year) {
//   const yearFound = [];

//   for (const film of this.films) {
//     if (film.year === 2017) {
//         yearFound.push(film);
//     }
//   }
//   console.log('4. films from a particular year: ', yearFound);
//   return yearFound;
// }


// NEW WAY HIGHER ORDER FUNCTION APPROACH
Cinema.prototype.filmsFromYear = function (year) {
  return this.films.some((film) => {
    return film.year === year;
  });
};

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// 5. OLD WAY BEFORE HIGHER ORDER FUNCTIONS
// 5. should be able to check whether there are no films from a particular year
// Cinema.prototype.filmsCertainLength = function (length) {
// }


// NEW WAY HIGHER ORDER FUNCTION APPROACH
Cinema.prototype.filmsCertainLength = function (length) {
  return this.films.every((film) => {
    return film.length >= length;
  });
};

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

// 6. OLD WAY BEFORE HIGHER ORDER FUNCTIONS
// 6. should be able to calculate total running time of all films
// Cinema.prototype.filmsTotalRunTimeAllFilms = function (length) {
// }


// NEW WAY HIGHER ORDER FUNCTION APPROACH
Cinema.prototype.filmsTotalRunTimeAllFilms = function () {
  return this.films.reduce((total, film) => {
    return total += film.length;
  }, 0);
};


module.exports = Cinema;