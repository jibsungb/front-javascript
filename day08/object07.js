//얕은 복사
//깊은 복사

const animal1 = {
    cat : "야옹이",
    dog : "누렁이",
    cow : "얼룩이",
    tiger : "어흥이"
}

const animal2 = animal1
animal1.dog = "점박이"


//얕은 복사 : 같은 값을 참조하고 있기 때문에 1의 참조값이 바뀌면 2도 바뀜
// console.log(animal)
// console.log(animal2)

//깊은 복사
const animal3 = Object.assign({}, animal1)
animal1.dog = "점박이"
console.log(animal1)
console.log(animal3)
