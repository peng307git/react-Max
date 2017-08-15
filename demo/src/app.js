import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Nav from 'nav/Nav.js'
import CardWarp from 'cardWarp/CardWarp.js'
import Home from 'home/Home.js';
require('../Semantic-UI/dist/semantic.css')
// require('style/main.css')


let data = [
    {
        imgSrc : require('img/index-new01-CN.png'),
        name : "joel-1",
        meta : "cowrmeat",
        desc : 'joel-1 is name peng',
        joined : 2016,
        nikename : 666
    },
    {
        imgSrc : require('img/index-new02-CN.png'),
        name : "joel-2",
        meta : "cowrmeat",
        desc : 'joel-1 is name peng',
        joined : 2017,
        nikename : 88
    },
    {
        imgSrc : require('img/index-new03-CN.png'),
        name : "joel-3",
        meta : "cowrmeat",
        desc : 'joel-1 is name peng',
        joined : 2018,
        nikename : 98
    },
    {
        imgSrc : require('img/index-new04-CN.png'),
        name : "joel-4",
        meta : "cowrmeat",
        desc : 'joel-1 is name peng',
        joined : 2019,
        nikename : 9
    }
]
class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            view : 'home'
        }

        this.changeview = this.changeview.bind(this)
    }

    changeview(view){
        this.setState({
            view
        })
    }

   componentDidUpdate () {
        console.log("app   更新好了");
    }

     componentDidMount() {
        console.log("app  渲染完成");
    }
    
    

    render(){
        let {view} = this.state

        let viewComp = null

        switch(view){
            case  "list":
                viewComp = <CardWarp data={data}/>
                break;
            case  'home':
                viewComp = <Home/>
            default :
        }

        return(
            <div className="ui container">
                <div className="ui dividing"></div>
                <Nav changeview = {this.changeview}/>
                {viewComp}
            </div>
        )
    }
}



ReactDOM.render(
    <App/>,
    document.getElementById("root")
);

if(module.hot){
    module.hot.accept()
}