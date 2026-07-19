// 키오스크 switch 문장 완성시키기
// 메뉴: 아메리카노, 카페라떼, 레몬에이드, 아이스티
// 가격: 3000, 5500, 3500, 4000

// 메뉴를 변수에 담고, 메뉴에 따라 가격을 출력하기
// ex)
// 아메리카노 선택하면 아래 결과를 출력
// "아메리카노는 3000원"

let kiosk = "아메리카노"

switch(kiosk){
    case "아메리카노":
        console.log(kiosk+"는 3000원")
        break;
    case "카페라떼":
        console.log(kiosk+"는 5500원")
        break;
    case "레몬에이드":
        console.log(kiosk+"는 3500원")
        break;
    case "아이스티":
        console.log(kiosk+"는 4000원")
        break;
    default :
        console.log("메뉴를 잘못 선택했습니다")
}


//방법2 (강사님풀이)
let menu = "아메리카노";
let price = 0;

switch(menu){
    case "아메리카노":
        price = 3000;
        break;
    case "카페라떼":
        price = 5500;
        break;
    case "레몬에이드":
        price = 3500;
        break;
    case "아이스티":
        price = 4000;
        break;
    default:
        console.log("메뉴가 잘못 선택되었습니다.")
        break; 
}

let result = `${menu}는 ${price}원 입니다.`
console.log(result)