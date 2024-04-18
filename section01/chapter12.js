// 1. 함수 표현식
function funcA() {
    console.log('funcA')
}
let varA = funcA; // 변수 안에 함수를 담을 수 있다
console.log(varA) // funcA 함수 자체가 출력
varA(); // funcA 문자열이 출력

// 그래서 이렇게도 사용이 가능하다
let varB = function funcB() {
    console.log("funcB")
}
// 변수 안에 함수를 바로 넣어서 사용 할 수 있음
// 단, 여기서 function~ 이 부분은 값으로서 함수가 선언된 것이 때문에 따로 호출을 할 수 없다
// 그래서 funcB 이름은 생략해도 된다 -> 함수표현식
varB(); 

// 2. 화살표 함수
// -> 함수를 이전보다 빠르고 간결하게 생성
let arrow = (value) => value + 1;
console.log(arrow(10)); //1

let arrow2 = (value) => {
    console.log(value);
    return value + 1;
}
console.log(arrow2())