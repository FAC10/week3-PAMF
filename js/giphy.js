var Giphy = (function (){
  var isCaps = function (string) {
    return string.toUpperCase() === string;
  };

  var buildURL = function (word) {
    return 'http://api.giphy.com/v1/gifs/search?q=' + word + '&limit=3&api_key=dc6zaTOxFJmzC';
  };

  // map an array with a values dependent on condition
  function conditionalArrayMap(arr, ifthis, thenthis, elsethis) {
    return arr.map(function (element) {
      return ifthis ? thenthis : elsethis;
    });
  }


  // function to allow skipping within a waterfall
  function skip(arg, callback) {
    callback(null, arg);
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
    // { name: title, gifs: string string CAPSTRING }
    
  };

  return { giphyFetch:giphyFetch };
})();

// function waterfall(arg, tasks, cb) {
//    var waterfallcb = function(error, res) {
//     if (error) { return cb(error); }
//     n += 1;
//     if (n === tasks.length) {
//       tasks[n - 1](res, cb);
//     } else {
//       tasks[n - 1](res, waterfallcb);
//     }
//   };
//   var n = 0;
//   waterfallcb(null, arg);
// }





var args = ['http://api.giphy.com/v1/gifs/search?q=lord&limit=3&api_key=dc6zaTOxFJmzC', 'OF',
            'http://api.giphy.com/v1/gifs/search?q=rings&limit=3&api_key=dc6zaTOxFJmzC'];
var t = buildTasks(args, isCaps, skip, fetch);

waterfallWithArgs(args, t, function (err, resp){ console.log(resp); });
