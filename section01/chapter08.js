// 특수한연산자

// 1. null병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null이나 undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;
console.log(var1); // undefined

let var4 = var1 ?? var2;
console.log(var4); // 10

let var5 = var1 ?? var3;
console.log(var5) //20

// 연산에 참여하는 값들 중 null이나 undefined가 아닌 값을 찾아낸다

let var6 = var2 ?? var3;
console.log(var6)
// 단, null이나 undefined 값이 포함되어 있지 않은 경우에는 앞에 먼저 입력된 var2의 값이 출력 된다


// 2. typeof 연산자
// -> 갑스이 타입을 문자열로 변환 하는 기능을 하는 연산자
let var7 = 1; // 숫자값으로 초기값을 설정 했다해도
var7 = "hello"; // 문자값으로 

let t1 = typeof var7;
console.log(t1) // string


// 3. 삼항연산자
// -> 항을 3개 사용 하는 연산자
// -> 조건식을 이용해서 참, 거짓일 떄의 값을 다르게 변환
let var10 = 10;
// 요구사항 : 변수 res에 var10의 값이 짝수일땐 '짝', 홀수일땐 '홀 반환
let res = var10 % 2 === 0 ? '짝' : "홀";
console.log(res) //짝