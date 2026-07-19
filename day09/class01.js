class Animal {
    constructor (name, age, species){
        this.name = name;
        this.age = age;
        this.species =species    }
}

const rabbit = new Animal("토깽이", 3, "토끼")
const dog = new Animal("누렁이", 5, "강아지")
const cat = new Animal("치즈", 4, "고양이")

console.log (rabbit);
console.log (dog);
console.log (cat);