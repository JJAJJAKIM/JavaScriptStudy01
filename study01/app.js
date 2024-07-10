console.log("Study01 Javascript 시작!");

var i = 1; // 자료형이 정해지지 않은 데이터를 담을수 잇는 광범위한 자료형.

let j = 2; // int, String 같은 느낌의 개별 자료형.
const k = 3;  // 한번 담아놓으면 바꿀수 없다. 상수. 마치 자바의 final과 같다.

function print() {
    // console.log("출력");
}

print();
// 자바스크립트는 오버로드의 개념이 없어서 같은 이름의 함수는 마지막에 쓰인 함수로 덮어쓰기가 된다.
function print(a){
    return a;
}

// console.log(print(i));

a = "자료형 선언 안함";
// console.log(1);

class Test{ // js는 생성자는 1개밖에 만들지 못한다.
    b = 1;
    #c = 2;
    constructor(a) {
        this.a = a;
    }
}

// const test = new Test("홍길동");
// console.log(test, test.a);

const test2 = {
    a: 1,
    b: 2,
    c: "삼"
};
// console.log(test2, test2.c);

// console.log(test, test2);


for(a in test2) {
    // console.log(a, test2[a]);
}
var {b:다른이름} = test2;
// console.log(">",다른이름);


for(a in new Test()){
    // console.log("for문으로 class 출력 >> ", a);
}
var {a} = new Test("하잉");
// console.log("객체에 클래스 담아서 a 호출 >> ", a);
var {a:다른이름} = new Test("바잉");
// console.log("객체에 클래스 담아서 a를 다른이름으로 호출 >> ", 다른이름);

const test3 = {};

test3.a = 1;
test3.b = 2;
// console.log(test3);

const test4 = test3;
const test6 = {c: "삼"};
const test5 = {...test3, ...test6};

// console.log("test4 >> ", test4);
// console.log("test5 >> ", test5, test5.a);


function fn1() { // 외부 라이브러리를 사용하지 못할때. 함수
    console.log("fn1");
}

const fn2 = function() { //콜백 함수
    console.log("fn2");
}

const fn3 = () => { //화살표 함수
    console.log("fn3");
}

const fn4 = () => console.log("fn4");

// fn1();
// fn2();
// fn3();
// fn4();

function fn5(fn) { // 함수 변수를 매개 변수로 받을수 있다. (콜백함수)
    fn(); //함수 호출
}
fn5(fn1);

fn5(() => {
    console.log("콜백 함수 내용입니다.");
});

const page1 = {
    select: () => {console.log("select")},
    insert: () => {console.log("insert")},
    update: () => {console.log("update")},
    delete: () => {console.log("delete")},
    selectList: () => {console.log("selectList")}
}
page1.select();
page1["select"]();