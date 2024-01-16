// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ...

setTimeout(() => console.log("Timeout 1"), 0);

function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(40));
