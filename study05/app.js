// 반복문 : while, do while
/*
while(true){
     console.log(1);
    break;
}

let i = 1;
do {
    if( i > 1){ break; }
    console.log(i);
    i++;
    
} while (true);
*/

// 중첩 2개의 반복문 출력 : 구구단
let a = 1;
/*
for( ; a < 10 ; a++ ){
    for ( let b = 1; b< 10 ; b++ ){
        console.log(`${a} * ${b} = ${a*b}`);
    }
    console.log("-----------------------------");
}
*/


// 1차원 배열
let c = ["가", "나", "다"];
for(let d in c){
    // console.log(c[d]);
}

// 2차원 배열
let d = [
    ["가", "나"],
    ["다", "라"]
]
for(let i in d){
    for(let j in d[i]){
        console.log(d[i][j]);
    }
    console.log("");
}