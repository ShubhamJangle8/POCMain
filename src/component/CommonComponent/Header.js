import React, { useState } from 'react'
import Button from './Button';
import DemandTrackerlogo from '../../img/AppLogo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    let Links = [
        { name: "Welcome Guest", link: "/", logoId: 'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
        { name: "Home", link: "/", logoId: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { name: "Logout", link: "/", logoId: 'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' }
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-[1]'>
            <div className='flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <img src={DemandTrackerlogo} alt="Logo" width="85" height="40" className="d-inline-block align-text-top" />
                    </span>
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-10 top-10 cursor-pointer md:hidden'>
                    {open ? <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>}
                </div>

                <div className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <div key={link.name} className='md:ml-8 text-xl md:my-0 my-7 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={link.logoId} />
                                </svg>
                                <Link href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</Link>
                            </div>


                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Header