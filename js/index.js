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
