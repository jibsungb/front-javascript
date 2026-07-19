function Student(name, num, point1, point2, point3){
    this.name = name
    this.num = num
    this.point1 = point1
    this.point2 = point2
    this.point3 = point3

    const total = this.point1 + this.point2 + this.point3
    const average = total / 3

    this.totalAverage = function(){
        console.log(`${this.name}의 총점은 ${total}점 평균은 ${average}점 입니다`)
    }
}

const hong = new Student("홍길동", 1, 100, 90, 80)
const lee = new Student("이순신", 2, 90, 80, 70)
const jang = new Student("장보고", 3, 80, 70, 60)

hong.totalAverage()

// 정수 메서드
// .toFixed(자리수)
console.log(10.3333.toFixed(2))