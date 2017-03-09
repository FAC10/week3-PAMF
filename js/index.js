// FETCH
var fetch = (function(url, callback){
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        callback(null, response);
      } else if (xhr.readyState === 4 && xhr.status === 404) {
        callback("It's not working! Status: " + xhr.status);
      }
  };
  xhr.open('GET', url, true);
  xhr.send();
});

// TITLE HANDLING
function bannedWords(input) {
    var banned = ['of','the','from','my', 'II', 'III', 'IV', 'V', 'is', 'or'];
    var result = input.name.split(' ').map(function (a) {
    return (banned.indexOf(a.toLowerCase()) !== -1) ? a.toUpperCase() : a.toLowerCase();
    });
    return result;
}
