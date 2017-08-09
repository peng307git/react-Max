import React, { Component } from 'react';
import Card from 'card/Card.js';
let data = [
    {
        imgSrc : require('img/index-new01-CN.png'),
        name : "joel-1",
        meta : "cowrmeat",
        desc : 'joel-1 is name peng',
        joined : "2018",
        nikename : '666'
    },
    {
        imgSrc : require('img/index-new02-CN.png'),
        name : "joel-2",
        meta : "cowrmeat",
        desc : 'joel-1 is name peng',
        joined : "2018",
        nikename : '88'
    },
    {
        imgSrc : require('img/index-new03-CN.png'),
        name : "joel-3",
        meta : "cowrmeat",
        desc : 'joel-1 is name peng',
        joined : "2018",
        nikename : '98'
    },
    {
        imgSrc : require('img/index-new04-CN.png'),
        name : "joel-4",
        meta : "cowrmeat",
        desc : 'joel-1 is name peng',
        joined : "2018",
        nikename : '777'
    }
]

export default class CardWarp extends Component {
    render() {

        let cards = data.map((el,i)=>{
            return ( <Card key={i} {...el}/> )
        })

        return (
            <div className="ui cards">
                {cards}
            </div>
        );
    }
}