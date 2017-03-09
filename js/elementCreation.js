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

function create (element, cls, txt, src) {
    var el = document.createElement(element);
    if (cls) {
    el.className = cls;
    console.log(el.className);
  }
  if (txt) {
    el.innerHTML = txt;
  }
  if (src) {
    el.src = src;
  }
  return el;
}
  return { create:create, howManyGifs:howManyGifs };
})();

//tests

createElements.create('p', 'columns',null, 'https://www.hello.com/img_/hello_logo_hero.png');
// //
// howManyGifs(['www.facebook.com', 'OF', "google.com", 'THE']);
