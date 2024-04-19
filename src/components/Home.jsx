import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

import pic from '../../public/logo.jpg'


const Home = () => {
    return (
        <>
            <div name="Home" className='max-w-screen-2x1 container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-4xl space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome in My Feed</span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a</h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped
                                className='text-red-700 font-bold'
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text:justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, deserunt sed praesentium quos dolores odio dicta corporis aut quia voluptates laborum quae! Error est iure vel, veritatis ut velit quae nemo quibusdam deleniti perferendis, impedit eaque, ducimus a sunt voluptatem omnis dolores incidunt quisquam maxime dolorem molestiae. Repudiandae, repellendus porro?</p>
                        <br />
                        {/* social media icons */}
                        <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between items-center'>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Avallable on</h1>
                                <ul className='flex space-x-5'>
                                    <li><a href="###" target='-blank'><FaFacebookSquare className='text-xl md:text-3xl hover:scale-110 duration-200  cursor-pointer' /></a></li>
                                    <li><a href="###" target='-blank'><FaLinkedin className='text-xl md:text-3xl hover:scale-110 duration-200  cursor-pointer' /></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCzw0LxMd4yvjSSjVmFh9ylg" target='-blank'><FaYoutube className='text-xl md:text-3xl hover:scale-110 duration-200  cursor-pointer' /></a></li>
                                    <li><a href="###" target='-blank'><FaTelegram className='text-xl md:text-3xl hover:scale-110 duration-200  cursor-pointer' /></a></li>
                                </ul>
                            </div>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently working on</h1>
                                <ul className='flex space-x-5'>
                                    <li><SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' /></li>
                                    <li><SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' /></li>
                                    <li><FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' /></li>
                                    <li><FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer' /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-48 mt-8 md:mt-20 order-1'>
                        <img src={pic} className='rounded-full md:w-[450px] md:h-[450px]' />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Home
