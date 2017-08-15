import React, { Component } from 'react';

class Nav extends React.Component{
    render(){
        let {changeview} = this.props
        return(
            <div className="ui menu">
                <div className="header item">left</div>
                <div 
                    className="item"
                    onClick = { ()=> { changeview('home') } }
                >home</div>
                <div 
                    className="item"
                    onClick = { ()=>{ changeview('list') } }
                >list</div>
            </div>
        )
    }
}

export default Nav;