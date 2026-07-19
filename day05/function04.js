// 디폴트 파라미터 사용하지 않고 값이 없을 때 대체하기
// 1.정수를 3개 전달하면 3개를 더한 값을 반환
// 2.정수를 2개를 전달하면 2개를 더한 값을 반환
// 3.정수를 1개 전달하면 1개의 값을 반환

//문제1
function getNum1 (num1, num2, num3){
    if (!num2){
        return num1
    }
    if (!num3){
        return num1 + num2
    }

    return num1 + num2 + num3
}
let result1 = getNum1(10)
console.log(result1)

//문제2 
// function getNum2 (number1, number2){
//     if (!number2){
//         return number1
//     }
//     return number1 + number2
// }

// console.log (getNum2(2))

//문제3
function getNum3 (num){
    return num
}
console.log (getNum3(2))
