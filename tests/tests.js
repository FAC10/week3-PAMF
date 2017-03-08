module('createLapElement');
test('giffy function', (assert) => {
  var done = assert.async();
  var obj = {name: "Lord of the Rings"};
  giphy(obj, function(err, res) {
    assert.ok(res.length === 4);
    done();
  });
});
