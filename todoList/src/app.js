import Item from 'components/Item';
import Footer from 'components/Footer';     

require('style/base.css')
require('style/index.css')




export default class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            todosData:[]
        }
        this.tianjia = this.tianjia.bind(this)
        this.onDestroy = this.onDestroy.bind(this)
        this.clearcom = this.clearcom.bind(this)
    }

    tianjia(ev){
        if (ev.keyCode !==13 ) return
        
        let value = ev.target.value.trim()

        if (value == "") {
            return
        }

        let todo = {}
        todo.id = new Date().getTime()
        todo.value = value
        todo.hascompleted = false
        let {todosData} = this.state
        todosData.push(todo)
        this.setState({todosData})
        ev.target.value =""
    }

    onDestroy(todo){
        let {todosData} = this.state
        todosData = todosData.filter((elt) => {
           return elt.id !== todo.id
        })
        this.setState({todosData})
    }

    clearcom(){
        let {todosData} = this.state
        todosData = todosData.filter((elt) => {
           return !elt.hascompleted 
        })
        this.setState({todosData})
    }

    render() {
        let {tianjia,onDestroy,clear} = this
        let {todosData} = this.state
        let items = null
        items = todosData.map((el,i)=>{
            return (
                <Item 
                    {... {
                       onDestroy,
                       todo:el 
                    }}
                    key ={i}
                />
            )
        })

        return (
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input type="text" className="new-todo" onKeyDown={tianjia}/>
                </header>
                <section className="main">
                    <input type="checkbox" className="toggle-all"/>
                    <ul className="todo-List">
                        {items}   
                    </ul> 
                </section> 
                <Footer/> 
                    
            </div>
        );
    }
}



ReactDOM.render(
        <App/>,
        document.getElementById("root")
 );

if (module.hot) {
    module.hot.accept()
}