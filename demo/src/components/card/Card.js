import React, { Component } from 'react';

export class Card extends Component {
    render() {
        return (
            <div className="ui card">
                <div className="image">
                    <img className="" src={ require('img/index-new02-CN.png') }/>
                </div>
                <div className="content">
                    <div className="header">Matt</div>
                    <div className="meta">
                        <a href="">Frides</a>
                    </div>
                    <div className="description">
                        Mattmew
                    </div>
                </div>
                <div className="extra content">
                    <span className="right floated">joel in 2017</span>
                    <span>
                        <i className="empty heart icon"> </i>99 LINK
                    </span>
                </div>
                
            </div>
        );
    }
}

export default Card;