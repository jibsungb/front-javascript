// 화살표 함수(ES6)
// this 차이

// 두 수를 더하면 두 수를 출력해주는 함수
function add(num1, num2){ console.log(num1 + num2) }
add(10, 20)

// const: 상수
const add2 = (num1, num2) => { console.log(num1 + num2) }

// 두 수를 더하면 두 수를 반환해주는 함수
function getTotal(num1, num2){ return num1 + num2 }

// 리턴 2가지
const getTotal2 = (num1, num2) => { return num1 + num2 }

// 중괄호가 없다면 return 키워드를 지우고 통째로 리턴값
const getTotal2 = (num1, num2) => num1 + num2

// 단 엔터를 칠 수 없다.
const getTotal2 = (num1, num2) => 
num1 + num2

// 엔터를 치고 싶다면 최우선 연산자()로 감싸야한다.
const getTotal2 = (num1, num2) => (
    num1 + num2
)
