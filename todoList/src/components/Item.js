
let propTypes = {
    todo:PT.object,
    onDestroy: PT.func
}

export default class Item extends React.Component {

    constructor(props){
        super(props)
    }
    
    render() {

        let {todo,onDestroy} = this.props

        return (
            <li>
                <div className="view">
                    <input type="checkbox" className="toggle"/>
                    <label htmlFor="">
                        {todo.value}
                    </label>
                </div>
                <buttton className="destroy"
                    onClick = {ev => onDestroy(todo)}
                ></buttton>
                <input type="text" className="edit"/>
            </li>
        );
    }
}

Item.propTypes = propTypes