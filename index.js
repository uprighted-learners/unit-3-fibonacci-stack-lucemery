// Create the `series` variable
var series = [0, 1];

while (series.length < 10) {
  // your code here
  let x = series.pop();
  let y = series.pop();

  let sum = x + y;
// need to not push first variable first
  series.push(y, x, sum);
}

// console.log(x)


// Print the Fibonacci sequence to the console
console.log(series);
// the first ten numbers should be
// 0 1 1 2 3 5 8 13 21 34
