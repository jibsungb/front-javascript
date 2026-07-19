// 입력 받은 문자열을 뒤집어서 반환해주는 함수
// ex) "abcdefg" -> "gfedcba"

// 다이아(심화)
// 1. 한글을 정수로 바꿔주는 함수
// ex) "일공이사" -> 1024

// 2. 정수를 한글로 바꿔주는 함수
// ex) "1024" -> "일공이사"


//문제1. 한글을 정수로 바꿔주는 함수
// ex) "일공이사" -> 1024
function changeNum (text){
    let num = ""
    for (let i = 0 ; i < text.length ; i++){
        let content = text[i]
        switch (content){
            case "공" :
                num += "0"
                break;
            case "일" :
                num += "1"
                break;
            case "이" :
                num += "2"
                break;
            case "삼" :
                num += "3"
                break;
            case "사" :
                num += "4"
                break;
            case "오" :
                num += "5"
                break;
            case "육" :
                num += "6"
                break;
            case "칠" :
                num += "7"
                break;
            case "팔" :
                num += "8"
                break;
            case "구" :
                num += "9"
                break;
        }
    }   
        return Number(num)
}

result1 = changeNum("이팔사구")
console.log (result1)

//강사님풀이
const changeToInteger = (hangle) => {
    let hangles = "공일이삼사오육칠팔구"
    let result = ""
    for(let i = 0; i < hangle.length; i++){
        result += hangles.indexOf(hangle[i])
    }

    return result
}

let result1 = changeToInteger("일공이사")
console.log(result1)



// 문제2. 정수를 한글로 바꿔주는 함수
// ex) "1024" -> "일공이사"

function changeText (number){
    let text = ""
    for (let i = 0 ; i < number.length ; i++){
        let numbers = number[i]
        switch (numbers){
            case "0" :
                text += "공"
                break;
            case "1" :
                text += "일"
                break;
            case "2" :
                text += "이"
                break;
            case "3" :
                text += "삼"
                break;
            case "4" :
                text += "사"
                break;
            case "5" :
                text += "오"
                break;
            case "6" :
                text += "육"
                break;
            case "7" :
                text += "칠"
                break;
            case "8" :
                text += "팔"
                break;
            case "9" :
                text += "구"
                break;
        }
    }
    return text
}

let result3 = changeText("1234")
console.log(result3)

//배열로 풀어보기(정수 → 한글)
const changeToHangle = (number) => {
    let hangles = "공일이삼사오육칠팔구"
    let result = ""
    for(let i = 0; i < number.length; i++){
        result += hangles[number[i]]
    }
    return result
}

let result2 = changeToHangle("1024")
console.log(result2)