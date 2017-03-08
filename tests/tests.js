module('giphy API');

test('giphy function', (assert) => {
  var done = assert.async();
  var obj = {name: "Lord of the Rings"};
  Giphy.buildURLs(obj, function(err, res) {
    assert.ok(res.length === 4);
    done();
  });
});

test('giphy url', (assert) => {
  var done = assert.async();
  var obj = {name: "Lord of the Rings"};
  var searchString = 'http://api.giphy.com/v1/gifs/search?q=lord';
  Giphy.buildURLs(obj, function(err, res) {
    assert.ok(res[0].includes(searchString), 'first element in the array includes the API url and the first word in the given sentence');
    done();
  });
});

test('giphy url', (assert) => {
  var done = assert.async();
  var obj = {name: "Lord of the Rings"};
  var searchString = 'http://api.giphy.com/v1/gifs/search?q=';
  Giphy.buildURLs(obj, function(err, res) {
    assert.ok(res[0].includes(searchString + 'lord'), 'First element in the array displaying URL');
    assert.ok(res[1] === 'of', '\'of\' not sending a url, just the word');
    assert.ok(res[2] === 'the', '\'the\' not sending a url, just the word');
    assert.ok(res[3].includes(searchString + 'rings'), 'Fourth element correctly displaying URL');

    done();
  });
});
