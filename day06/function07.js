// 함수의 사용
// .indexOf(): 해당 문자의 index 번호를 리턴해주는 문자열 메서드

// index(방번호)
// console.log("abcdefg".indexOf("c"))
// let data = "abcdefg"

// console.log(data[0])
// let data2 = 10

// .charAt(): 해당 인덱스의 값을 리턴하는 메서드
// console.log(data.charAt(3)) // d

// 1. 문자열을 입력 받고 원하는 문자의 개수를 구해주는 함수
// ex) myFunc("abcdabcd", "a")
// 결과: 2

// 문자열의 길이: .length
// console.log("abcde".length)

// 1. 함수를 정의한다
// 2. 문자열, 찾는 문자를 매개변수로 받는다
// 3. 문자열에서 쪼개서 문자를 순서대로 비교하면서 문자가 같은지를 비교해야한다.
function getCount(content, c){
    let count = 0;
    for(let i = 0; i < content.length; i++){
        content.charAt(i) === c && count++
    }
    return count 
}

getCount("abcdabcd", "a")





