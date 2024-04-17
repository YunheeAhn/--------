// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환

let num = 10;
let str = "20";

const result = num + str;
console.log(result) // 1020
// 변수 num에 저장된 초기값인 숫자 10 이 result변수에서 덧셈 하는 과정 중 묵시적으로 스트링타입으로 변환됨
// 즉 문자열 간의 덧셈 연산이 진행 됨

// 2. 명시적 형 변환
// -> 프로그래머 내장 함수 등을 이용해서 직접 형 변환을 명시
let srt1 = "10";
let strToNum = Number(srt1);
console.log(10 + strToNum)

let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2) // NaN
// 숫자만 포함되어 있는경우가 아닌 경우에는 NaN으로 출력

let strToNum3 = parseInt(str2);
console.log(strToNum3);
// Number() 대신 parseInt()를 사용 -> 단 기존 변수에 저장된 값이 "개10"인 경우 변환되지 않음

let num3 = 20;
let numToStr1 = String(num3);
console.log(numToStr1 + "입니다");
