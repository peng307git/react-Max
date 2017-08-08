import React from 'react'
import ReactDOM from 'react-dom'
import Nav from 'nav/Nav.js'
import CardWarp from 'cardWarp/CardWarp.js';
require('../Semantic-UI/dist/semantic.css')
require('style/main.css')
       
ReactDOM.render(
    <div className="ui container">
        <div className="ui dividing"></div>
        <Nav/>
        <CardWarp/>
    </div>,
    document.getElementById("root")
);

if(module.hot){
    module.hot.accept()
}