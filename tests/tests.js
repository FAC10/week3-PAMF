module('giphy API');
test('giphy function', (assert) => {
  var done = assert.async();
  var obj = {name: "Lord of the Rings"};
  giphy(obj, function(err, res) {
    assert.ok(res.length === 4);
    done();
  });
});
test('giphy url', (assert) => {
  var done = assert.async();
  var obj = {name: "Lord of the Rings"};
  var searchString = 'http://api.giphy.com/v1/gifs/search?q='
  giphy(obj, function(err, res) {
    assert.ok(res[0].includes(searchString));
    done();
  });
})
