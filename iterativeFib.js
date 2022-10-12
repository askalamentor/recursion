// iterative solution to the fibonacci sequence

function fibs(n) {

    let arr = [0, 1];

    if (n < 0) {
        alert('Please enter positive integer');
        return 'Please try again!';
    }

    if (n == 0) return arr = [0];
    if (n == 1) return arr = [0, 1];

    for (let i = 2; i < n; i++) {
        let newValue = arr[i - 2] + arr[i - 1];
        arr.push(newValue);
    }

    return arr;

}

console.log(fibs(0)); // [0]
console.log(fibs(2)); // [0, 1]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]






