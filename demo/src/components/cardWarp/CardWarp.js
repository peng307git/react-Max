import React, { Component } from 'react';
import Card from 'card/Card.js';

export default class CardWarp extends Component {
    render() {
        return (
            <div className="ui cards">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    }
}