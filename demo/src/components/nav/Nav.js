import React, { Component } from 'react';

class Nav extends React.Component{
    render(){
        return(
            <div className="ui menu">
                <div className="header item">left</div>
                <div className="item">home</div>
                <div className="item">right</div>
            </div>
        )
    }
}

export default Nav;