// 1. 입력한 값 중 a를 제거해주는 함수
// ex) "가a나a다a라a마a바a사" -> "가나다라마바사"
// 2. 입력한 수 까지 반복 후 짝수의 합을 모두 더해서 반환(return)해주는 함수
// 3. 입력 받은 3개의 값 중 홀수만 모두 더해서 반환(return)해주는 함수
// 4. 0, 1을 마구잡이로 5개 전달했을 때 0의 개수와 1의 개수를 출력해주는 함수
// ex) myFunc(0, 1, 1, 0, 0)
// 출력결과: 0의 개수 3개, 1의 개수 2개



//문제 1. 입력한 값 중 a를 제거해주는 함수
// ex) "가a나a다a라a마a바a사" -> "가나다라마바사"

const removeA = (content) => {
    let result = ""
    for(let i = 0; i < content.length; i++){
        // if(content[i] !== "a"){
        //     result += content[i]
        // }

        if(content[i] === "a"){ 
            continue;
        }
        result += content[i]
    }
    return result
}

let result1 = removeA("가a나a다a라a마a바a사")
console.log(result1)

// 문제2. 입력한 수 까지 반복 후 짝수의 합을 모두 더해서 반환(return)해주는 함수

function evenSum (num){
    let even = 0
    for (let i = 0 ; i <= num ; i++){
        if(i % 2 === 0 ){
           even += i
        }
    }
    return even
}
let result2 = evenSum(6)
console.log(result2)

//강사님 풀이
const getTotalEven = (count) => {
    let result = 0
    for(let i = 0; i < count; i++){
        let num = i + 1
        if(num % 2 === 0){
            result += num
        }
    }
    return result
}

let result2 = getTotalEven(10)
console.log(result2)



// 3. 입력 받은 3개의 값 중 홀수만 모두 더해서 반환(return)해주는 함수

//...number : 가변매개변수
function oddSum (...numbers){
    let odd = 0
    for (let i = 0 ; i < numbers.length; i++){
        let num = numbers[i]
        if(num % 2 !== 0 ){
            odd += num
        }
    }
    return odd
}
result3 = oddSum(2,6,4,8,6,5,2)
console.log(result3)


// 4. 0, 1을 마구잡이로 5개 전달했을 때 0의 개수와 1의 개수를 출력해주는 함수
// ex) myFunc(0, 1, 1, 0, 0)
// 출력결과: 0의 개수 3개, 1의 개수 2개

function myFunc (...numbers){
    let zeroCount = 0
    let oneCount = 0
    for (let i = 0 ; i < numbers.length ; i++){
        let num = numbers[i]
        if (num * num === 0){
            zeroCount +=  1
        }
        if (num * num === 1){
            oneCount += 1
        }
    }
    return [zeroCount, oneCount]
}
result4 =  myFunc(0,1,0,0,1)
console.log(`0의 개수 ${result4[0]}개, 1의 개수 ${result4[1]}개`)

//강사님풀이
const getCountOneAndZero = (num1, num2, num3, num4, num5) => {
    // let oneCount = num1 + num2 + num3 + num4 + num5
    // let zeroCount = 5 - oneCount
    let result = `1의 개수는 ${oneCount}, 0의 개수는 ${zeroCount}`
    console.log(result)  
}

getCountOneAndZero(1, 0, 1, 1, 0)