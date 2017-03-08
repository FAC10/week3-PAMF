
var MovieDB = (function () {
  function random(n) {
   return Math.floor(Math.random() * n) + 1;
  }


  function makeUrl() {
    return "https://api.themoviedb.org/3/discover/movie?"+
    "api_key=7206d76e96b3e78b399d05fbcda1ea0d&language=en-US%20en-GB&"+
    "sort_by=popularity.desc&include_adult=false&include_video=false&page=" + random(50);
  }

  function fetchMovieDB (cb) {
    fetch(makeUrl(), function (err, res) {
      if (err) { cb(err); }
      cb(null, { name:res.results[random(19)].title });
    });
  }

  return { fetchMovieDB:fetchMovieDB };
})()


// 
//
// MovieDB.fetchMovieDB(function(err, result) {
//   if(err) {}
//   console.log(result);
// })
