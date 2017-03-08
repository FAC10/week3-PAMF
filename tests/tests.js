
module('giphy API');

module('random number function tests');
test('tests that random number function returns a random number between 1 and 50 when n=50', (assert) => {
    var result = (MovieDB.random(50) > 0 && MovieDB.random(50) < 51);
    var expected = true;
    assert.ok(result, expected);
});

test('tests that random number function returns a random number between 1 and 20 when n=20', (assert) => {
    var result = (MovieDB.random(20) > 0 && MovieDB.random(20) < 21);
    var expected = true;
    assert.ok(result, expected);
});
