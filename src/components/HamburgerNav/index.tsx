import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import  { ReactComponent as HamburgerSVG} from  '../../assets/icons/icons8-hamburger-menu.svg';

import "./hamburgerNav.css"

const HamburgerNav = () =>{
    let [isOpen, setIsOpen] = useState(false);
    return(  
        <>
        <div onClick={() => setIsOpen(true)} className="hamburger-button">
            <HamburgerSVG />
        </div>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <div className="flex gap-4">
              This is a test
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      </>
    )
}

export default HamburgerNav;