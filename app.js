let apikey = " https://www.omdbapi.com/?apikey=91f57ebf&t=";

function searchMovie() {
  let query = document.getElementById("movieName").value;
  let search = apikey + query;
  fetch(search)
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      document.getElementById("title").innerText = data.Title;
      document.getElementById("desc").innerText = data.Plot;
      document.getElementById("genre").innerText = data.Genre;
      document.getElementById("actors").innerText = data.Actors;
      document.getElementById("directors").innerText = data.Director;
      document.getElementById("language").innerText = data.Language;
      document.getElementById("awards").innerText = data.Awards;
      document.getElementById("collection").innerText = data.BoxOffice;
      document.getElementById("ratings").innerText = data.imdbRating;
      document.getElementById("writers").innerText = data.Writer;
      document.getElementById("poster").src = data.Poster;
    });
  document.body.innerHTML = `
  <div class="head">
        <h1>Movie Searcher App</h1>
    </div>
    <div class="search">
        <input type="text" id="movieName" placeholder="Search any movie by its name...">
        <button class="btn" onclick="searchMovie()">Search movie</button>
    </div>
    
  <div class="container">
        <img src="" id="poster" alt="">
        <div>
            <h2 id="title"></h2>
            <p id="desc"></p>
            <p>Genre: <span id="genre"></span></p>
            <p>Actors: <span id="actors"></span></p>
            <p>Directors: <span id="directors"></span></p>
            <p>Writers: <span id="writers"></span></p>
            <p>Language: <span id="language"></span></p>
            <p>Box Office Collection: <span id="collection"></span></p>
            <p>Awards: <span id="awards"></span></p>
            <p>IMDB Ratings: <span id="ratings"></span></p>
        </div>
      
    </div>`;
}