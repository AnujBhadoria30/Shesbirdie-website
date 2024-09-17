/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CiUser } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { useSelector } from "react-redux";
import Card from './Card';

const absoluteStyles = {
    position: 'absolute',
    top: '150px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,  
};

function Navbar() {
    const cardItem = useSelector((store) => store.card.item);
    console.log("CheckOut", cardItem);

    const [toggle, setToggel] = useState(false);
    const [toggle2, setToggel2] = useState(false);
    const [toggle3, setToggel3] = useState(false);
    const [toggle4, setToggel4] = useState(false); // State for card dropdown

    const handleChange = () => {
        setToggel(!toggle);
    };
    const toggleDropdown = () => {
        setToggel4(!toggle4); // Toggle card dropdown
    };

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
                <div className="flex items-center text-xs md:text-lg">
                    <div className='p-1 text-lg md:text-xl'><CiUser /></div>
                    <div className='text-sm relative w-[150px] text-center flex-col justify-center items-center'>
                        <button className='shadow-xl border-2 rounded-lg' onClick={toggleDropdown}>
                            <div className='px-2'>
                                Card
                                <h1>{cardItem.length}</h1>
                            </div>
                        </button>
                        {
                            toggle4 && cardItem.length > 0 ? ( 
                                <div className='absolute w-full flex flex-wrap mr-12 p-2 space-y-2 bg-white shadow-xl rounded-lg'>
                                    {cardItem.map((item, index) => (
                                        <img
                                            key={index}
                                            src={item}
                                            alt={`Image ${index}`}
                                            className="w-16 h-16 rounded-full mx-2"
                                        />
                                    ))}
                                </div>
                            ) : null
                        }
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
    