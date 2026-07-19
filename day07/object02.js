const rabbit = {
    name: "토깽이",
    age: 20,
    species: "토끼",
    legOfNumber: 4
}

// 왜 값을 가져오는 방법이 2개나 있을까??
// .접근법은 변수를 사용할 수 없다.
// 가독성은 좋음
// console.log(rabbit.name)
// console.log(rabbit.age)
// console.log(rabbit.species)
// console.log(rabbit.legOfNumber)

// 대괄호 접근법
// 1. 변수를 사용할 수 있다.
// 2. 규칙성이 있을 때 사용하는 문법
// 객체의 key값은 index 
const name = "name"
// console.log(rabbit[name])
// console.log(rabbit["age"])
// console.log(rabbit["species"])
// console.log(rabbit["legOfNumber"])



//for in (인덱스 접근하는 반복문)
for(let i in rabbit){
 console.log(i)   
}


//for of (값에 접근하는 반복문)
for (let i of rabbit){
    console.log(i)
}

