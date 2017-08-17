import Item from 'components/Item';
import Footer from 'components/Footer';     

require('style/base.css')
require('style/index.css')

export default class App extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            todosData:[],
            ipuVal:'',
            view : "all"
        }
        this.tianjia = this.tianjia.bind(this)
        this.onDestroy = this.onDestroy.bind(this)
        this.clearcom = this.clearcom.bind(this)
        this.checkboxAll = this.checkboxAll.bind(this)
        this.onchecked = this.onchecked.bind(this)
        this.ipuchange = this.ipuchange.bind(this)
        this.changeview = this.changeview.bind(this)
        this.itemdown = this.itemdown.bind(this)
    }

    itemdown(todoaaa,val){
        let {todosData} = this.state
        todosData = todosData.map(elt=>{
            if( elt.id === todoaaa.id ){
                elt.value = val
            }
            return elt
        })
    }

    changeview (view){
        this.setState({
            view
        })
    }

    tianjia(ev){
        if (ev.keyCode !==13 ) return
        let {ipuVal,todosData} = this.state
        let value = ipuVal.trim()
        let todo = {}
        if (value == "") return
        
        todo.id = new Date().getTime()
        todo.value = value
        todo.hascompleted = false
        
        todosData.push(todo)
        this.setState({
            todosData,
            ipuVal:''
        })
    }

    ipuchange(ev){
        this.setState({
            ipuVal:ev.target.value
        })
    }

    checkboxAll( ev ){
        let {checked} = ev.target
        let {todosData} = this.state
        todosData = todosData.filter((elt) => {
           elt.hascompleted = checked
           return elt
        })
        this.setState({todosData})
    }

    onchecked(todo){
        let {todosData} = this.state
        todosData = todosData.filter((elt) => {
           if(elt.id === todo.id){
               elt.hascompleted = !elt.hascompleted
           }
            return elt
        })
        this.setState({todosData})
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
        let {
                tianjia,
                onDestroy,
                clearcom,
                checkboxAll,
                onchecked,
                ipuchange,
                changeview,
                itemdown
        } = this

        let {
                todosData,
                ipuVal,
                view
        } = this.state

        let items = null,
            footer = null,
            itermbox = null; 

        let totallength = todosData.length

        items = todosData.filter(elt => {
            if(elt.hascompleted ) totallength--
            switch (view){
                case "active" :
                    return !elt.hascompleted
                    break;
                case "completed" :
                    return elt.hascompleted
                    break;
                default:
                    return true
            }
        } )

        items = items.map((el,i)=>{
            
            return (
                <Item 
                    {... {
                       onDestroy,
                       todoaaa:el,
                       onchecked,
                       itemdown
                    }}
                    key ={i}
                />
            )
        })

        if( todosData.length ){
            itermbox = (
                <section className="main">
                    <input 
                            type="checkbox" 
                            className="toggle-all"
                            onChange = {checkboxAll}
                            checked={totallength === 0}
                    />
                    <ul className="todo-List">
                        {items}   
                    </ul> 
                </section> 
            )
            footer = (
                 <Footer
                    {...{
                        totallength,
                        showbtn:totallength < todosData.length,
                        clearcom,
                        view,
                        changeview
                    }}
                 /> 
            )

        }

        return (
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input  type="text" 
                            className="new-todo" 
                            onKeyDown={tianjia}
                            value={ipuVal}
                            onChange={ipuchange}
                    />
                </header>
                {itermbox}
                {footer}
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