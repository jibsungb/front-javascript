/*문제1 영어 소문자 문자열을 입력받아서, 
모음("aeiou")만 쏙 빼고 나머지 자음만 출력하는 화살표 함수를 만드세요.*/

const deleteVowel = (content, callback) => {
    let vowel = "aeiou"
    let resultText = ""
    for (let i = 0 ; i < content.length ; i ++ ){
        let text = content[i]
        if (vowel.indexOf(text) === -1){
            resultText += text
        }
    }
    callback (resultText)
}

deleteVowel("javascript", console.log)

