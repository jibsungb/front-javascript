//3의 배수가 나오게 출력 (continue 활용)

for (let i = 0 ; i < 20; i++){
    let num = i+1
    if(num % 3 !== 0){
        continue;
    }
    console.log(num)
}