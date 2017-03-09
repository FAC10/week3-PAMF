
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

module('Element creation')
test("test that create function creates 3 html elements are created", (assert) => {
result = (createElements.create(3, 'p', 'columns',null, 'https://www.hello.com/img_/hello_logo_hero.png')).length;
expected = 3;
assert.equal(result, expected);
});

test("test that first p elements have the class 'columns'", (assert) => {
result = (createElements.create(3, 'p', 'columns',null, 'https://www.hello.com/img_/hello_logo_hero.png'))[0].className;
expected = 'columns';
assert.equal(result, expected);
});

test("test that an images are created", (assert) => {
result = (createElements.create(2, 'img', 'columns',null, 'https://www.hello.com/img_/hello_logo_hero.png'))[0].tagName === 'IMG';
assert.ok(result);
});

test("test that innerHTML is being created on new element", (assert) => {
result = (createElements.create(2, 'p', 'columns','hello', 'https://www.hello.com/img_/hello_logo_hero.png'))[1].innerHTML;
expected = 'hello';
assert.equal(result, expected);
});
