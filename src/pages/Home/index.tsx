import { Link } from 'react-router-dom';

import './home.css';

const Home = ()=>(
    <div className='home'>
        <div className='main-home-image'>
            <img src="/images/big_sur_big.jpg" />
            <div className='image-text-cont' >
                <div className='main-text-home'>
                  <div className='main-text-home-title'>
                  Something quite <strong><em>magical</em></strong> about visual information.
                  </div>
                  <div className='main-text-home-text'>
                    Developer and Data Visualization Engineer from California. Specializing in Building Apps, Data Visualizations and Data Driven Web Apps.
                  </div>
                  <div className='sub-text-home'>
                    <Link to='/work'>Work</Link> or <Link to='https://docs.google.com/document/d/1BE_2vCPxvHcG45s7CJixCnfJkG5uFMPkpvjyfU24xo0/edit?usp=sharing'>Resume</Link>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
)

export default Home;