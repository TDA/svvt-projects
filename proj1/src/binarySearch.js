/**
 * Created by schandramouli on 8/27/15.
 */
function binarySearch(array, start, end, element) {
  // takes in an array with indices that are integers
  // array can contain strings/floats/integers as values

  // Data Flow Anomaly: multiple declarations of same variable
  var mid = 1;
  var mid = Math.floor((start + end) / 2);
  console.log('Searching from ', start, 'to', mid, 'to', end);
  // comparison to self
  if (mid < mid) {
    //do nothing
  }
  // Data Flow Anomaly: unused and uninitialized variables
  var a = 5 + 6;
  var b;
  // Data Flow Anomaly: unused expression
  5 + 6;

  // strict equality, no type coercion
  if(array[mid] === element) {
    console.log('Element found at ', mid);
    return mid;
  } else if (element < array[mid]) {
    return binarySearch(array, start, mid, element);
  } else if (element > array[mid]) {
    return binarySearch(array, mid + 1, end, element);
  } else {
    console.log('No Element found');
    return -1;
  }
}

module.exports = binarySearch;
