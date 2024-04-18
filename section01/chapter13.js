// 콜백함수
// -> 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미함
function main(value) {
    value()
    // console.log(value)
}

function sub() {
    console.log('i am sub')
}

main(sub) // sub함수 자체가 출력 / i am sub ->value(); 일때


// 그러면 콜백 함수를 어떻게 응용 할 수 있을까?
// 2. 콜백 함수 활용
function repeat(count) {
    for (let idx=1; idx <= count; idx++) {
        console.log(idx)
    }
}

function repeatDouble(count) {
    for (let idx=1; idx <= count; idx++) {
        console.log(idx*2)
    }
}
repeat(5);
repeatDouble(5);
// 이런 경우, 중복 코드가 발생 되는데, 컴퓨터는 중복을 싫어 한다!

function repeatCallback(count, callback) {
    for (let idx=1; idx <= count; idx++) {
        console.log(idx)
    }
}
repeatCallback(5, function (idx) {
    console.log(idx);
});
// 화살표 함수로 간단하게 사용 할 수 있다
repeatCallback(5, (idx) => {
    console.log(idx * 2);
});