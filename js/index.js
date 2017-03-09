// FETCH
var fetch = (function(url, callback){
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("success from " + url);
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
	var banned = ['of','the','from'];
	input = response.name.split(' ').map(function (a) {
	return (banned.indexOf(a.toLowerCase()) !== -1) ? a.toUpperCase() : a;
	});
	return input;
}
