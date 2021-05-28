const sumInput = () => {
let sum = 0;
let numbers = [];

for(;;) {
    let number = +prompt("Enter the number", '');
    if (!number) break; {
    sum += number;
    }
numbers.push(number);
}
document.getElementById('sum').value = sum;

const compareNumeric = (a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
numbers.sort(compareNumeric);
document.getElementById('compareNumeric').value = numbers;
}