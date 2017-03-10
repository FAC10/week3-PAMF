//Connects different parts of the app by calling them in the right order.
// Also specifies'banned' words that should not be converted into gifs but displayed as they are.
var guessMovieApp = (function () {
  var bannedWords = function (input, cb) {
    var banned = ['of','the','from','my', 'II', 'III', 'IV', 'V', 'is', 'or', 'and'];
    var result = { name: input.name };
    result.gifs = input.name.split(' ').map( function (a) {
      return (banned.indexOf(a.toLowerCase()) !== -1) ? a.toUpperCase() : a.toLowerCase();
    });
    cb(null, result);
  };

  var run = function () {
    var tasks = [bannedWords, Giphy.giphyFetch, Giphy.addGiphyUrls, createElements.creatorFunction, attachForm];
    MovieDB.fetchMovieDB(function (err, resp) {
      waterfall(resp, tasks, function (err, resp) {
        if(err) console.log(err);
        console.log(resp);
      });
    });
  };

  var reset = function () {
    guessMovieApp.run();
    var input = document.getElementsByTagName('input')[0];
    input.value = '';
    input.focus();
  };

  function waterfall(arg, tasks, cb) {
    var waterfallcb = function(error, res) {
      if (error) { return cb(error); }
      n += 1;
      if (n === tasks.length) {
        tasks[n - 1](res, cb);
      } else {
        tasks[n - 1](res, waterfallcb);
      }
    };
    var n = 0;
    waterfallcb(null, arg);
   }
   return { run:run, bannedWords:bannedWords, waterfall: waterfall, reset:reset };
})();

guessMovieApp.run();

document.getElementById('reset-button').addEventListener('click', guessMovieApp.reset);
