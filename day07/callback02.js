// 두 정수의 곱셉을 구한 뒤 결과에 2를 곱해서 출력
const multiple = (num1, num2, callback) => {
    callback(num1 * num2)
}

const multipleBy2 = (num, callback) => {
    callback(num * 2)
}

multiple(10, 20, (result) => {
    multipleBy2(result, console.log)
})


// 두 정수를 전달하면 두 수 중 작은 값에 10을 곱해서 출력
const getMin = (num1, num2, callback) => {
    let result = ""
    if(num1 === num2){
        result = -1
    }else if(num1 < num2){
        result = num1
    }else {
        result = num2
    }
    callback(result)
}

const multipleBy10 = (num, callback) => {
    callback(num * 10)
}

getMin(10, 20, console.log)
getMin(10, 20, (min) => {
    multipleBy10(min, console.log)
})