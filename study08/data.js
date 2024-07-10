let info = {}
export const model = [
    {
        point : 12,
        data : [[1,0,1,0,1],[0,0,0,0,0],[1,1,0,1,1],[0,0,0,0,0],[1,0,1,0,1]]
    },{
        point : 17,
        data : [[1,0,1,0,1],[0,0,0,0,0],[1,0,1,0,1],[0,0,0,0,0],[1,0,1,0,1]]
    }, {
        point : 22,
        data : [[1,0,0,0,1],[0,0,1,0,0],[1,1,1,1,1],[0,0,1,0,0],[1,0,0,0,1]]
    }
];
export const pointEvent = () => {
    let history = data.getData();
    const p1 = history[0];
    const p2 = history[1];
    info.divs[p1].className += " bg3";
    if(p2 != undefined) {
        let styles = info.divs[p2].className.split(" ");
        info.divs[p2].className = styles[0];
    }
}
export const dataEvent = () => {
    let html = "";
    let id = 1;
    if(localStorage.getItem("id")) {
        id = localStorage.getItem("id");
    }
    let history = data.getData();
    if(!history) { // history의 값이 null 일 경우 초기값 생성;
        history = [0];
        data.setData(history);
    }
    if(history[1] == undefined) history[0] = model[id].point;
    data.setData(history);

    for(let row of model[id].data) {
        let temp = "";
        for(let col of row) {
            temp += `<div class="${(col == 1) ? "bg1" : "bg2"}"></div>`;
        }
        html += `<li>${temp}</li>`;
    }
    info.ul.innerHTML = html;
    pointEvent();
}
export const btnEvent = (e) => {
    localStorage.setItem("id", e.target.id);
    dataEvent();
}
export const createEvent = (data, keyEvent) => {
    info = data;
    for(let btn of info.btns) btn.onclick = btnEvent;
    window.addEventListener("keydown", keyEvent);
    dataEvent();
}

export const data = {
    setData : (data) => {
            localStorage.setItem("history", JSON.stringify(data));
    },
        // localStorage에는 문자만 넣을수 있다. 배열을 사용하고자 할때는 Set > JSON.stringify(), Get > JSON.parse()를 사용한다
    getData : () => {
        let h = localStorage.getItem("history");
        return JSON.parse(h);
    }
}