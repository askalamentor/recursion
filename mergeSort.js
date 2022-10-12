function mergeSort(array) {

  if(array.length < 2) {
    return array;
  } 

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid, array.length);

  return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
    const arr = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    while (left.length) {
        arr.push(left.shift());
    }

    while (right.length) {
        arr.push(right.shift());
    }
    return arr;
}

console.log(mergeSort([5,10,8,9,5,1,6,8,15,30]));