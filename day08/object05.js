// 프로토타입
// 토끼(이름, 나이)
// 강아지(이름, 나이)
// 고양이(이름, 나이)

// 추상화
function Animal(name, age){
    this.name = name
    this.age = age
}

// 객체화
const rabbit = new Animal("토깽이", 20)
const dog = new Animal("누렁이", 5)
const cat = new Animal("치즈", 3)

console.log(rabbit)