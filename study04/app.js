// 조건문

let a = 1;
let b = 5;

// if(a > b) {
//     console.log("참");

// } else if (a == b){
//     console.log("같다");
// } else {
//     console.log("거짓");
// }

let c = "1";
// 자료형의 형변환을 안시켜도 비교가 가능하다.
// 자료형까지 비교하려면 === 을 사용하면 된다.
// if(a === Number(c)){
//     console.log("참");
// } else {
//     console.log("거짓");
// }

// switch (c) {
//     case "1":
//         console.log("참");
//         break;

//     default:
//         console.log("거짓");
//         break;
// }

// for(let i = 0; i < 10 ; i++){
//     console.log(i);
// }

// let d = [1, 2, 3];
// for (let i in d){
//     console.log(i,d[i]);
// }

// let e = {k1: "1", k2: "2", k3: "3"};
// for(let i in e){
//     console.log(i, e[i]);
// }

let f = [
    {k1: "1", k2: "2"},
    {k1: "3", k2: "4"}
];
for(let i in f){
    console.log(i, f[i], f[i].k1);
}
