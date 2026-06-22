// 형변환 실습
// true, false, +를 이용하여 10을 만들기
// 단 true, false는 1번만 사용할 수 있다.

let one = Number(true)
let oneString = String(one)
let zero = Number(false)
let result = oneString + zero

console.log(result)