//구구단
// for (let i = 0 ; i < 8 ; i ++ ){
//     let dan = i + 2
//     for (let j = 0 ; j < 9 ; j ++){
//         let value = j + 1
//         console.log (`${dan} x ${value} = ${dan*value}`)
//     }
// }

// 레거시 별찍기(과제)
//     *
//    ***
//   *****
//  *******
// *********
let first = ""
let second = ""
let third = ""
let fourth = ""
let fifth = ""

for (let i = 0 ; i < 5 ; i++){
    for (let j = 0 ; j < 9 ; j++){
        first += j === 5 ? "*" : ""
    }
   
}
console.log(first)
//좀더 고민해보자