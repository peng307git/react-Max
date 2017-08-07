import React from 'react';
import ReactDOM from 'react-dom';

let n1 = "你好"
let n2 = "吃了吗"


ReactDOM.render(
    <div style={ { color:"red",background:"yellow" } }>{n1}{n2}{9-8} </div>,
    document.getElementById("root")
);

if(module.hot){
    module.hot.accept()
}