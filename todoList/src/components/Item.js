
let propTypes = {
    todoaaa:PT.object,
    onDestroy: PT.func,
    onchecked:PT.func,
    itemdown:PT.func
}

export default class Item extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            inEdit : false,
            ival:''
        }
        this.onEdit = this.onEdit.bind(this)
        this.onBlur = this.onBlur.bind(this)
        this.onEnd = this.onEnd.bind(this)
        this.down = this.down.bind(this)
        this.inpchange = this.inpchange.bind(this)
    }    

    inpchange(ev){
        this.setState({
            ival:ev.target.value
        })
    }

    onEdit (){
        let {value} = this.props.todoaaa
        this.setState({
            inEdit : true,
            ival : value
        })
        
    }

    down(){
        this.setState({
            inEdit : false
        })
        let {itemdown,todoaaa} = this.props
        itemdown(todoaaa,this.state.ival)
    }

    onBlur(){
        this.down()
    }

    onEnd(ev){
        if( ev.keyCode != 13 ) return
        this.down()
    }   
    
    render() {
        let {onEdit,onBlur,onEnd,inpchange} = this
        let {todoaaa,onDestroy,onchecked,itemdown} = this.props
        let { inEdit,ival } = this.state
        let itemName = ""
        if( inEdit ) {
            itemName += 'editing'
        }

        return (
            <li className={ itemName }>
                <div className="view">
                    <input 
                            type="checkbox" 
                            className="toggle"
                            checked={todoaaa.hascompleted}
                            onChange = { ev => onchecked(todoaaa) }
                    />
                    <label onDoubleClick = {onEdit}
                    >
                        {todoaaa.value}
                    </label>
                </div>
                <buttton className="destroy"
                    onClick = {ev => onDestroy(todoaaa)}
                ></buttton>
                <input 
                    type="text" 
                    className="edit"
                    value={ival}
                    onBlur = {onBlur}
                    onKeyDown = {onEnd}
                    onChange = {inpchange}
                />
            </li>
        );
    }
}

Item.propTypes = propTypes