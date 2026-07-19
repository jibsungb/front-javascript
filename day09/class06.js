// 은행(Bank) 클래스 실습
// 회원(Mamber)들에게 관리비를 5만원씩 가져가야한다.
// 1. 회원이 가진 돈을 5만원을 빼야한다.
// 2. 은행에 5만원을 추가해야한다.

class Bank {
    constructor(bankName, bankMoney) {
        this.bankName = bankName
        this.bankMoney = bankMoney
    }

    // 출금
    // 1. 누군지 알아야한다.
    // 2. 금액도 알아야한다.
    // 매개변수에는 객체도 넘길 수 있다. (주소)
    withdraw(member, money){
        member.memberMoney -= money
        this.bankMoney += money
    }
    
}

class Member {
    constructor(memberName, memberMoney){
        this.memberName = memberName
        this.memberMoney = memberMoney
    }
}

const kb = new Bank("국민은행", 100000)
const hong = new Member("홍길동", 50000)

kb.withdraw(hong, 50000)

console.log(hong.memberMoney)
