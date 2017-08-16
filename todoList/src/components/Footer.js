
let propTypes = {
    totallength:PT.number,
    showbtn: PT.bool,
    clearcom:PT.func,
    changeview:PT.func,
    view:PT.oneOf(['all','active','completed'])
}
export default class Footer extends React.Component {
    render() {
        let { 
                totallength,
                showbtn,
                clearcom,
                changeview,
                view
        } = this.props

        let com = null
        if(showbtn){
            com = (
                <button 
                    className="clear-completed"
                    onClick = {clearcom}
                >
                    删除已选中
                </button>
            )
        }
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{totallength}</strong>
                    <span>个未选中</span>
                </span>
                <ul className="filters">
                    <li>
                        <a  href="#/all"
                            className={ view === 'all' ? 'selected' : '' }
                            onClick= { ev => changeview('all') }
                        >所有</a>
                    </li>
                    <li>
                        <a  href="#/active"
                            className={ view === 'active' ? 'selected' : '' }
                            onClick= { ev => changeview('active') }
                        >未选中</a>
                    </li>
                    <li>
                        <a  href="#/completed"
                            className={ view === 'completed' ? 'selected' : '' }
                            onClick= { ev => changeview('completed') }
                        >已选中</a>
                    </li>
                </ul>
                {com}
            </footer>
        );
    }
}
Footer.propTypes = propTypes