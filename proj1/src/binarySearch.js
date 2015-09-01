/**
 * Created by schandramouli on 8/27/15.
 */
function binarySearch(array, start, end, element) {
  // takes in an array with indices that are integers
  // array can contain strings/floats/integers as values
  var mid = Math.floor((start + end) / 2);
  console.log("Searching from ",start, "to", mid , "to", end);
  // strict equality, no type coercion
  if(array[mid] === element) {
    console.log("Element found at ", mid);
    return mid;
  } else if (element < array[mid]) {
    return binarySearch(array, start, mid, element);
  } else if (element > array[mid]) {
    return binarySearch(array, mid + 1, end, element);
  } else {
    console.log("No Element found");
    return -1;
  }
}
