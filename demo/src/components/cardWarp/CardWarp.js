import React, { Component } from 'react';
import Card from 'card/Card.js';




export default class CardWarp extends Component {
    render() {
        
        let {data} = this.props

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