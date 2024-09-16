/* eslint-disable no-unused-vars */
import React from 'react'

function Fourth() {
  return (
    <>
    <div className='flex md:px-24  flex-col xl:flex-row  '>
    <div className=' w-full lg:w-1/2  px-8 text-center space-y-5'>
    <div className='mt-28 '>
        <h2 className='font-semibold md:text-3xl text-start'>How we Stack Up</h2>
        <h3 className='text-start md:text-2xl font-serif text-gray-700'>Birdie takes the lead when stacked against other self-defense tools, offering ease of use, a non-violent approach, and more.</h3>
    </div>
    <div className="text-white bg-[#1D4ED8] p-2 font-bold ">Shop Now</div>
    <div>
        <img src="https://www.shesbirdie.com/cdn/shop/files/optional_800x.png?v=1698258275&em-format=avif" alt="" />
    </div>
    </div>
    <div className=' w-full lg:w-1/2  px-8 text-center  mt-5'>
    <img src="https://www.shesbirdie.com/cdn/shop/files/birdie-chart-new.png?crop=center&height=620&v=1698247299&width=620&em-format=avif" alt="" />
    </div>
  </div>
    </>
  )
}

export default Fourth
