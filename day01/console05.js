// "Ba", "r", "-1", "a', ""로 BaNaNa 출력하기

console.log("Ba"+("r"-1)+"a")

//문자열-정수 = NaN


//※문자열 중에 정수로 형변환 시킬 수 있는 값은 강제로 형변환 시켜서 연산
console.log("10000"-1) //9999
console.log("r"*1) //NaN
console.log("500"*1) //500
console.log(-+"500") //-500
console.log(10/0) //Infinity