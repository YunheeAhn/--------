// 스코프
// '범위'를 뜻함 변수나 함수에 접근하거나 호출 할 수 잇는 범위를 말함
function funcA() {
    let a = 1;
}
console.log(a) // uncaught referenceError

// 전역(전체영역 스코프) / 지역(특정 영역 스코프)
// -> 전역 스코프 : 전체영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcB() {
    let b = 2; // 지역 스코프
    console.log(a);
}

funcB();
// console.log(b) // funB 내부에 선언이 되어 있기 때문에 접근 불가


// 조건문, 반복문도 함수 내부에 지역 스코프를 갖고 있다