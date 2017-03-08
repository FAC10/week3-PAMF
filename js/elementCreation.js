// // name: "lord of the rings", gifs: [url, 'OF', "THE", url]
//
function howManyGifs (arr) {
  var count = 0;
  arr.forEach(function(e) {
    if(e.toUpperCase() != e) {
      count++;
    }
  })
  console.log(count);
  return count;
}

function create (num, element, cls) {
  while (num > 0) {
    console.log('num is ' + num);
    var el = document.createElement(element);
    console.log('element is ' + el);
    el.className = cls;
    console.log(el.className);
    num = num--;
  }
}

create(3, 'section', 'columns');

howManyGifs(['www.facebook.com', 'OF', "google.com", 'THE']);
