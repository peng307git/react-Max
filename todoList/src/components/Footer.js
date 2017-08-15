

export default class Footer extends React.Component {
    render() {
        let {clear,todos} = this.props
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{0}</strong>
                    <span>item left</span>
                </span>
                <ul className="filters">
                    <li>
                        <a href="#/all">All</a>
                    </li>
                    <li>
                        <a href="#/active">Active</a>
                    </li>
                    <li>
                        <a href="#/completed">completed</a>
                    </li>
                </ul>
                <button 
                    className="clear-completed"
                   onClick = { ()=>{ clear() } }
                >
                    clear all completed
                </button>
            </footer>
        );
    }
}