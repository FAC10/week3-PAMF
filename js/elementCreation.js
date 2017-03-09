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

    function sortObj(obj, cb) {
        var flex = document.querySelector('.flex');
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
    }

    function gifCreation(url) {
      return create('img', 'gif', '', url);
    }

    function gifAppend(urlList, column) {
        urlList.forEach(function(url) {
          var gif = gifCreation(url);
          column.appendChild(gif);
        });
    }

    return { sortObj: sortObj };
})();
