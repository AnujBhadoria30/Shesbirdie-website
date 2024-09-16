/* eslint-disable no-unused-vars */
import React from 'react'
import Carousel from './Carousal'

function Fivth() {
    return (
        <>
            <div className="md:px-24">

                <div className='text-center'>
                    <div className='font-semibold md:text-[50px] '> Trusted By 3,500,000+ Women </div>
                    <div className='text-gray-500 md:text-[20px]'> Hear what they have to say about Birdie! </div>
                </div>
                <div>
                    <Carousel />
                </div>
                <div className='md:flex  py-5 gap-4'>
                    <div className='text-center py-3 px-2 md:w-[450px] border border-blue-700 md:text-[20px] '>
                        “As someone who has been followed/stalked twice <br />(once in a grocery store and once on a run)<br /> <strong className='font-semibold text-black'>I have a sense of returned safety <br /> knowing I have my Birdie <br /> </strong> - here’s praying we all have it and ever need it.”
                        <h2 className='text-blue-800 font-bold'>Ashley B.| Verified Buyer</h2>
                    </div>
                    <div className='text-center py-3 px-2 md:w-[450px] border border-blue-700 md:text-[20px] '>
                        “As someone who has been followed/stalked twice <br />(once in a grocery store and once on a run)<br /> <strong className='font-semibold text-black'>I have a sense of returned safety <br /> knowing I have my Birdie <br /> </strong> - here’s praying we all have it and ever need it.”
                        <h2 className='text-blue-800 font-bold'>Coutney H.| Verified Buyer</h2>

                    </div>
                    <div className='text-center py-3 px-2 md:w-[450px] border border-blue-700 md:text-[20px] '>
                        “As someone who has been followed/stalked twice <br />(once in a grocery store and once on a run)<br /> <strong className='font-semibold text-black'>I have a sense of returned safety <br /> knowing I have my Birdie <br /> </strong> - here’s praying we all have it and ever need it.”
                        <h2 className='text-blue-800 font-bold'>Donna W.| Verified Buyer</h2>

                    </div>


                </div>
            </div>



        </>
    )
}

export default Fivth
