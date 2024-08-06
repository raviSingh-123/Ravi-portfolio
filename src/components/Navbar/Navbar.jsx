import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";


function Navbar() {
    const [menu, setMenu] = useState(false)
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
            text: "Experiance"
        },
        {
            id: 5,
            text: "Contact"
        }
    ]
    return (
        <>
            <div className='max-w-screen-2xl mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2'>
                        <img className='h-12 w-12 rounded-full' src='https://img.freepik.com/premium-vector/screen-monitor-programmin-code-logo-no-background-icon_1076610-27652.jpg?size=626&ext=jpg' alt='logo' />
                        <h1 className='text-xl font-semibold cursor-pointer '>Rav<span className='text-green-500 text-2xl'>i</span>
                            <p className='text-sm'>Web Developer</p>
                        </h1>
                    </div>
                    <div>
                        <ul className='hidden md:flex space-x-8'>
                            {
                                navItems.map(({ id, text }) => (
                                    <li className='hover:scale-105 duration-200 cursor-pointer' key={id}>
                                        <Link
                                            to={text}
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
                        <div onClick={() => setMenu(!menu)} className='md:hidden'> {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
                        </div>

                    </div>
                </div>
                {menu && (<div className='bg-white'>
                    <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                        {
                            navItems.map(({ id, text }) => (
                                <li
                                className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                                key={id}
                              >
                                <Link
                                  onClick={() => setMenu(!menu)}
                                  to={text}
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
                </div>)}

            </div>
        </>
    )
}

export default Navbar
