const iterativeBtn = document.querySelector('#iterative');
const outputArea = document.querySelector('#output');
const inputArea = document.querySelector('#input');

function fibs(n) {

    let arr = [1, 2];

    if ((n <= 2) || (n > 100)){
        alert('Please enter a number between 3-100!');
        return 'Please try again!';
    }

    for (let i = 2; i < n; i++) {
        let newValue = arr[i - 2] + arr[i - 1];
        arr.push(newValue);
    }

    return arr;

}

iterativeBtn.addEventListener('click', () => {
    outputArea.innerHTML = fibs(inputArea.value);
})