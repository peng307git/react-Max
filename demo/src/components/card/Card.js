import React, { Component } from 'react';
import PropTypes from 'prop-types';

 //属性验证
let propTypes = {
    imgSrc : PropTypes.string,
    name : PropTypes.string,
    meta : PropTypes.string,
    desc : PropTypes.string,
    joined : PropTypes.number,
    nikename : PropTypes.number.isRequired
}
export default class Card extends Component {
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
Card.propTypes = propTypes;