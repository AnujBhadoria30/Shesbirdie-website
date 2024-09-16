/* eslint-disable no-unused-vars */
import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { BsTiktok } from "react-icons/bs";
function Footer() {
  return (
    <>
        <div className='bg-[#1D4ED8]  sm:flex justify-between space-y-10 px-5 md:px-20 '>
         <div className='space-y-8 p-5'>
         <div className=''>
<img src="https://www.shesbirdie.com/cdn/shop/files/birdie-logo_3a6b12d5-3cd8-400b-979d-c5e91a4d19e9.png?v=1697467493&%3Bwidth=1100&em-format=avif&em-width=1100" alt="" className='h-16 '/>

            </div>
            <div className='flex gap-5'>
                <div><FaInstagram className='text-white'/></div>
                <div><BsTiktok className='text-white' /></div>
            </div>
         </div>
         <div className=' text-white space-y-2 font-semibold   flex-col justify-start'> 
            <h1 className='font-bold'>Shop</h1>
            <h2>SHOP</h2>
            <h2>ABOUT</h2>
            <h2>ABOUT US</h2>
            <h2>WHOLESALE</h2>
            <h2>BULK ORDER</h2>
            <h2>HOW IT WORKDS</h2>
         </div>
          <div className=' text-white space-y-2 font-semibold '> 
            <h1 className='font-bold'>HELP</h1>
            <h2>RETURN</h2>
            <h2>CONTACT US</h2>
            <h2>FAQS</h2>
            <h2>AMBASSADOR PROGRAM</h2>
            <h2>DOWNLOAD BIRDE+ PRODUCT MANUAL</h2>
            <h2>PRIVACY PROTECT</h2>
            <h2>RETURN  POLICY</h2>
            <h2>TERMS AND CONDITION </h2>
            <h2>SHIPPING POLICY</h2>

         </div>

      
      </div>
    
    
    </>
  )

}

export default Footer
