import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
    return(
        <div className='home'>
            <div className='home__links'>
                <h1>MOVIES <span>CRUD</span></h1>
                <div className='home__routes'>
                    <Link to="/crud">
                        Manage registry
                    </Link>
                </div>
            </div>
        </div>
    );
}
