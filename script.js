const iterativeBtn = document.querySelector('#iterative');
const recursionBtn = document.querySelector('#recursion');
const outputArea = document.querySelector('#output');
const inputArea = document.querySelector('#input');


iterativeBtn.addEventListener('click', () => {
    outputArea.innerHTML = fibs(inputArea.value);
})

recursionBtn.addEventListener('click', () => {
    outputArea.innerHTML = fibsRec(inputArea.value);
})


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
