var Giphy = (function (){
  var isCaps = function (string) {
    return string.toUpperCase() === string;
  };

  var buildURL = function (word) {
    return 'http://api.giphy.com/v1/gifs/search?q=' + word + '&limit=3&api_key=dc6zaTOxFJmzC';
  };

  // map an array with a values dependent on condition
  function conditionalArrayMapApply(arr, ifthis, thenthis, elsethis) {
    return arr.map(function (element) {
      return ifthis(element) ? thenthis(element) : elsethis(element);
    });
  }

  // conditionalArrayMap
  function conditionalArrayMap (arr, ifthis, thenthis, elsethis) {
    return arr.map(function (element) {
      return ifthis(element) ? thenthis : elsethis;
    });
  }
  // function to allow skipping within a waterfall
  function skip(arg, callback) {
    callback(null, arg);
  }

  function returnVal (arg) {
    return arg;
  }

  // apply arguments to tasks in order and output an array with results
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

  var accessURL = function (gifObj) {
    return gifObj.images.original.url;
  };

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

waterfall({ name: 'My Big Fat Greek Wedding', gifs: ['MY', 'big', 'fat', 'greek', 'wedding']  }, [Giphy.giphyFetch, Giphy.addGiphyUrls], function (err, resp) {
  console.log(resp);
});



// Giphy.giphyFetch({ name: 'My Big Fat Greek Wedding', gifs: ['my', 'big', 'fat', 'greek', 'wedding']  }, function (err, resp) {
//   if(err) console.log(err);
//   console.log(resp);
// });
