// 2차원 배열로 별 출력해보기

let a = [
    ["*"],
    ["*", "*",],
    ["*", "*", "*"],
]
/*
for(let i in a){
    let b = "";
    for(let j in a[i]){
        // console.log(a[i][j]);
        b += a[i][j] ;
    }
    console.log(b);
}
*/
/*
for(let i = a.length-1 ; i >= 0; i-- ){
    let b = "";
    for(let j in a[i]){
        // console.log(a[i][j]);
        b += a[i][j];
    }
    console.log(b);
}
*/
let c = 3;
for(let i =  0; i < a.length; i++ ){
    let b = "";
    for(let j = c-1; j >= 0; j--){
        // console.log(a[i][j]);
        if(a[i][j] == undefined){
            b += " ";
        } else {
            b += a[i][j];
        }
    }
    console.log(b);
}
for(let i =  a.length-1; i >= 0; i-- ){
    let b = "";
    for(let j = c-1; j >= 0; j--){
        // console.log(a[i][j]);
        if(a[i][j] == undefined){
            b += " ";
        } else {
            b += a[i][j];
        }
    }
    console.log(b);
}