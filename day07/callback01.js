// // 어떤 값을 전달하면 값을 2배로 만들고 출력
// const multiplyBy2 = (num, callback) => {
//     callback(num * 2)
// }

// multiplyBy2(20, console.log)

// // 성과 이름을 더해서 출력해주는 함수
// const printFullName = (lastName, firstName, callback) => {
//     callback(lastName + firstName)
// }

// printFullName("홍", "길동", console.log)

// 두 수를 전달하고 두 수의 더한 값이 홀수인지 짝수인지 확인 후 출력
const checkOddAndEven = (num1, num2, callback) => {
    callback((num1 + num2) % 2 === 0 ? "짝수" : "홀수")
}

checkOddAndEven(2,4, console.log)