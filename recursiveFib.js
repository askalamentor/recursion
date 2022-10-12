/* The recursive solution to the fibonacci sequence */

function fibsRec(n) {

    if (n <= 0) {
        alert('Please enter positive integer');
        return 'Please try again!';
    }

    if (n == 1) return [0]
    if (n == 2) return[0, 1]

    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];

}

console.log(fibsRec(1)); // [0]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]