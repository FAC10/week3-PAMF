
module('giphy API');
test('title handling', (assert) => {
    var result = bannedWords({
        name: 'Lord of the rings From Rocks'
    });
    console.log(result);
    var expected = ['lord', 'OF', 'THE', 'rings', 'FROM', 'rocks'];
    assert.deepEqual(result, expected);
})

test('test that Giphy.buildURL creates a valid Giphy url', (assert) => {
  var result = Giphy.buildURL("lord");
  var expected = "http://api.giphy.com/v1/gifs/search?q=lord"
  assert.ok(result.includes (expected));
  result = Giphy.buildURL("finn");
  expected = "http://api.giphy.com/v1/gifs/search?q=finn"
  assert.ok(result.includes(expected));
});

test('test that conditionalArrayMapApply function outputs the right array accoring to the condition', (assert) => {
  var arr = [1,2,'hello', 'world'];
  var ifthis = Number.isInteger;
  var thenthis = function(n){
    return "number";
  }
  var elsethis = function(n){
    return "string";
  }
  var result = Giphy.conditionalArrayMapApply(arr, ifthis, thenthis, elsethis);
  var expected = ["number", "number", "string", "string"];
  assert.deepEqual(result, expected);

  result = Giphy.conditionalArrayMap(arr, ifthis, thenthis, elsethis);
  expected = [thenthis, thenthis, elsethis, elsethis];
  assert.deepEqual(result, expected);

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

test("test that image has the right src", (assert) => {
result = (createElements.create(3, 'p', 'columns',null, 'https://www.hello.com/img_/hello_logo_hero.png'))[2].src;
expected = 'https://www.hello.com/img_/hello_logo_hero.png';
assert.equal(result, expected);
});

module('counting gifs(urls) for column creation')
test("test that the function finds two urls", (assert) => {
result = createElements.howManyGifs(['www.facebook.com', 'OF', "google.com", 'THE']);
expected = 2;
assert.equal(result, expected);
});

test("test that the function returns 4 urls", (assert) => {
result = createElements.howManyGifs(['THE','www.facebook.com', 'OF', "google.com", 'THE', 'www.instagram.com', 'https://www.hello.com/img_/hello_logo_hero.png']);
expected = 4;
assert.equal(result, expected);
});
