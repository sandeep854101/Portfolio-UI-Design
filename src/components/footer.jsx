import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
function Footer() {
    return (
        <>
            <hr />
            <footer className='py-12'>
                <div className='max-w-screen-2x1 container mx-auto px-4 md:px-20 '>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex space-x-4'>
                            <a href="https://www.facebook.com/profile.php?id=100056538092127" target="_blank"><FaFacebook className='text-xl md:text-3xl hover:scale-110 duration-200  cursor-pointer'/></a>
                            <a href="https://www.instagram.com/sandeep854101/" target="_blank"><FaInstagram className='text-xl md:text-3xl hover:scale-110 duration-200  cursor-pointer'/></a>
                            <a href="https://www.linkedin.com/in/sandeep-kumar-031782284/" target="_blank"><FaLinkedin className='text-xl md:text-3xl hover:scale-110 duration-200  cursor-pointer'/></a>
                            <a href="https://www.youtube.com/channel/UCmkh9CqlvV4ds-vLNgUZLnA" target='-blank'><FaYoutube className='text-xl md:text-3xl hover:scale-110 duration-200  cursor-pointer' /></a>
                        </div>
                        <div className='mt-8 border-t border-black-700 pt-8 flex flex-col items-center'>
                            <p className='text-sm '>&copy; 2024 Your Company. All rights reversed.  </p>
                            <p className='text-sm '>Supportive Partner 💖 Sandeep Kumar</p>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer
