import React from 'react'
import ReactDOM from 'react-dom'
require('../Semantic-UI/dist/semantic.css')
require('./common/style/main.css')

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

class Img extends React.Component {
    render() {
        return (
            <img className="img" src={require('./common/img/index-new01-CN.png')} />
        );
    }
}
       
ReactDOM.render(
    <div className="ui container">
        <div className="ui dividing"></div>
        <Nav/>
        <Img/>
        <Nav/>
    </div>,
    document.getElementById("root")
);

if(module.hot){
    module.hot.accept()
}