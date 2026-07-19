//두 개의 정수를 넘겨주면 합을 구해주는 (반환) 함수
// function add (num1, num2){
//     return num1 + num2 
// }
// console.log(add(10, 20))


// 1) 2개의 정수를 전달하면 두 수의 합을 구해주는 함수 
// 2) 1~10까지 출력해주는 함수
// 3) 어떤 값을 전달하면 그 값까지 출력해주는 함수
// 4) 어떤 값을 전달하면 그 값까지 모든 합을 반환해주는 함수 
// ex) myFunc(10) -> 55

//1번문제
// function sum (number1, number2) {
//     return number1 + number2
// }
// console.log(sum(10,10))

//강사님 풀이
// function sum(num1, num2){
//     return num1 + num2 
// }

// let result1 = sum(10, 20)
// console.log(result1)

//2번문제
// function printNum (){
//     for (let i = 0 ; i < 10 ; i++) {
//         console.log (i + 1)
//     }
// }
// printNum()

//3번문제
function printByCount(count){
    for(let i = 0; i < count; i++){
        console.log(i + 1)
    }
}

printByCount(2)


// 4) 어떤 값을 전달하면 그 값까지 모든 합을 반환해주는 함수 
// ex) myFunc(10) -> 55
function getTotal(count){
    let total = 0
    for(let i = 0; i < count; i++){
        let num = i + 1

        total += num
    }
    return total
}

let result4 = getTotal(10)
console.log(result4)