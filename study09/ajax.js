const getParams = (params={}) => {
    let value = "";
    for(let k in params) {
        if(value != "") value += "&";
        value +=  `${k}=${params[k]}`;
    }
    return value;
}
const http = new XMLHttpRequest();
export const $async = (method, url, params, callback) => {
    http.onload = function() { // this를 사용해야하기 때문에 function()으로 정의한다
        
        if(callback != undefined) callback(this);
    }
    http.open(method, url);
    http.send(getParams(params));
}
export const $get = (url, params, callback) => $async("GET", url, params, callback);
export const $post = (url, params, callback) => $async("POST", url, params, callback);
