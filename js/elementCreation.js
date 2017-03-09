// // name: "lord of the rings", gifs: [url, 'OF', "THE", url]
//
var createElements = (function () {
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

function create (num, element, cls, txt, src) {
  var arr = [];
  while (num > 0) {
    var el = document.createElement(element);
    if (cls) {
    el.className = cls;
  }
  if (txt) {
    el.innerHTML = txt;
  }
  if (src) {
    el.src = src;
  }
    arr.push(el);
    num--;
  }
  console.log(arr);
  return arr;
}
  return { create:create, howManyGifs:howManyGifs };
})();

//tests

// create(3, 'p', 'columns',null, 'https://www.hello.com/img_/hello_logo_hero.png');
// //
// howManyGifs(['www.facebook.com', 'OF', "google.com", 'THE']);
