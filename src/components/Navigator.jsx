import { Link } from 'react-router-dom';
import '../assets/css/navigator.css'

export default Navigator = () => {
    return (
        <div className='Navigator'>
            <h1>Navigator</h1>
            <nav>
                <li>
                    <a href="#Charts">Charts</a>
                    <a href="#github">Github</a>
                    <a href="#About">About</a>
                    <Link to="/Playground">Playground</Link>
                </li>
            </nav>
        </div>
    )
}