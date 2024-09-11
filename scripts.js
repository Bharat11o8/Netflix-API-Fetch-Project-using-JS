let posterDiv = document.querySelector("#poster");
let netflixOriginalsDiv = document.querySelector("#netflixOriginals");
let netflixOriginalsDiv1 = document.querySelector("#netflixOriginals-1");
let netflixOriginalsDiv2 = document.querySelector("#netflixOriginals-2");
let netflixOriginalsDiv3 = document.querySelector("#netflixOriginals-3");

let Display = async () => {
  let posterFetch = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=3cca08e3c513cfed4e5af2b79d092c47"
  );
  let netflixOriginalFetch = await fetch(
    "https://api.themoviedb.org/3/discover/tv?api_key=3cca08e3c513cfed4e5af2b79d092c47"
  );
  let netflixOriginalFetch1 = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=3cca08e3c513cfed4e5af2b79d092c47&with_genres=35"
  );
  let netflixOriginalFetch2 = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=3cca08e3c513cfed4e5af2b79d092c47&with_genres=99  "
  );
  let netflixOriginalFetch3 = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=3cca08e3c513cfed4e5af2b79d092c47&with_genres=10749"
  );

  let finalPosterFetch = await posterFetch.json();
  let randomIndex = Math.floor(Math.random() * finalPosterFetch.results.length);
  let result = finalPosterFetch.results[randomIndex];

  let posterPath = result.backdrop_path
    ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
    : "path_to_placeholder_image";

  posterDiv.innerHTML = `
      <div class="posterContainer">
        <img src="${posterPath}" alt="${result.title}">
        <div class="bottomfade"></div>
        <div class="posterDetails">
          <h1>${result.title || result.name}</h1>
          <div class="buttons">
            <button class="play">Play</button>
            <button class="more-info">Read more</button>
          </div>
          <p>${result.overview}</p>
        </div>
      </div>`

  let finalNetflixOriginalFetch = await netflixOriginalFetch.json();
  let finalNetflixOriginalFetch1 = await netflixOriginalFetch1.json();
  let finalNetflixOriginalFetch2 = await netflixOriginalFetch2.json();
  let finalNetflixOriginalFetch3 = await netflixOriginalFetch3.json();

  netflixOriginalsDiv.innerHTML = ``;
  netflixOriginalsDiv1.innerHTML = ``;
  netflixOriginalsDiv2.innerHTML = ``;
  netflixOriginalsDiv3.innerHTML = ``;

  let validNetflixResults = finalNetflixOriginalFetch.results.filter(
    (result) => result.poster_path
  );
  let validNetflixResults1 = finalNetflixOriginalFetch1.results.filter(
    (result) => result.poster_path
  );
  let validNetflixResults2 = finalNetflixOriginalFetch2.results.filter(
    (result) => result.poster_path
  );
  let validNetflixResults3 = finalNetflixOriginalFetch3.results.filter(
    (result) => result.poster_path
  );
  if (validNetflixResults.length === 0) {
    throw new Error("No valid Netflix Originals found");
  }
  if (validNetflixResults1.length === 0) {
    throw new Error("No valid Netflix Originals found");
  }
  if (validNetflixResults2.length === 0) {
    throw new Error("No valid Netflix Originals found");
  }
  if (validNetflixResults3.length === 0) {
    throw new Error("No valid Netflix Originals found");
  }

  validNetflixResults.forEach((result) => {
    let netflixOriginalPath = `https://image.tmdb.org/t/p/w500${result.poster_path}`;

    netflixOriginalsDiv.innerHTML += `
        <div class="netflixOriginalContainer">
          <img src="${netflixOriginalPath}" alt="${
      result.title || result.name
    }">
        </div>`;
  });
  validNetflixResults1.forEach((result) => {
    let netflixOriginalPath1 = `https://image.tmdb.org/t/p/w500${result.poster_path}`;

    netflixOriginalsDiv1.innerHTML += `
        <div class="netflixOriginalContainer">
          <img src="${netflixOriginalPath1}" alt="${
      result.title || result.name
    }">
        </div>`;
  });
  validNetflixResults2.forEach((result) => {
    let netflixOriginalPath2 = `https://image.tmdb.org/t/p/w500${result.poster_path}`;

    netflixOriginalsDiv2.innerHTML += `
        <div class="netflixOriginalContainer">
          <img src="${netflixOriginalPath2}" alt="${
      result.title || result.name
    }">
        </div>`;
  });
  validNetflixResults3.forEach((result) => {
    let netflixOriginalPath3 = `https://image.tmdb.org/t/p/w500${result.poster_path}`;

    netflixOriginalsDiv3.innerHTML += `
        <div class="netflixOriginalContainer">
          <img src="${netflixOriginalPath3}" alt="${
      result.title || result.name
    }">
        </div>`;
  });
};

Display();
