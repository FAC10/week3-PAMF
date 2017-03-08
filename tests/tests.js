module('createLapElement');
test('createLapElement makes a human readable lap element', (assert) => {
  var result = createLapElement(0, 500, 'testing').innerText;
  var expected = 'Lap number 1 00:00.50';
  assert.equal(result, expected);
});
