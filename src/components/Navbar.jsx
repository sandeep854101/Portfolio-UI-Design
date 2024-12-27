import React, { useState } from 'react'
import pic from "../../public/logo1.jpg"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Portfolio"
        },
        {
            id: 4,
            text: "Experience"
        },
        {
            id: 5,
            text: "Contact"
        },
    ]

    return (
        <>
            <div className='h-16 shadow-md fixed top-0 left-0 right-0 bg-white z-5'>
                <div className='flex justify-between w-[80%] mx-auto items-center h-16 '>
                    <div  className='flex space-x-2'>
                        <img src={pic} className='h-12 w-12 rounded-full' alt="" />
                        <h1 className='font-semibold text-x1 cursor-pointer'>Sandee<span className='text-green-500 text-2x1'>p</span>
                            <p className='text-sm'>Web Developer</p></h1>
                    </div>
                    {/* desktop navbar */}
                    <div>
                        <ul className='hidden md:flex space-x-8'>
                            {
                                navItems.map(({ id, text }) => (
                                    <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                                        <Link to={text}
                                            smooth={true}
                                            duration={500}
                                            offset={-70}
                                            activeClass="active"
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden cursor-pointer'>
                            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                        </div>
                    </div>
                </div>
                {/* mobile navbar */}
                {
                    menu && (
                        <div className='bg-white'>
                            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                                {
                                    navItems.map(({ id, text }) => (
                                        <li className='hover:scale-105 duration-200 cursor-pointer font-semibold' key={id}>
                                            <Link to={text}
                                            onClick={() => setMenu(!menu)}
                                            smooth={true}
                                            duration={500}
                                            offset={-70}
                                            activeClass="active"
                                        >
                                            {text}
                                        </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Navbar
