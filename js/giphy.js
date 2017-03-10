// Checks if string is uppercase
var Giphy = (function (){
  var isCaps = function (string) {
    return string.toUpperCase() === string;
  };
// Builds url for Giphy API call from the giphy keyword
  var buildURL = function (word) {
    return 'https://api.giphy.com/v1/gifs/search?q=' + word + '&limit=3&api_key=dc6zaTOxFJmzC';
  };

  // maps an array with a values dependent on condition
  function conditionalArrayMapApply(arr, ifthis, thenthis, elsethis) {
    return arr.map(function (element) {
      return ifthis(element) ? thenthis(element) : elsethis(element);
    });
  }

  // maps an array with a values into array of functions dependent on condition
  function conditionalArrayMap (arr, ifthis, thenthis, elsethis) {
    return arr.map(function (element) {
      return ifthis(element) ? thenthis : elsethis;
    });
  }
  // fallows skipping within a waterfall
  function skip(arg, callback) {
    callback(null, arg);
  }
  // return passed argument
  function returnVal (arg) {
    return arg;
  }

  // applies arguments to tasks in order and output an array with results
  function waterfallWithArgs(args, tasks, cb) {
    var waterfallcb = function(error, res) {
      if (error) { return cb(error); }
      result[n - 1] = res;
      if (n === tasks.length) {
         cb(null, result);
      } else {
        n += 1;
        tasks[n - 1](args[n - 1], waterfallcb);
      }
    };
   var n = 1;
   var result = tasks.map(function(){ return; });
   tasks[0](args[0], waterfallcb);
  }
  // Fetches the giphy
  var giphyFetch = function (obj, callback) {
    // { name: 'My Big Fat Greek Wedding', gifs: ['my', 'big', etc]  }
    var result = { name:obj.name };
    var args = conditionalArrayMapApply(obj.gifs, isCaps, returnVal, buildURL);
    var tasks = conditionalArrayMap(args, isCaps, skip, fetch);

    waterfallWithArgs(args, tasks, function (err, resp) {
      if (err) callback(err);
      result.gifs = resp;
      callback(null, result);
    });
    // callback(err, { name: 'My big etc.', gifs: [[array of url], url, url]})
  };
  // Prints giphy url from nested object
  var accessURL = function (gifObj) {
    return gifObj.images.original.url;
  };
  // creates object with the movie title and an array of giphy urls and 'banned' words
  var addGiphyUrls = function (obj,cb){
    var result = {name:obj.name};

    result.gifs = obj.gifs.map(function (word){
      if (typeof word === 'string') {
        return word;
      }
      return word.data.map(function (gifs){
        return accessURL(gifs);
      });
    });
    cb(null, result);
  };

  return { giphyFetch : giphyFetch,
     addGiphyUrls:addGiphyUrls,
     conditionalArrayMapApply:conditionalArrayMapApply,
     conditionalArrayMap:conditionalArrayMap,
     buildURL:buildURL,
     waterfallWithArgs:waterfallWithArgs
   };
})();
