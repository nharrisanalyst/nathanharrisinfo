import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import  { ReactComponent as HamburgerSVG} from  '../../assets/icons/icons8-hamburger-menu.svg';
import { Link } from 'react-router-dom';

import "./hamburgerNav.css"

const HamburgerNav = () =>{
    const [isOpen, setIsOpen] = useState(false);



    return(  
        <div onClick={() => {setIsOpen(true)}} className="hamburger-button">
            <HamburgerSVG />
        </div>
    )
}

export default HamburgerNav;