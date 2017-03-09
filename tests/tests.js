
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
