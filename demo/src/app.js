import React from 'react'
import ReactDOM from 'react-dom'
import Nav from 'nav/Nav.js'
import CardWarp from 'cardWarp/CardWarp.js';
require('../Semantic-UI/dist/semantic.css')
// require('style/main.css')


let data = [
    {
        imgSrc : require('img/index-new01-CN.png'),
        name : "joel-1",
        meta : "cowrmeat",
        desc : 'joel-1 is name peng',
        joined : 2016,
        nikename : 666
    },
    {
        imgSrc : require('img/index-new02-CN.png'),
        name : "joel-2",
        meta : "cowrmeat",
        desc : 'joel-1 is name peng',
        joined : 2017,
        nikename : 88
    },
    {
        imgSrc : require('img/index-new03-CN.png'),
        name : "joel-3",
        meta : "cowrmeat",
        desc : 'joel-1 is name peng',
        joined : 2018,
        nikename : 98
    },
    {
        imgSrc : require('img/index-new04-CN.png'),
        name : "joel-4",
        meta : "cowrmeat",
        desc : 'joel-1 is name peng',
        joined : 2019,
        nikename : 9
    }
]

ReactDOM.render(
    <div className="ui container">
        <div className="ui dividing"></div>
        <Nav/>
        <CardWarp data={data}/>
    </div>,
    document.getElementById("root")
);

if(module.hot){
    module.hot.accept()
}