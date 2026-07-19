// 함수의 선언
// 이름을 받으면 이름을 출력해주는 함수 
function print(name){
    console.log(name)
}

// 함수 사용
print("홍길동")


// 2개 정수를 전달하면 2개를 더한 결과를 출력해주는 함수 
function add(num1, num2){
    console.log(num1 + num2)
}

add(10, 20)

// 성과 이름을 받아서 풀네임을 출력해주는 함수 선언 후 사용
function fullName (lastName, firstName){
    console.log(lastName + firstName)
}

fullName("김","지선")