// 점수에 대한 학점을 구하고 싶을 때
// 90점 이상이면 A
// 80점 이상이면 B
// 70점 이상이면 C
// 70점 미만이면 과락

let score = 90

// 여러조건식 중 1개만 실행시킬 때 사용하는 문장
if(score >= 90){
    // 90 ↑
    console.log("A")

}else if(score >= 80){
    // 해당 영역 조건식: score < 90 && score >= 80
    // 89 ~ 80
    console.log("B")

}else if(score >= 70){
    // 해당 영역 조건식: score < 90 && score < 80 && score >= 70
    // 79 ~ 70
    console.log("C")

} else {
    // 위의 조건식 모두 만족하지 않으면
    // score < 90 && score < 80 && score < 70
    // 69 ↓
    console.log("과락")
    
}