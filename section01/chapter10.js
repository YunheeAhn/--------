// 반복문
// 어떠한 동작을 반복해서 수행 할 수 있도록 만들어주는 문법

// 1. for 반복문
// for (초기식(초기값설정); 조건식(언제까지?) ; 증감식(매 반복마다 초기값을 증가)) {
//     console.log('반복')
// }
for (let idx=0; idx < 5; idx++) {
    console.log('반복')
}
// 0,1,2,3,4 -> idx값이 0부터 4까지 반복

// 중간에 조건식의 값이 거짓인 경우 중단 하는 방법
for (let idx=0; idx < 10; idx++) {
    console.log('반복')

    if (idx >= 5) {
        break; // 6번쨰에서 종료
    }
}

// 반복의 특정회차를 건너뛰는 방법
for (let idx=0; idx <= 10; idx++) {
    if (idx % 2 === 0) {
        continue;
        // 조건이 참이 되면 반복문 내의 이 회차는 실행 되지 않고 넘어간다
    }
    console.log(idx) // 1,3,5만 출력

    if (idx >= 5) {
        break; // 6번쨰에서 종료
    }
}