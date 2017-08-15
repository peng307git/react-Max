
let propTypes = {
    todoaaa:PT.object,
    onDestroy: PT.func,
    checkboxs:PT.func
}

export default class Item extends React.Component {

    
    
    render() {

        let {todoaaa,onDestroy,checkboxs} = this.props
        return (
            <li>
                <div className="view">
                    <input 
                            type="checkbox" 
                            className="toggle"
                            onChange = {checkboxs  }
                    />
                    <label htmlFor="">
                        {todoaaa.value}
                    </label>
                </div>
                <buttton className="destroy"
                    onClick = {ev => onDestroy(todoaaa)}
                ></buttton>
                <input type="text" className="edit"/>
            </li>
        );
    }
}

Item.propTypes = propTypes