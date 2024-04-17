// 연산자(프로그래밍에서 다양한 연산을 위해 기호를 사용)
// + * - /

// 1. 대입 연산자
let var1 = 1;
// 값을 저장할 변수의 이름과 값을 "=" 기호를 이용해서 사용

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;

let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
// */% 연산자의 우선순위가 +-연산자보다 높다
// 우선순위가 낮은 연산을 먼저 수행 시키려면 ()를 사용한다

// 3. 복합 대입 연산자
// 산술연산자와 대입 연산자가 복합되어 있다
let num7 = 10;
num7 += 20; // 복합연산자 사용 방법
// 원래는 num7 = num7 + 20; 처럼 두번써야 함 컴퓨터는 중복을 좋아 하지 않는다
// 다른 산술연사자도 동일한 방식으로 사용한다.

// 4. 증감 연산자
// 1씩 늘리거나, 줄일 때 사용
let num8 = 1;
num8++; // -> 후위 연산
// 단, 변수명 뒤에 ++ 혹은 --를 쓸때, ide창에 입력된 순서대로 읽기 때문에 변수명 앞에 두자 -> 전위연산

// 5. 논리연산자
let or = true || false; // 값이 하나만 참이어도 참

let and = true && false; // 값이 모두 참이어야 참

let not = !true; // 반대의 값을 출력

console.log(or, and, not); // true false false

// 6. 비교 연산자
let comp1 = 1 === 2; // 동등비교
let comp2 = 1 !== 2; // 비동등 비교
console.log(comp1, comp2) // false true

// 동등 비교 연산자 수행시 "="을 세번 쓰는 이유!
// =을 두번만 쓰게 된다면(==) 자료형 까지 같은지 비교를 할 수가 없다
let comp3 = 1 == "1"
let comp4 = 1 === "1"
console.log(comp3, comp4) // true false


// 대소 비교
let comp5 = 2 > 1;
let comp6 = 2 < 1;
console.log(comp5, comp6) // true false

let comp7 = 2 >= 4;
let comp8 = 2 <= 2;
console.log(comp7, comp8) //false true