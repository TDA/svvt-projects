/**
 * Created by schandramouli on 8/27/15.
 */
var assert = chai.assert;
describe('binary search', function () {
  var pos;
  var array;

  beforeEach(function () {
    array = ["a", "b", "c", "d", "e", "f"];
    intArray = [1, 2, 3, 4, 5, 6, 7, 8];
  });

  it('returns the index of the element when element is present (string)', function () {
    pos = binarySearch(array, 0, array.length, "c");
    assert.equal(pos, 2);

    pos = binarySearch(array, 0, array.length, "f");
    assert.equal(pos, 5);

  });

  it('returns the index of the element when element is present (integer)', function () {
    pos = binarySearch(intArray, 0, intArray.length, 2);
    assert.equal(pos, 1);

    pos = binarySearch(intArray, 0, intArray.length, 7);
    assert.equal(pos, 6);
  });

  it('returns the index of the element when element is present (float)', function () {
    floatArray = [1.0, 2.1, 3.2, 4.3, 5.6, 6.5, 7.2, 8.0];
    pos = binarySearch(floatArray, 0, floatArray.length, 1.0);
    assert.equal(pos, 0);

    pos = binarySearch(floatArray, 0, floatArray.length, 8.0);
    assert.equal(pos, 7);
  });

  it('returns -1 when element is not found in array', function () {
    pos = binarySearch(array, 0, array.length, "z");
    assert.equal(pos, -1);

    pos = binarySearch(intArray, 0, intArray.length, 123);
    assert.equal(pos, -1);

    pos = binarySearch(floatArray, 0, floatArray.length, 8.6);
    assert.equal(pos, -1);
  });

});
