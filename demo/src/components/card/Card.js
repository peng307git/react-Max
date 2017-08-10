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

    constructor(props){   //使用回掉函数 在这里绑定this
        super(props)
        this.state = {
            isHeaderON : false,
            year :props.joined
        }
        this.hasclick = this.hasclick.bind(this)  
        this.yearAdd = this.yearAdd.bind(this) 
    }

    yearAdd (){
        let {year} = this.state
        this.setState({
            year : year + 10
        })
        this.hasclick()
    }

    hasclick(){
        let {isHeaderON} = this.state
        isHeaderON = !isHeaderON
        this.setState({isHeaderON})
    }

    render() {
        let {imgSrc ,name,meta,desc,joined,nikename} = this.props
        let {isHeaderON,year} = this.state
        let headerhass = isHeaderON ? "" : "empty" 
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
                    <span 
                        className="right floated"
                        onClick = { this.yearAdd }
                    >joel in {year}</span>
                    <span>
                        <i 
                            className = {`${headerhass} heart icon`}
                            onClick = { this.hasclick }
                        ></i>
                        {nikename} nike
                    </span>
                </div>
                
            </div>
        );
    }
}
Card.propTypes = propTypes;