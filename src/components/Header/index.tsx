import { Link } from 'react-router-dom';

import './header.css';

type HeaderProps = {
    navigation:string;
}

const Header = ({navigation = ""}:HeaderProps)=>{
    const homeClass = navigation === "/" ? "activeNow" : "";
    const workClass = navigation.match(/^\/work/) ? "activeNow" : "";
    const contactClass = navigation.match(/^\/contact/) ? "activeNow" : "";

    const black = homeClass != 'activeNow'?"black":"";

    return(
            <div className={`main-header ${black}`}>
                <strong><span className='main-name '>Nathan <span className='name-last'>Harris</span></span></strong>
                <span className={`main-links ${black}`}>
                <Link className={homeClass} to='/'>Home</Link>
                <Link className={workClass} to='/work'>Work</Link>
                <Link to="https://docs.google.com/document/d/1BE_2vCPxvHcG45s7CJixCnfJkG5uFMPkpvjyfU24xo0/edit?usp=sharing">Resume</Link>
                <a className={contactClass} href='mailto:nharrisanalyst@gmail.com'>Contact</a>

                </span>
            </div>
    )
    }

export default Header;