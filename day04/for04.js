// 심화 실습
// 1번 문제: 0~10까지 5만 빼고 출력
// 2번 문제: 012340123401234 출력
// 3번 문제: 1~10까지 제곱값 구하기
// 4번 문제: 1~100까지 7의 배수의 개수 세기
// 5번 문제: 1~5까지 반복후 아래 결과 만들기 
// false, true, false, true, false
// 6번 문제 1~5까지 반복후 아래 결과 만들기
// "00001"
// 7번 문제: 1~20중 10~15를 제외하고 출력하기
// 8번 문제: 1~100까지 홀수만 더한 값과, 짝수만 더한 값의 차를 구하여 출력하기
// 9번 문제: 1~10까지의 총합을 출력하시오

//1번문제
for(let i = 0 ; i <= 10 ; i++) {
    if(i === 5){
        continue;
    }
    console.log(i)
}

// 2번 문제
let result = ""
for (let i = 0 ; i < 3 ; i++){
    for (let j = 0 ; j < 5 ; j++)
        result += j
} 
console.log (result)

//2번의 다른 문제 풀이 (변수없이 사용하는 방법)
// 나머지값을 넘어갈 수 없는 규칙을 이용하기
let result2 = ""
for (let i = 0 ; i < 15 ; i++ ){
    result2 += i % 5 
}
console.log(result2)

// 3번 문제: 1~10까지 제곱값 구하기
for (let i = 0 ; i < 10 ; i++){
    let num = i + 1
    console.log(num*num)
}

// 4번 문제: 1~100까지 7의 배수의 개수 세기
let num = 0
for (let i = 0 ; i < 100 ; i++){
    let value = i + 1
    if(value % 7 === 0){
        num++
    }
} console.log(num)

// 5번 문제: 1~5까지 반복후 아래 결과 만들기  
// false, true, false, true, false
for (i = 0 ; i < 5 ; i++){
    if ( i % 2 === 0 ){
        console.log(false)
    } else {
        console.log(true)
    }
}

//5번문제 강사님 풀이
for (let i = 0 ; i < 5 ; i++){
    let num = i + 1 ;
    console.log(!(num%2))
}

// 6번 문제 1~5까지 반복후 아래 결과 만들기
// "00001"
let result6 = ""
for ( let i = 0 ; i < 5 ; i++){
    num = i + 1
    result6 += num === 5 ? 1 : 0
} 
console.log(result6)

// 7번 문제: 1~20중 10~15를 제외하고 출력하기
// 알고리즘
// 1. 1~20 반복할 수 있게 만들자
// 2. 10~15 사이값을 고를 수 있을까
// 조건식을 만족할 때 -> if

for (let i = 0 ; i < 20 ; i ++) {
    let num = i + 1
    if ( num >= 10 && num <= 15){
        continue;
    }
    console.log(num)
}

// 8번 문제: 1~100까지 홀수만 더한 값과, 짝수만 더한 값의 차를 구하여 출력하기
// 1. 1~100까지 반복하게 만들자
let odd = 0
let even = 0

for(let i = 0; i < 100; i++){
    let num = i + 1

//     // 2. 홀수와 짝수를 나누자
    if(num % 2 === 0){
        // 짝수
        even += num
    }else {
        // 홀수
        odd += num
    }
}
let result8 = `홀수의 합: ${odd}, 짝수의 합: ${even}\n두 값의 차이: ${even - odd}`
console.log(result8)

// 9번 문제: 1~10까지의 총합을 출력하시오 (세모)
let totalSum = 0;
for (let i = 0 ; i < 10 ; i++){
    let sum = i + 1;
    totalSum += sum;
}
console.log(totalSum)