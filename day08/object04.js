const users = {
    user1 : {
        name : '홍길동',
        age : 30,
        point : 3000
    },
    user2 : {
        name : '이순신',
        age : 22,
        point : 0
    },
    user3 : {
        name : '장보고',
        age : 65,
        point : 9500
    }
}

// 1. 회원의 모든 포인트의 총 합을 출력하기
//방법1
let totalPoint = users.user1.point + users.user2.point + users.user3.point
console.log(totalPoint)

//방법2
let totalPoint = 0
for(let key in users){
    // console.log(users[key].point)
    totalPoint += users[key].point
}
console.log(totalPoint)


// 2. 유저의 정보를 전달하면 아래와 같이 출력해주는 함수를 만들어서 user1 ~ user3까지 전달하기
// ex) 이름: 홍길동, 나이: 65살, 포인트: 9500점
// 이름: 홍길동, 나이: 65살, 포인트: 9500점
// 이름: 홍길동, 나이: 65살, 포인트: 9500점

const printIntroduce = (user) => {
    let result = `이름: ${user.name}, 나이: ${user.age}, 포인트: ${user.point}`
    console.log(result)
}

for(let key in users){
    const user = users[key]
    printIntroduce(user)
}