// 모듈 사용하기
/***********************************************
 * 사용할 객체 : const model = {};
 ***********************************************/ 

/***********************************************
 * CommonJS : 사용법
 * 내보내기 : module.exports = model;
 * 가져오기 : const model = require("경로 + 파일");
 * 웹 브라우저에서는 현재 사용이 불가능 하다. 다른 방식을 사용해야한다.
 ***********************************************/ 
// const model = require("./data1.js");


/***********************************************
 * ES6 : 사용법
 * 내보내기 : export default model;
 * 가져오기 : import model from "";
 ***********************************************/
import model from "./data1.js"; 

// 데이터 확인

/*
for(let y = 0; y < model.length; y++){
    let temp = "";
    for(let x = 0; x < model[y].length; x++){
        // temp += "<div class='"
        // temp += (model[y][x] == 1) ? "bg1" : "bg2";
        // temp += "'></div>"
        temp += `<div class="${(model[y][x] == 1) ? "bg1" : "bg2"}"></div>`;
    }
    // html += temp;
    html += `<li>${temp}</li>`;
}
*/

const dataEvent = (type) => {
    let html = "";
    for(let y = 0; y < model.length; y++){
        let temp = "";
        for(let x = 0; x < model[y].length; x++){
            if(type){
                temp += `<div class="${(model[y][x] == 1) ? "bg1" : "bg2"}"></div>`;
            } else {
                temp += `<div class="${(model[y][x] == 1) ? "bg2" : "bg1"}"></div>`;
            }
        }   
        html += `<li>${temp}</li>`;
    }
    return html;
}


const ul = document.getElementsByTagName("ul")[0];

 ul.innerHTML = "";
// ul.innerHTML = html;

const btnEvent =  (e) => {
    
    // 화살표 함수를 사용하면 this를 사용하지 못함(undefined)
    // target을 사용하면 this를 안써도 정확한 객체를 찾아낼수 있다.
    // console.log(this, e, e.target,e.target.id);
    switch (e.target.id){
        case "1":
            ul.innerHTML = dataEvent();
            pointerEvent();
            break;
        case "2":
            ul.innerHTML = dataEvent(true);
            pointerEvent();
            break;
        default:
            // 나머지 기능부여
            ul.innerHTML = dataEvent();
            pointerEvent();
            break;
    }
}

const btns = document.getElementsByTagName("button");
for(let btn of btns){
    console.log(btn);
    btn.onclick = btnEvent;
}
/*
btns[0].onclick = function() {
    ul.innerHTML = "";
}
btns[1].onclick = function() { 
    ul.innerHTML = html;
}
*/
/*
window.addEventListener("keydown", (e) => {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 97:
            ul.innerHTML = "";
            break;
        case 98:
            ul.innerHTML = dataEvent(true);
            break;
        case 99:
            ul.innerHTML = dataEvent();
            break;
        default:
            alert("잘못된 키 입니다.");
            break;
    }
});
*/

let history = [0];
const pointEvent = () => {
    let div = document.getElementsByTagName("div");
    div[history[0]].className += " bg3";
    if(history[1] != undefined){
        let styles = div[history[1]].className.split(" ") ;
        // console.log(styles);
        div[history[1]].className = styles[0];
    }
}

window.addEventListener("keydown", (e) => {
    let point = history[0];
    switch (e.keyCode) {
        case 37: //왼쪽 : 0 이하는 이동 불가
            if(point > 0) history = [point - 1, point];
            break;
        case 38: //위쪽 : 4 이하는 이동 불가
            if(point > 4) history = [point - 5, point];
            break;
        case 39: //오른쪽 : 24 이상은 이동 불가
            if(point < 24) history = [point + 1, point];
            break;
        case 40: //아래쪽 : 20 이상은 이동 불가
            if(point < 20) history = [point + 5, point];
            
            
            break;
    }
    // console.log(history);
    pointEvent();
});

