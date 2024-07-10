import { createEvent, pointEvent, model, dataEvent, data } from "./data.js"; 

const info = { // data.js 와 데이터를 공유하기 위해 생성한 객체.
    //history : [0],
    divs : document.getElementsByTagName("div"),
    ul : document.getElementsByTagName("ul")[0],
    btns : document.getElementsByTagName("button")
}
const checkEvent = (point3) => {
    let id = 1;
    if(localStorage.getItem("id")) id = localStorage.getItem("id");
    let data = model[id].data;
    let y = Math.floor(point3 / 5);
    let x = (point3 % 5);
    if(data[y][x] == 1) return false;
    return true;
}
const keyEvent = (e) => {
    if(info.ul.firstChild.childNodes.length > 0) {
        let history = data.getData();
        let point1 = history[0]; // 현재 위치
        let point2 = history[1]; // 이전 위치
        let point3 = 0; // 앞으로 이동할 위치
        let id = 1;
        if(localStorage.getItem("id")) id = Number(localStorage.getItem("id"));
        switch (e.keyCode) {
            case 37: // 왼쪽
                if(point1 > 0) point3 = (point1 - 1);
                if(point1 % 5 == 0 && point1 >= 0){ // 왼쪽으로 페이지를 넘아갈때 동작 로직                                         
                    point3 = (point1 + 4); 
                    id = id - 1;
                    if( id < 0 ) id = 2;
                    localStorage.setItem("id", id);
                }
                break;
            case 38: // 위쪽
                if(point1 > 4) point3 = (point1 - 5);
                else point3 = (point1 + 20);
                break;
            case 39: // 오른쪽
                if(point1 < 24) point3 = (point1 + 1);
                if((point1 + 1) % 5 == 0 && point1 <= 24) { // 오른쪽으로 페이지를 넘어갈때 동작 로직
                    point3 = (point1 - 4);
                    id = id + 1;
                    if( id == 3 ) id = 0;
                    localStorage.setItem("id", id);
                }
                break;
            case 40: // 아래쪽
                if(point1 < 20) point3 = (point1 + 5);
                else point3 = (point1 - 20);
                break;
        }
        if(checkEvent(point3)) {
            history = [point3, point1];
            data.setData(history);
            // pointEvent();
            dataEvent();
        }
    }
}
createEvent(info, keyEvent);