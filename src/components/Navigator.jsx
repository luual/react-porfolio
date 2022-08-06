import { Link } from 'react-router-dom';
import '../assets/css/navigator.css'

export default Navigator = () => {
    return (
        <div className='Navigator'>
            <nav>
                <li>
                    <a href="#home" tabIndex="1">Home</a>
                    <a href="#Charts" tabIndex="1">Charts</a>
                    <a href="#github" tabIndex="2">Github</a>
                    <a href="#About">About</a>
                    <Link to="/Playground">Playground</Link>
                </li>
            </nav>
        </div>
    )
}