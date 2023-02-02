import React from 'react';
import Image from 'next/image';
import ProfileImage from "../public/images/manoj.jpg";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';

import { useTheme } from 'next-themes'

const Sidebar = () => {
    const { theme, setTheme } = useTheme();
    const handleTheme = () => {
        setTheme(theme === 'light'?'dark':'light')
    }
    return (
        <div>
            <Image
                src={ProfileImage}
                alt="profile"
                className='w-32 h-32 mx-auto rounded-full'
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
                <span className='text-green'>Manoj</span> Rai
            </h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500'>Web Developer</p>
            <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500' > <GiTie className='w-6 h-6' /> Download Resume</a>
            
            <div className='flex justify-around w-9/12 mx-auto my-5 text-green md:w-full'>
                <a href="">
                    <AiFillYoutube className='w-8 h-8 cursor-pointer' />
                </a>
                <a href="">
                    <AiFillGithub className='w-8 h-8 cursor-pointer' />
                </a>
                <a href="">
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
                </a>
            </div>

            <div className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500' style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
                <div className='flex items-center justify-center space-x-2'>
                    <GoLocation />
                    <span>Kathmandu, Nepal</span>
                </div>
                <p className='my-2'>manoj.kiranti@gmail.com</p>
                <p className='my-2'>+9779804971130a</p>
            </div>
            <button className="w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
                onClick={() => window.open('mailto:manoj.kiranti@gmail.com')}
            >
                Email Me
            </button>
            <button 
                onClick={handleTheme}
                className="w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none">
                Toggle Theme
            </button>
        </div>
    )
}

export default Sidebar