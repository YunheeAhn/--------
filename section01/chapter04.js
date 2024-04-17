// 1. 변수
let age = 27;
console.log(age)
// age라는 변수에 27값으로 초기값을 설정한다
// 값이 없다면 undefined로 출력된다
// 변수는 중복으로 선언할 수 없다.

age = 30;
console.log(age)


// 2. 상수
const birth = "1197.01.07";
// 값을 변화 시킬 수 없기 때문에 반드시 초기값을 설정 해줘야 한다.


// 3. 변수 명명규칙(네이밍 규칙)
// 변수 네이밍은 규칙이 존재 한다.

// 3-1. $, _ 를 제외한 기호는 사용 할 수 없다.
let $_name;

// 3-2. 숫자로 시작 할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용 할 수 없다.
// 예약어 : 자바스크립트가 이미 특수한 의미로 사용하기로 약속 한 것

// 4. 변수 명명 가이드
let a = 1;
let b = 2;
let c = a - b;
// 이렇게 누구든 알아보기 어려운 이름으로 변수 이름을 명명하는 것은 No.

let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;