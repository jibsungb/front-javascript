// 이름: 여러분의 이름
// 국어: 80점
// 수학: 70점
// 영어: 90점
// 과학: 20점

// 평균과 학점 구하기
// if문을 사용해서 60점 이상은 합격, 60점 미만은 불합격을 출력하기

// 최종 문장
// OOO님의 이번 총점은 OO점, 평균은 OO점으로 (합격 또는 불합격)입니다.


// 이름: 여러분의 이름
// 국어: 80점
// 수학: 70점
// 영어: 90점
// 과학: 20점

let name = "홍길동"
let korScore = 80
let mathScore = 70
let engScore = 90
let scScore = 20
let totalScore = korScore + mathScore + engScore + scScore
let averageScore = totalScore / 4

// 조건식이 1개라면 if문을 사용 X  --→   삼항
let pass = averageScore >= 60 ? "합격" : "불합격"

// 평균과 학점 구하기
// if문을 사용해서 60점 이상은 합격, 60점 미만은 불합격을 출력하기


console.log(name + "님의 이번 총점은" + totalScore +"점, 평균은" + averageScore + "점으로" + pass + "입니다")

// `${}`: 템플릿 리터럴
// ``: 문자열
let result = `${name}님의 이번 총 점은 ${totalScore}점, 평균은 ${averageScore}점으로 ${pass}입니다.`
console.log(result)