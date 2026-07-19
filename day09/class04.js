// 회사의 회사원 3명이 존재하는데
// 회원이 벌어온 수입을 회사에서 관리해야하는 상황
class Company {
    static totalIncome = 0;

    constructor(name, age){
        this.name = name
        this.age = age
    }
    
    work(income){
        Company.totalIncome += income
    }
}

const hong = new Company("홍길동", 20)
const jang = new Company("장보고", 30)
const lee = new Company("이순신", 40)

hong.work(10000)
jang.work(20000)
lee.work(-20000)

console.log(Company.totalIncome)
