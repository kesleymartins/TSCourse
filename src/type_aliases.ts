// Tuples
type RGB = [number, number, number]

function randomizeColor(): RGB {
  const r: number = Math.floor(Math.random() * 255)
  const g: number = Math.floor(Math.random() * 255)
  const b: number = Math.floor(Math.random() * 255)

  return [r, g, b]
}

// Object literal
type Score = {
  value: number
}

function randomizeScore(): Score {
  return { value: Math.floor(Math.random() * 100) }
}

// Logs
console.log('color', randomizeColor())
console.log('color', randomizeColor())
console.log('color', randomizeColor())

console.log('score', randomizeScore())
console.log('score', randomizeScore())
console.log('score', randomizeScore())
