// Normal
const stringArr: string[] = ["Doctor Who", "Another", "Charlotte"]
const numbersArr: number[] = [1, 3, 2.3, 2.6]
const booleanArr: boolean[] = [true, false, false, true]
const nullArr: null[] = [null, null, null]
const undefinedArr: undefined[] = [undefined, undefined, undefined]
const anyArr: any[] = ["Museum", 10, 23.7, true, false, null, undefined]
const speficArr: (number | boolean)[] = [10, 20, 30, true, false]

console.log("string", stringArr)
console.log("number", numbersArr)
console.log("boolean", booleanArr)
console.log("null", nullArr)
console.log("undefined", undefinedArr)
console.log("any", anyArr)
console.log("number boolean", speficArr)
