// 화살표 함수 실습 
// 어떤 값을 전달했을 때 홀수라면 "홀수"를 반환, 
// 짝수라면 "짝수"를 반환하는 함수를 화살표 함수로 선언하고 사용

const getOddOrEven = (num) => {return num % 2 === 0 ? "짝수" : "홀수"}

//축약형
const getOddOrEven = (num) => num % 2 === 0 ? "짝수" : "홀수"