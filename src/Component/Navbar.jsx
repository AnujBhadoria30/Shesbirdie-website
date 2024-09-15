/* eslint-disable no-unused-vars */
// Add this to your existing CSS or inline styles
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';
import { CiUser } from "react-icons/ci";
// import { IoIdCardOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { useSelector } from "react-redux";
import Card from './Card';

const absoluteStyles = {
    position: 'absolute',
    top: '150px',  // Adjust as needed
    left: '50%',
    transform: 'translateX(-50%)',  // Centers the element horizontally
    zIndex: 1000,  // Makes sure it stays on top of other elements
};

function Navbar() {
    const cardItem = useSelector((store) => store.card.item);

    const [toggle, setToggel] = useState(false);
    const [toggle2, setToggel2] = useState(false);
    const [toggle3, setToggel3] = useState(false);

    const handleChange = () => {
        setToggel(!toggle);
    };
    const toogle = () => {
        setToggel2(!toggle2);
    }

    const click=()=>{
        setToggel3(!toggle3)
    }
    return (
        <>
            <div className='flex justify-between items-center border p-4 md:p-5'>
                <div className='md:hidden'><CiMenuBurger /></div>
                <div className='flex-shrink-0'>
                    <img
                        src="https://www.shesbirdie.com/cdn/shop/files/birdie-logo.png?v=1690897129&%3Bwidth=225&em-format=avif&em-width=225"
                        alt="Logo"
                        className='w-24 md:w-32 lg:w-40 h-auto'
                    />
                </div>
                <div className="justify-center items-center hidden sm:block text-xs md:text-sm">
                    <ul className="flex gap-4 md:gap-6 lg:gap-8 text-center font-serif">
                        <li className='flex items-center text-xs md:text-sm'>SHOP <IoIosArrowDown className='mt-1' onClick={handleChange} /></li>
                        <li className='text-xs md:text-sm'>ABOUT US</li>
                        <li className='text-xs md:text-sm'>BULK ORDERS</li>
                        <li className='text-xs md:text-sm'>HOW IT WORKS</li>
                    </ul>
                </div>
                <div className="flex items-center text-xs md:text-lg" >
                    <div className='p-1 md:p-2 text-lg md:text-xl'><CiUser /></div>
                    <div className='text-sm relative w-[150px] text-center flex-col justify-center items-center '>
                        Card
                        <span
                            className=' w-16 ml-10 text-sm font-mono text-pretty border-2  flex justify-center items-center shadow-xl cursor-pointer rounded-full '
                            onClick={click}
                        >
                            {cardItem.length}
                        </span>
                        <div  className='absolute w-full flex flex-wrap mr-12 p-2 space-y-2 border-2 '>

                        {toggle3 ? <Card /> : ""}
                        </div>

                    </div>
                </div>
            </div>
            {toggle ? (
                <div style={absoluteStyles}>
                    <div className='flex bg-white py-3 px-8 border-2'>
                        <div className='border-2 border-gray-500 p-2 flex w-[350px] h-[250px] rounded-lg'>
                            <div className='px-2 w-[240px]'>
                                <h2 className='font-semibold'>Shop birdie</h2>
                                <p className="text-sm font-thin">Rating ⭐⭐⭐⭐</p>
                                <p className="text-sm font-sans mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit architecto reprehenderit!</p>
                            </div>
                            <div className='p-2'>
                                <img src="https://www.shesbirdie.com/cdn/shop/files/cyan_68a52f3d-ed67-4091-9915-4c9f73f76d05.jpg?v=1710253123&%3Bwidth=823&em-format=avif&em-width=823" alt="" className='h-24 w-20' />
                            </div>
                        </div>
                        <div className='border-2 border-gray-500 p-2 flex w-[350px] h-[250px] rounded-lg'>
                            <div className='px-2 w-[240px]'>
                                <h2 className='font-semibold'>Shop birdie</h2>
                                <p className="text-sm font-thin">Rating ⭐⭐⭐⭐</p>
                                <p className="text-sm font-sans mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit architecto reprehenderit!</p>
                            </div>
                            <div className='p-2'>
                                <img src="https://www.shesbirdie.com/cdn/shop/files/cyan_68a52f3d-ed67-4091-9915-4c9f73f76d05.jpg?v=1710253123&%3Bwidth=823&em-format=avif&em-width=823" alt="" className='h-24 w-20' />
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Navbar;
