var attachForm = (function (){

  var addFormEvent = function (obj) {
    console.log('formadding');
    var form = document.getElementsByTagName('form')[0];
    form.style.display = 'inline';
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      answerValidation(e.target[0].value, obj.name);
    });
  }
  function answerValidation(user_answer, answer){
    console.log('formValidation')
    if (answer.toLowerCase() === user_answer.toLowerCase() ) {
      console.log("success");
    }
    else {
      console.log("try again");
    }
  }

  return function (obj, cb) {
    console.log(obj.name);
    addFormEvent(obj);
    cb(null, 'THE GAME IS NOW READY');
  }

})();

var guessMovieApp = (function () {
  var bannedWords = function (input, cb) {
    var banned = ['of','the','from','my'];
    var result = { name: input.name };
    result.gifs = input.name.split(' ').map( function (a) {
      return (banned.indexOf(a.toLowerCase()) !== -1) ? a.toUpperCase() : a.toLowerCase();
    });
    cb(null, result);
  };

  var run = function () {
    var tasks = [bannedWords, Giphy.giphyFetch, Giphy.addGiphyUrls, attachForm];
    MovieDB.fetchMovieDB(function (err, resp) {
      waterfall(resp, tasks, function (err, resp) {
        if(err) console.log(err);
        console.log(resp);
      });
    });
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
   return { run:run };
})();

guessMovieApp.run();
