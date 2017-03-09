// // name: "lord of the rings", gifs: [url, 'OF', "THE", url]
//
var createElements = (function() {
    function howManyGifs(arr) {
        var count = 0;
        arr.forEach(function(e) {
            if (e.toUpperCase() != e) {
                count++;
            }
        })
        console.log(count);
        return count;
    }

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

    function appendClass(parent, child, i) {
        var parents = [].slice.call(document.getElementsByClassName(parent));
        parents[i].appendChild(child);
    }

    function appendQuery(parent, child) {
        document.querySelector(parent).appendChild(child);
    }
    // var water = document.createTextNode("Water");
    // append('.flex', water);

    function Objlength(obj) {
        console.log(obj);
        return obj.gifs.length;
    }

    function sortObj(obj) {
        console.log(obj.gifs);
        obj.gifs.forEach(function(o, i) {
            console.log(o);
            columnAppend();
            if (Array.isArray(o)) {
                gifAppend(o);

            } else {
                appendClass('columns', o, i);
            }
        });
    }

    function columnAppend() {
        // while (num > 0) {
          var column = create('section', 'columns', '', '');
          appendQuery('.flex', column);
          // num--;
        // }
    }

    function wordAppend() {
        var num = document.getElementsByClassName('columns').length;
        for (var i = 0; i < num; i++) {
            var word = create('p', '', 'word ' + (i + 1), '');
            appendClass('columns', word, i);
        }
    }

    function gifCreation(url) {
      console.log('running');
      var img = create('img', '', '', url)
      return img;
    }

    function gifAppend(obj) {
        var pos = obj.indexOf();
        obj.forEach(function(e, i) {
            var url = obj[i];
            console.log(url);
            console.log(obj[i]);
            appendClass('columns', gifCreation(url),i);
        });
    }

    return {
        sortObj: sortObj,
        create: create,
        howManyGifs: howManyGifs,
        columnAppend: columnAppend,
        Objlength:Objlength,
        wordAppend: wordAppend,
        gifAppend: gifAppend
    };
})();
// var arr = [];

// createElements.columnAppend(4);
// createElements.wordAppend();
// createElements.gifAppend();

// function columns(cb){
//   cb((createElements.columnAppend(createElements.Objlength({
//     name: 'The Blues Brothers',
//     gifs: [['http://media1.giphy.com/media/l0NwH7dwPKUpKdphC/giphy.gif', 'http://media1.giphy.com/media/xTiTnJbISZfeB5JjyM/giphy.gif', 'http://media1.giphy.com/media/xTiTnJbISZfeB5JjyM/giphy.gif'],
//         ['http://media0.giphy.com/media/xTiTnlc6LNKx2n2l5m/giphy.gif', 'http://media4.giphy.com/media/xT1XGY0CiGh2pfk1UY/giphy.gif', 'http://media3.giphy.com/media/11ifh91yBECJHO/giphy.gif']
//     ]
//   }))));
// }
createElements.sortObj({
    name: 'The Blues Brothers',
    gifs: [['http://media1.giphy.com/media/l0NwH7dwPKUpKdphC/giphy.gif', 'http://media1.giphy.com/media/xTiTnJbISZfeB5JjyM/giphy.gif', 'http://media1.giphy.com/media/xTiTnJbISZfeB5JjyM/giphy.gif'],
        ['http://media0.giphy.com/media/xTiTnlc6LNKx2n2l5m/giphy.gif', 'http://media4.giphy.com/media/xT1XGY0CiGh2pfk1UY/giphy.gif', 'http://media3.giphy.com/media/11ifh91yBECJHO/giphy.gif']
    ]
  });
// createElements.columns(createElements.sortObj);
