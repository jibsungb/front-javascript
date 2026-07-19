// 프로토타입을 사용하는 이유
// 같은 프로토타입의 객체들에게 같은 값(또는 기능)을 공유해주기 위해서 사용한다.
// 운동선수(Player)
// 이름, 나이, 종목, 자기소개 출력

function Player(name, age, sport){
    this.name = name
    this.age = age
    this.sport = sport
    this.introduce = () => {
        console.log(`${this.name}은 ${this.sport}`)
    }
}

const hong = new Player("홍길동", 20, "축구선수")
const jang = new Player("장보고", 30, "농구선수")
const lee = new Player("이순신", 40, "배구선수")

hong.introduce()
jang.introduce()