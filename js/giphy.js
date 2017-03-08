console.log("hello! I am giphy API");
// TARGET URL: http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC

function giphy (obj, callback) {
  var apiKey = 'dc6zaTOxFJmzC';
  var titleArray = obj.name.split(' ');
  callback(null, titleArray);
}

var testObj = {name:"Lord of the rings"}

giphy(testObj, function (err, res) {
  console.log(res);
});
