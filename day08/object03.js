const products = {
    product1: "키보드",
    product2: "마우스",
    product3: "모니터",
    product4: "노트북",
    product5: "연필",
    product6: "지우개",
}

// . 접근법 
// 변수를 사용할 수 없다
// for(let i = 0; i < 6; i++){
//     const key = "product" + (i + 1)
//     console.log(products.key)
// }

// [] 접근법
for(let i = 0; i < 6; i++){
    const key = "product" + (i + 1)
    console.log(products[key])
}

// 향상된 for문
for(let key in products){
    console.log(products[key])
}