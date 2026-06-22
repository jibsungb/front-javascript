// 단항 연산자
// let data1 = 10

// console.log(++data1)
// console.log(data1)

// !: 놀리부정연산자 (낫연산자)
// true -> false, false -> true
let isTrue = true
let data2 = 10

// console.log(!isTrue)
// console.log(!data2)

// false가 아닌데 false로 취급되는 값들
// 0, undefined, null, ""
// let data3 = 0 // false
// let data4 = undefined // false
// let data5 = null // false
// let data6 = "" // false

// console.log(!data3)
// console.log(!data4)
// console.log(!data5)
// console.log(!data6)

let data7 = [10] // true 
let data8 = [() => {return 10}] // true
let data9 = {a: 20} // true

console.log(!data7)
console.log(!data8)
console.log(!data9)



// let data1 = 50
// let data2 = 4

// console.log(data1 + data2)
// console.log(data1 - data2)
// console.log(data1 * data2)
// console.log(data1 / data2)

// console.log(data1 % data2)

// let money = 10000
// money += 1000000
// money = money + 1000000
// money -= 500000
// money = money - 500000
// money *= 500
// money /= 10000
// console.log(money)

// 쉬프트 연산자
// 관계 연산자 
// let data1 = 10
// let data2 = "10"

// 값
// console.log(data1 == data2)
// console.log(data1 === data2)
// let data3 = 15
// let data4 = 20
// let data5 = "20"

// console.log(data3 > data4)
// console.log(data4 != data5)
// console.log(data4 <= data5)
// console.log(data5 >= data3)

// console.log(data3 > data4 > data5)

// console.log(true || false)
// console.log(true || 10)
// console.log(undefined || 0)
// console.log(10 > 9 || 0)
// console.log(10 > 9 || 10 != 11 != 200 != !20 != 20 == 1 == 10)
// let data1 = 10 > 9
// let data2 = 10 != 11
// console.log(data1 || data2)
// console.log(!data1 || !!data2)
// console.log(true || 5)
// console.log(5 || 5)

// 초기값
// console.log(false || 10)
// let name

// ~~~~~
// name = "장보고"
// ~~~~~

// console.log(name || "홍길동")

// let data1 = 15 >= 15
// let data2 = 10 != 11

// console.log(data1 && data2)
let data3 = 10
console.log(false && data3++)
console.log(data3)