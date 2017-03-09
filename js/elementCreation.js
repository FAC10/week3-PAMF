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

function appendClass(parent, child, i) {
  var parents = [].slice.call(document.getElementsByClassName(parent));
  console.log(parents[0]);
  parents[i].appendChild(child);
  console.log('parents ' + i + ' is ' + parents[i]);
}

function appendQuery(parent, child) {
  document.querySelector(parent).appendChild(child);
}
// var water = document.createTextNode("Water");
// append('.flex', water);

function columnAppend(num) {
while (num > 0) {
var column = create('section', 'columns', '', '');
appendQuery('.flex', column);
num--;
}
}

function wordAppend() {
  console.log('trying to word append');
var num = document.getElementsByClassName('columns').length;
for (var i = 0; i < num; i++) {
  console.log('entering for loop');
  var word = create('p', '', 'word ' + (i+1), '');
  console.log(word);
  appendClass('columns', word, i);
}
}

function gifCreation(cb) {
  var img = create('img', '', '', 'https://www.hello.com/img_/hello_logo_hero.png')
  return cb(img);
}

function gifAppend() {
  var num = document.getElementsByClassName('columns').length;
for (var i = 0; i < num; i++) {
  appendClass('columns', gifCreation, i);
  // append(array[i], gifCreation);
  // append(array[i], gifCreation);
}
}

  return { create:create, howManyGifs:howManyGifs, columnAppend:columnAppend, wordAppend:wordAppend, gifAppend:gifAppend};
})();
var arr = [];

createElements.columnAppend(4);
createElements.wordAppend();
createElements.gifAppend();
