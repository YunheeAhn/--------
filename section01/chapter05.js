// 자료형 - 원시타입 (number, string, boolean, null, undefined)
//        - 객체타입 - object (array, function, RegexExp) -> 나중에 다시 다루기로 함

// 원시타입 : 기본형 타입, 프로그래밍에 있어 가장 기본적인 값들의 타입을 의미함

// 1. Number Type : 존재 할 수 있는 모든 숫자 값들을 포함
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
// 여기까지 기본 사칙 연산
console.log(num1 % num2); // 나머지 구하는 연산 : 모듈러 연산

// 숫자로 보이지 않는 독특한 number type
let inf = Infinity // 양의 무한대
let mInf = -Infinity // 음의 무한대

let nan = NaN; // not a number : 연산 실패 했을경우에 사용


// 2. String Type : 문자열 타입
let myName = '유니버스' // 문자열은 무조건 '' 혹은 ""을 반드시 사용!
let myLocation = '우주'

let introduce = myName + myLocation;
console.log(introduce)

let introduceText = `${myName}은 ${myLocation}에 거주합니다` // 백틱 기호를 사용 하면, 문자열 안에 변수 값을 동적으로 넣을 수 있다 
console.log(introduceText);
// **템플릿 리터럴 문법 이라고 부른다 **


// 3. Boolean Type : 참, 거짓만을 저장하는 타입(상태를 확인)
let isSwitchOn = true;
let isEmpty = false;


// 4. Null Type : 변수에 아무런 값도 갖지 않는다
let empty = null; // 


// 5. Undefined Type : undefined 값 하나만을 갖는 타입
let none;
console.log(none)