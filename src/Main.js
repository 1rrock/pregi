import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div className="container">
            <ul>
                <li><Link to="/editor1">layout1</Link></li>
                <li><Link to="/editor2">layout2</Link></li>
                <li><Link to="/editor3">layout3</Link></li>
                <li><Link to="/editor4">layout4</Link></li>
                <li><Link to="/editor5">layout5</Link></li>
                <li><Link to="/editor6">layout6</Link></li>
            </ul>
        </div>
    )
}

export default Main;