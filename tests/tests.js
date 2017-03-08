
module('giphy API');
test('test that Giphy.buildURL creates a valid Giphy url', (assert) => {
  var result = Giphy.buildURL("lord");
  var expected = "http://api.giphy.com/v1/gifs/search?q=lord&limit=10&api_key=dc6zaTOxFJmzC"
  assert.equal(result, expected);
  result = Giphy.buildURL("finn");
  expected = "http://api.giphy.com/v1/gifs/search?q=finn&limit=10&api_key=dc6zaTOxFJmzC"
  assert.equal(result, expected);
});

module('random number function tests');
test('tests that random number function returns a random number between 1 and 50 when n=50', (assert) => {
    var result = (MovieDB.random(50) > 0 && MovieDB.random(50) < 51);
    assert.ok(result);
});

test('tests that random number function returns a random number between 1 and 20 when n=20', (assert) => {
    var result = (MovieDB.random(20) > 0 && MovieDB.random(20) < 21);
    assert.ok(result);
});
