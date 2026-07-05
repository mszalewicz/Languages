'use strict';

// process belongs to node.js
let a = process.cwd()
console.log("01: ", a)

let b = 30212e8
console.log("02: ", b)

let c = 9_000_000
console.log("03: ", c)

let d = "Its ${} in the morning."
console.log("04: ", d)

// Template literals
let e = `It's ${10.30 + 15} in the morning.`
console.log("05: ", e)

// Unary operators
console.log("06: ", typeof 4.93)
console.log("07: ", typeof "x")
console.log("08: ", typeof `x`)

let f = "Truth"

console.log("09: ", "Chance" != f)
console.log("10: ", "Chance" == f)
console.log("11: ", "Chance" === f)
console.log("12: ", "chance" == "chance")

// Automatic type conversion problem:
// console.log("5" - 1)

console.log("13: ", null || "user")
console.log("14: ", null || "user")

console.log("15: ", 0 || 100)
console.log("16: ", 0 ?? 100)
console.log("17: ", null ?? 100)

console.log("18: ",)

// Use const or let, avoid using var as it is legacy based 
// and can leak outside of scope

let one = 1, two = 2
console.log("19: ", one + two)


let number = Number("test")
console.log("20: ", number)

let x = 10;

     if (x === 70) console.log("21: 70\n")
else if (x === 15) console.log("21: 15\n")
else console.log("21: other\n")

// Exercises 1

// 1)
let string = ""

while (string.length != 9) {
    string += "#"
    console.log(string)
}
console.log()

// 2)

let mapping = [
    [3, "Fizz"],
    [5, "Buzz"],
    [7, "Cthullu"],
]

let i = 1 

// while (i <= 10) {
//     mapping.forEach(element => {
//         if (i % element[0] === 0) {
//             console.log(element[1])
//         } else {
//             console.log(i)
//         }
//     });

//     i++
// }
// console.log()


while (i <= 10) {
    let match = false
    
    for (const [divisor, label] of mapping) {
        if (i % divisor === 0) {
            console.log(label)
            match = true
        }
    }

    if (!match) console.log(i)

    i++
}