/* eslint-disable no-unused-vars */
import React from 'react';

function Sec() {
    return (
        <>
            <div className='flex md:px-24  flex-col xl:flex-row '>
                <div className=' w-full lg:w-1/2  px-8 text-center '>
                    <div className='mt-10'>
                        <h1 className='font-semibold text-black text-2xl sm:text-4xl'>When in Doudt,pull it </h1>
                        <div className='mt-2 text-gray-700 text-sm sm:text-xl'>Feeling uncomfortable? Trust your gut. Pull the Top to start the LOUD siren and flashing strobe light, bringing all eyes on you. When you feel safe, reinsert the Top to deactivate the alarm.</div>
                    </div>
                    <div className='flex font-semibold mt-4 '>
                        <div>

                            <img src="https://www.shesbirdie.com/cdn/shop/files/icons_28b1a9dd-d742-4d62-b244-a0cfb30b68a9_800x.png?v=1698258748&em-format=avif" alt="" />
                        </div>
                    </div>
                    <button className='bg-[#1D4ED8] flex justify-center items-center font-bold text-white w-full py-3'>Shop</button>
                </div>
                <div className='w-full md:w-1/2 py-5 px-8 '>
                <video controls className='w-full'>
                    <source src="https://cdn.shopify.com/s/files/1/0259/5808/8792/files/Birdie_1.mp4?v=1626356708" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            
            </div>
        </>
    );
}

export default Sec;
