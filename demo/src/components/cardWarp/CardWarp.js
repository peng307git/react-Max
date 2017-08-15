import React, { Component } from 'react';
import Card from 'card/Card.js';




export default class CardWarp extends Component {

     componentDidUpdate () {
        console.log("card   更新好了");
    }

    
   componentDidMount() {
        console.log("card  渲染完成");
    }
    
    componentWillUnmount() {
        console.log("card 卸载了");
    }

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