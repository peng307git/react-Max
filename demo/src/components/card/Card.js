import React, { Component } from 'react';

export class Card extends Component {
    render() {
        let {imgSrc ,name,meta,desc,joined,nikename} = this.props
        return (
            <div className="ui card">
                <div className="image">
                    <img className="" src={ imgSrc }/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">
                        <a href="">{meta}</a>
                    </div>
                    <div className="description">
                        {desc}
                    </div>
                </div>
                <div className="extra content">
                    <span className="right floated">joel in {joined}</span>
                    <span>
                        <i className="empty heart icon"> </i>{nikename} nike
                    </span>
                </div>
                
            </div>
        );
    }
}

export default Card;