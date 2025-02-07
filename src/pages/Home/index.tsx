import { Link } from 'react-router-dom';
import Explorer from '../../components/Explorer';
import Bio from '../../components/Bio';
// @ts-ignore
import explorerData from '../../components/Explorer/explorer.json';
import bioData from '../../components/Bio/bio.json';

import './home.css';

const Home = ()=>(
    <div className='home'>
        <div className='main-home-image'>
            <img height="1099.2" width="1648" src="/images/big_sur_big.jpg" />
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
                <div className='bouncing-arrow'>&dArr;</div>
            </div>
        </div>
          <div className = 'explorer-cont'>
            <Explorer {...explorerData} />
          </div>
          <div className = 'bio-cont'>
            <Bio {...bioData.bio_data} />
          </div>
    </div>
)

export default Home;