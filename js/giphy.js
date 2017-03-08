var Giphy = (function (){
  var buildURL = function (word) {
    return 'http://api.giphy.com/v1/gifs/search?q=' + word + '&limit=10&api_key=dc6zaTOxFJmzC';
  };

  var giphyFetch = function (arr, callback) {
    var result = arr.map(function () { return; });
    var count = 0;
    arr.forEach(function (string, index) {
      if (string[0].toUpperCase() === string[0]) {
        count++;
        result[index] = string;
        if (count === result.length) callback(null, result);
      } else {
        fetch(buildURL(string), function (err, res) {
          if (err) { return callback(err); }
          count++;
          result[index] = res;
          if (count === result.length) callback(null, result);
        });
      }
    });
  };

  return { buildURL:buildURL, giphyFetch:giphyFetch };
})();
