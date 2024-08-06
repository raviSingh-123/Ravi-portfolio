import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";



function Home() {
    return (
        <>
            <div name="Home"className='max-w-screen-2xl mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a</h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped
                                className="text-red-700 font-bold"
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />

                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate beatae laborum atque molestiae officia nisi aliquid at similique nesciunt perspiciatis, est quaerat dolorum porro ipsa itaque quisquam exercitationem aperiam molestias?</p>
                        <br />
                        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Available on</h1>
                                <ul className='flex space-x-5'>
                                    <li><a href='https://www.facebook.com/profile.php?id=100043586821806' target='_blank'>
                                        <FaFacebookSquare className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li><a href='https://www.linkedin.com/in/ravikant-singh-b16622258/' target='_blank'>
                                        <FaLinkedin className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li><a href='https://www.instagram.com/_rajput_ravikant342/' target='_blank'>
                                        <FaInstagramSquare className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li><a href='https://github.com/raviSingh-123' target='_blank'>
                                        <FaGithubSquare className='text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently working on</h1>
                                <div className='flex space-x-5'>
                                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]  cursor-pointer' />
                                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]  cursor-pointer' />
                                    <FaReact className='text-xl  md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]  cursor-pointer' />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-48 md:mt-20 order-1 md:order-2 mt-8'>
                     <img className='md:h-[450px] md:w-[450px] rounded-full mx-auto' src="./images/ravi.jpg" alt="img" />
                    </div>
                </div>
            </div>
            <hr/>
        </>

    )
}

export default Home
