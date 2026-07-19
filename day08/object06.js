// 11분
// 프로토타입을 만들어서 유저 3명의 정보를 객체화(for instance) 시키시오
// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

function Introduce (name, age, point){
    this.name = name;
    this.age = age;
    this.point = point;
}

const user1 = new Introduce ("홍길동", 30, 3500);
const user2 = new Introduce ("이순신", 22, 0);
const user3 = new Introduce ("장보고", 66, 9500);

console.log(user1);