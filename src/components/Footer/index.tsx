import  { ReactComponent as SubstackSVG}  from './linkSVG/substack.svg';
import  { ReactComponent as GithubSVG}  from './linkSVG/github-mark.svg';

import "./footer.css";

const Footer =()=>(
    <div className='footer-main'>
        <div className='footer-links'>
            <a href="https://whatiswhat.substack.com/">
            <SubstackSVG />
            </a>
            <a href="https://github.com/nharrisanalyst/">
            <GithubSVG />
            </a>
            </div>
            <div>
               <span><a href="mailto:nharrisanalyst@gmail.com">Contact   </a>  &#169;Nathan Harris</span> 
            </div>

    </div>
)

export default Footer;