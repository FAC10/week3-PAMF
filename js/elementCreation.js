// Creates a DOM element based on specified criteria
var createElements = (function() {

    function create(element, cls, txt, src) {
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
        return el;
    }

// Creates gif image from the url
    function gifCreation(url) {
      return create('img', 'gif', '', url);
    }
// Appends git to the column
    function gifAppend(urlList, column) {
        urlList.forEach(function(url) {
          var gif = gifCreation(url);
          column.appendChild(gif);
        });
    }
// Appends colums and column titles to flex container
    var creatorFunction = function (obj, cb) {
      var flex = document.querySelector('.flex');
      flex.innerHTML = '';
      obj.gifs.forEach(function(o, i) {
        var column = create('section', 'columns');
        var word = create('p', 'word-number', 'word ' + (i + 1), '');
        column.appendChild(word);
        if (typeof o !== 'string') {
          gifAppend(o, column);
        } else {
          column.appendChild(create('p', 'bannedword', o, ''));
        }
        flex.appendChild(column);

      });
      cb(null, obj);
    };

    return {creatorFunction:creatorFunction, gifAppend:gifAppend, gifCreation:gifCreation, createElements:createElements}

})();
