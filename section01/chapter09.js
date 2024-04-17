// 조건문
// 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
// if, switch 조건문이 대표적

// 1. if 조건문
let num = 11;

if (num >= 10) {
    console.log("num은 10이상 입니다")
    console.log("조건이 참 입니당")
}else if (num >=5) {
    console.log('num은 5이상 입니다')
} else {
    console.log('조건이 거짓입니당')
}

// if(조건식) {조건식이 만족했을 때 수행할 코드} else {조건식이 거짓일 때 수행 할 코드}
// if로 시작해서 else로 마무리

// 2. switch 조건문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리 할 때 if보다 더 직관적

let animal = 'cat';

switch (animal) {
    case 'cat': {
        console.log('고양이')
        break;
    }
    case 'dog':{
        console.log('강아지')
        break;
    }
    case 'rabbit':{
        console.log('토끼')
        break;
    }
    case 'tiger':{
        console.log('호랑이')
        break;
    }

    default : {
        console.log('그런 동물은 전 모릅니다')
    }
}
// case를 수행한 후 break를 입력하지 않으면, 수행한 것 외에 아래에 있는 case들도 수행이 된다.
// break를 필수적으로 입력 하자!
// 어떠한 case도 참이 되지 않을 때, default : {실행될 코드} 를 입력 한다

// switch(변수) {
//     case '값' : {
//         만족할 때 실행 될 코드
//         break;
//     }
//     case '값' : {
//         만족할 때 실행 될 코드
//         break;
//     }

//     default : {
//         case를 만족하는 값이 없는 경우 실행 될 코드
//     }
// }