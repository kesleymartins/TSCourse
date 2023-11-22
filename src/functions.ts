function sum(a: number, b: number): number {
  return a + b
}

function sumArr(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0)
}

console.log(sum(1, 2))
console.log(sumArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
