// 함수선언
function functionName() {
    console.log('안녕하세요!')
}
// 선언했다고 바로 실행 되는 것이 아님
functionName()
// 실행을 해주어야함, 반드시 소괄호를 함께 작성 해야 함


// 직사각형의 넓이를 구하는 함수
function getArea() {
    let width = 10;
    let height = 20;
    let area = width * height;

    console.log(area);
}

getArea(); // 200

// 지금은 고정된 값의 결과 값만 출력이 된다
// -> 이 함수에 우리가 직접 넘겨준 값을 계산해서 호출 하게 하는 방법을 알아보자

function getArea2(width, height) { // 매개변수
    let area = width * height;

    console.log(area);
}
getArea2(20, 20); // 인수

// 인수 : 함수를 호출 하면서 함수에게 전달한 값
// 매개변수 : 전달한 인수들을 순서대로 저장하는 함수의 변수(매개체 역할을 하는 변수)

getArea2(120, 200); // 24000

// 콘솔창에 출력 하지 않고 값을 반환하는 경우
function getArea3(width, height) {
    let area = width * height;

    return area; // 반환값 = 함수 호출의 결과 값
}
let area1 = getArea3(10,20)
console.log(area1); //200
// 리턴문을 이용하면 함수가 어떤 결과 값을 반환 할 수 있다.
// 값을 반환하고 바로 종료가 되기 때문에 리턴문 아래에 수행할 코드를 입력 해도 실행 되지 않는다.



// 함수안에 또다른 함수를 선언하는것도 가능하다
function getArea4(width, height) {
    function another() { // 중첩함수
        console.log("another")
    }

    another();
    let area = width * height;

    return area; // 반환값 = 함수 호출의 결과 값
}
getArea4()


// 호이스팅 : 끌어올리다
// 선언문을 호출문보다 아래에 두어도 호이스팅이 되어서 실행이 된다.
// -> 좀 더 유연하게 프로그래밍을 할 수 있는 점이 장점