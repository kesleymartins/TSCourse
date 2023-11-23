const xy: [number, number] = [30.4, 20.5]
const hsla: [number, string, string, number] = [200, "100%", "50%", 0.5]
const rgba: [number, number, number, number] = [0.5, 0.3, 0.9, 1]

function blueHSL(): [number, string, string] {
  return [240, "100%", "50%"]
}

console.log(xy)
console.log(hsla)
console.log(rgba)
console.log(blueHSL())

// Name Tuples
const coord: [x: number, y: number] = [30232.44, 8279.25]
console.log(coord)
console.log(coord[0], coord[1])
