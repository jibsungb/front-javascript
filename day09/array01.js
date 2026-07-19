//배열
//실제로 웹에서 상품의 인기상품으로 정리시 쭉 나열될 때 사용
// 배열의 선언 
const array1 = []
const array2 = new Array() // 칸 수를 모를 때
const array3 = new Array(10) // 칸 수를 알고 있을 때

// console.log(array2)
// for(let data of array2){
//     console.log(data)
// }

// console.log(array3)
// for(let data of array3){
//     console.log(data)
// }

// .fill(): 초기값으로 초기화 시켜주는 메서드
console.log(array2.fill(0))
console.log(array3.fill(0))

// .length: 문자의 개수
console.log(array3)
console.log(array3.length)

// split(): string메서드, 매개변수의 기준으로 문자열을 잘라서 배열로 반환해주는 메서드
const phone = "010-1234-1234".split("-")
console.log(phone)
// ['010','1234','1234']

// .join(): array 메서드, 전달된 매개변수의 기준으로 붙여서 새로운 문자열로 반환해주는 메서드
const str1 = phone.join("-")
console.log(str1)
//010-1234-1234

// .replace(찾을 값, 바꿀 값): string 메서드, 찾은 값을 바꿀 값으로 변경하여 문자열로 반환하는 메서드
// "김길동" -> "홍길동"
const str2 = "김길동".replace("김", "홍")
console.log(str2)

// .replaceAll(찾을 값, 바꿀 값): string 메서드, 찾은 값을 바꿀 값으로 모두 변경하여 문자열로 반환하는 메서드
const str3 = "내가 그린 기린 그림은 잘 그린 기린 그림".replaceAll("기린", "소")
console.log(str3)


// 실습
// 핸드폰 마스킹하기
// 010-1234-5678
// 010-****-5678로 변경

//방법1
const phoneNumber = "010-1234-5678".replace("1234","****")
console.log(phoneNumber);

//방법2
const arr1 = "010-1234-5678".split("-")
arr1[1] = "****"

//방법3
const str5 = "010-1234-5678"

let result = ""
for (let i = 0 ; i < str5.length; i++){
    result += i >= 4 && i <=7 ? "*" : str5[i]
}
console.log(result)

