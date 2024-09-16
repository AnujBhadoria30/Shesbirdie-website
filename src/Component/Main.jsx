/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CiDeliveryTruck } from "react-icons/ci";
import { FaAngleDown } from 'react-icons/fa';
import Sec from './Sec';
import Fourth from "./Fourth"
import { useDispatch } from "react-redux";
import Third from './Third';
import { PiStarThin } from "react-icons/pi";

import { addItem } from '../utils/cardslice';
import { removeItem } from '../utils/cardslice';
import Fivth from './Fivth';
import Footer from './Footer';

function Main() {
    const [showProducts, setShowProducts] = useState(true);
    const [showButtons, setShowButtons] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [packSize, setPackSize] = useState(5);
    const [isLocationRight, setIsLocationRight] = useState(false);
    const [isLocationBgBlue, setIsLocationBgBlue] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);


    const toggleContent = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const dispatch = useDispatch()
    const handleButtonClick = (size) => {
        setShowProducts(false);
        setShowButtons(true);
        setPackSize(size);

    };
    // dispatch(addItem());
    const handleBackClick = () => {
        setShowProducts(true);
        setShowButtons(false);
        setSelectedImages([]);
    };
    const handleAddImage = (imageUrl) => {
        if (selectedImages.length < packSize) {
            dispatch(addItem(imageUrl))
            setSelectedImages([...selectedImages, imageUrl]);
        }
    };

    const handleRemoveImage = (index) => {
        const updatedImages = selectedImages.filter((_, i) => i !== index);
        setSelectedImages(updatedImages);

        dispatch(removeItem(index));
    };

    const toggleLocationPosition = () => {
        setIsLocationRight(!isLocationRight);
        setIsLocationBgBlue(!isLocationBgBlue);
    };
    const items = [
        "https://www.shesbirdie.com/cdn/shop/files/cyan_68a52f3d-ed67-4091-9915-4c9f73f76d05_100x.jpg?v=1710253123",
        "https://www.shesbirdie.com/cdn/shop/files/black_004a4cbe-ec66-41e9-a215-5d1cab651da7_100x.jpg?v=1710253122",
        "https://www.shesbirdie.com/cdn/shop/files/coral_5705fa3c-67fe-4be7-9be7-71d5c6428c9c_100x.jpg?v=1710253123",
        "https://www.shesbirdie.com/cdn/shop/files/rose-gold_e60ee125-d8d9-4a51-b844-58f748bbd7a6_100x.jpg?v=1710253125",
        "https://www.shesbirdie.com/cdn/shop/files/indigo_6fa235ce-9f9f-496e-936f-df5ea9c34fde_100x.jpg?v=1710253125",
        "https://www.shesbirdie.com/cdn/shop/files/purple_743565ea-b57c-4223-9ab3-454e5b8fa263_100x.jpg?v=1710253123",
        "https://www.shesbirdie.com/cdn/shop/files/mblue_ca1d8126-fa92-4cee-8421-117c8565f9f2_100x.jpg?v=1710253124",
        "https://www.shesbirdie.com/cdn/shop/files/cyan_68a52f3d-ed67-4091-9915-4c9f73f76d05_100x.jpg?v=1710253123",
        "https://www.shesbirdie.com/cdn/shop/files/purple_743565ea-b57c-4223-9ab3-454e5b8fa263_100x.jpg?v=1710253123",
    ];

    const imgs = [
        "https://www.shesbirdie.com/cdn/shop/files/cyan_68a52f3d-ed67-4091-9915-4c9f73f76d05.jpg?v=1710253123&%3Bwidth=104&em-format=avif&em-width=104",
        "https://www.shesbirdie.com/cdn/shop/files/lemon_744e1f31-aebd-4396-9135-791bc3dc8e42.jpg?v=1710253123&%3Bwidth=104&em-format=avif&em-width=104",
        "https://www.shesbirdie.com/cdn/shop/files/coconut_2f8f107c-a82f-4ce8-a5cd-1c3368854125.jpg?v=1710253123&%3Bwidth=104&em-format=avif&em-width=104",
        "https://www.shesbirdie.com/cdn/shop/files/leopard_36ad1b70-c45c-46bf-8d15-1e6655cbd145.jpg?v=1710253124&%3Bwidth=104&em-format=avif&em-width=104",
        "https://www.shesbirdie.com/cdn/shop/files/pdp-image-1_5f8bb3e3-df74-4e7a-8b49-2615d415d2b5.jpg?v=1710253124&%3Bwidth=104&em-format=avif&em-width=104",
        "https://www.shesbirdie.com/cdn/shop/files/pdp-image-2_0027effd-87cb-4fa9-a586-bb028b193e37.jpg?v=1710253124&%3Bwidth=104&em-format=avif&em-width=104",
        "https://www.shesbirdie.com/cdn/shop/files/pdp-image-3_96066cc8-5a91-4556-b6b0-5ca0d1c42e10.jpg?v=1710253124&%3Bwidth=104&em-format=avif&em-width=104",
        "https://www.shesbirdie.com/cdn/shop/files/pdp-image-4_9272dc41-0adc-420b-9cb4-a54467bed393.jpg?v=1710253124&%3Bwidth=104&em-format=avif&em-width=104",
        "https://www.shesbirdie.com/cdn/shop/files/pdp-image-5_04f68f23-1f0f-4562-9228-d244bfcc68db.jpg?v=1710253124&%3Bwidth=104&em-format=avif&em-width=104",
    ];

    const it = [
        { title: 'Item 1', content: 'Content for item 1' },
        { title: 'Item 2', content: 'Content for item 2' },
        { title: 'Item 3', content: 'Content for item 3' },
    ];
    const colors = [
        "#9FE2EC", "#373836", "#EE5B4D", "#E7B8AA", "#293691", "#D691FA", "#FFFFFF", "#FF69B4", "#D0B9F2"
    ];


    const questions = [
        {
            question: 'What`s included',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quaerat eveniet provident aperiam asperiores quidem vitae laborum fuga. Deserunt in nam debitis similique, magni ducimus. Ipsum aliquam exercitationem tempora?',
        },
        {
            question: 'Watch Birdie in Action',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quaerat eveniet provident aperiam asperiores quidem vitae laborum fuga. Deserunt in nam debitis similique, magni ducimus. Ipsum aliquam exercitationem tempora?',
        },
        {
            question: 'Shipping & Returns',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eligendi quaerat eveniet provident aperiam asperiores quidem vitae laborum fuga. Deserunt in nam debitis similique, magni ducimus. Ipsum aliquam exercitationem tempora?',
        },
    ];

    return (
        <>
            <div className='flex md:px-28 py-2 flex-col xl:flex-row '>
                <div>
                    <img
                        src="https://www.shesbirdie.com/cdn/shop/files/cyan_68a52f3d-ed67-4091-9915-4c9f73f76d05.jpg?v=1710253123&%3Bwidth=1206&em-format=avif&em-width=1206"
                        alt="Product"
                        className='bg-contain w-[1200px] h-auto p-2'
                    />
                    <div className="flex justify-between flex-wrap">
                        {imgs.map((item, index) => (
                            <div key={index} className='h-12 md:h-20 w-10 md:w-20 py-1 '>
                                <img
                                    src={item}
                                    alt={`Thumbnail ${index}`}
                                    className='h-full w-full rounded-md object-cover'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='px-4 space-y-3'>
                    <h1 className='text-xl md:text-4xl font-semibold'>BIRDIE</h1>
                    <h1 className='text-blue-900 font-bold md:text-xl text-sm'>⭐⭐⭐⭐ (10,197)</h1>
                    <p className='text-sm md:text-base '>
                        This small device is <span className='inline font-bold'>like having a fire alarm in your pocket</span>.
                        When you pull the pin, it flashes and beeps incredibly loud so you can get the attention of everyone around you.
                    </p>
                    <div className='flex items-center space-x-3 py-2'>
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                className={`rounded-full w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 ${color === '#FFFFFF' ? 'border-2 border-gray-600' : ''}`}
                                style={{ backgroundColor: color }}
                            ></div>
                        ))}
                    </div>

                    <div className='space-y-5'>
                        <h1 className="font-bold text-xl">Step 1: Choose Your Bundle</h1>
                        {showButtons && (
                            <div className='flex flex-wrap gap-3'>
                                {items.map((item, index) => (
                                    <div key={index} className='text-center w-20 h-28 space-y-2 rounded-3xl'>
                                        <img src={item} alt="Product" className='rounded-lg h-[80px]' />
                                        <button
                                            className='px-4 text-white bg-[#1D4ED8] rounded-md'
                                            onClick={() => handleAddImage(item)}
                                        >
                                            Add
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {showProducts && (
                            <div className='flex gap-2 '>
                                <div className='rounded-lg min-w-20 sm:w-36  hover:border-blue-700 hover:bg-[#CEFDF8]' onClick={() => handleButtonClick(5)} >

                                    <div className='rounded-lg w-24 sm:w-36 border border-transparent hover:border-blue-700 hover:bg-[#CEFDF8]'>
                                        <div className='text-white font-semibold bg-[#1D4ED8] text-center text-[13px] p-1'>
                                            35% OFF + Mystery Gift
                                        </div>
                                        <img src="https://cdn.shopify.com/s/files/1/0259/5808/8792/files/birdie-5-pack.png?v=1697546359" alt="Bundle" />
                                        <div className='text-center font-bold leading-tight'>
                                            <h1>5 Birdies</h1>
                                            <p className='line-through font-semibold'>$34.95</p>
                                            <h1>$22.72 each</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-lg min-w-20 sm:w-36 border border-transparent hover:border-blue-700 hover:bg-[#CEFDF8]'>

                                    <div className='rounded-lg w-24 sm:w-36 border border-transparent hover:border-blue-700 hover:bg-[#CEFDF8]' onClick={() => handleButtonClick(3)}>
                                        <div className='text-white font-semibold bg-[#1D4ED8] text-center text-[13px] p-1'>
                                            35% OFF + Mystery Gift
                                        </div>
                                        <img src="https://cdn.shopify.com/s/files/1/0259/5808/8792/files/birdie-3-pack.png?v=1697548735" alt="Bundle" />
                                        <div className='text-center font-bold leading-tight'>
                                            <h1>3 Birdies</h1>
                                            <p className='line-through font-semibold'>$34.95</p>
                                            <h1>$26.21 each</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className='rounded-lg min-w-20 sm:w-36 border border-transparent hover:border-blue-700 hover:bg-[#CEFDF8]'>

                                    <div className='rounded-lg w-24 sm:w-36 border border-transparent hover:border-blue-700 hover:bg-[#CEFDF8]' onClick={() => handleButtonClick(1)}>
                                        <div className='text-white font-semibold bg-[#1D4ED8] text-center text-[13px] p-1'>
                                            35% OFF + Mystery Gift
                                        </div>
                                        <img src="https://cdn.shopify.com/s/files/1/0259/5808/8792/files/birdie-1-pack.png?v=1697548734" alt="Bundle" />
                                        <div className='text-center font-bold leading-tight'>
                                            <h1>1 Birdies</h1>
                                            <p className='line-through font-semibold'>$34.95</p>
                                            <h1>$29.71 each</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
                {showProducts && (
                    <div>
                        <button
                            className='bg-[#1D4ED8] max-w-[450px]  rounded-md md:p-2 mt-8 text-white font-semibold w-full'>
                            Next Choose Your Colors
                        </button>
                    </div>
                )}

                {!showProducts &&
                    <div>
                        <h2 className='text-lg font-bold'>Selected Items</h2>
                        <div className="flex gap-3 mt-4 h-[100px] p-2 w-full border-2 border-black">
                            {selectedImages.map((image, index) => (
                                <div key={index} className="relative flex justify-center items-center">
                                    <img src={image} alt="Selected" className="w-24 h-24 object-cover rounded-lg" />
                                    <button
                                        onClick={() => handleRemoveImage(index)}
                                        className="absolute top-0 right-0 bg-[#1D4ED8] text-white rounded-full h-5 w-5"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-between p-3 gap-10'>
                            <button
                                className='bg-[#1D4ED8] py-2 px-5 text-white font-sans rounded-lg text-xl'
                                onClick={handleBackClick}
                            >
                                Back
                            </button>
                            <button
                                className='bg-blue-500 py-2 px-5 flex-1 text-white font-sans rounded-lg text-xl'>
                                Add New Card
                            </button>
                        </div>
                    </div>
                }
                <div className='border rounded-lg border-blue-600  bg-[#F1FFFE] py-2 px-4 space-y-2'>
                    <div className='flex justify-center '>
                        <h2>Complete Care for  Your  Birdie</h2>
                    </div>

                    <div className='bg-[#1D4ED8] p-2 flex justify-between'>
                        <div className='flex gap-4'>
                            <div
                                className={`relative border-2  flex items-center w-12 h-6 rounded-full overflow-hidden cursor-pointer ${isLocationBgBlue ? 'bg-[#1D4ED8]' : 'bg-gray-300'}`}
                                onClick={toggleLocationPosition}
                            >
                                <div
                                    className={`absolute border-2 rounded-full h-6 w-6 p-1 bg-white ${isLocationRight ? 'translate-x-6' : 'translate-x-0'} transition-transform duration-300`}
                                ></div>
                            </div>
                            <div className='font-extrabold text-white md:text-xl'>Birdie Care Plan </div>
                        </div>
                        <div className='font-extrabold text-white md:text-xl'>$4.99</div>

                    </div>
                    <div className='flex justify-between'>
  <div className='flex gap-2'>
    <div>
      <img src="https://cdn.shopify.com/s/files/1/0259/5808/8792/files/hassle-free.png?v=1722597974" 
           alt="" 
           className='mt-2 h-6 w-6 hidden md:block' />
    </div>
    <div className='leading-tight text-sm md:text-base'>Hassle-Free Replacement</div>
  </div>
  
  <div className='flex gap-2'>
    <div>
      <img src="https://cdn.shopify.com/s/files/1/0259/5808/8792/files/hassle-free.png?v=1722597974" 
           alt="" 
           className='mt-2 h-6 w-6 hidden md:block' />
    </div>
    <div className='leading-tight text-sm md:text-base'>Battery Assurance</div>
  </div>
  
  <div className='flex gap-2'>
    <div>
      <img src="https://cdn.shopify.com/s/files/1/0259/5808/8792/files/hassle-free.png?v=1722597974" 
           alt="" 
           className='mt-2 h-6 w-6 hidden md:block' />
    </div>
    <div className='leading-tight text-sm md:text-base'>No Question Asked</div>
  </div>
</div>

                </div>
                <div className='flex items-center space-x-2 justify-center '>
                    <div className='flex items-center text-sm md:text-xl md:font-bold text-blue-800 '>
                        <CiDeliveryTruck className='mr-2 text-blue-800 text-xl' />
                        Ships Next Business Day
                    </div>
                    <div className='flex items-center text-sm md:text-xl md:font-bold text-blue-800 '>
                        <PiStarThin className='mr-2 text-blue-800 text-xl ' />
                        30-Day Return Policy
                    </div>
                </div>
            </div>



        </div >
            <div className='md:px-32 '>


                <div className='px-2  ml-auto select-none w-full md:max-w-[500px] '>
                    {questions.map((item, index) => (
                        <div key={index}>
                            <div className='border-b flex justify-between items-center space-x-48  space-y-4'>
                                <div className='flex space-x-2'>
                                    <span className='py-1 text-[12px] md:text-lg'>{item.question}</span>
                                </div>
                                <div
                                    className={`py-2 cursor-pointer transition-transform duration-300 text-[8px] md:text-sm ${openIndex === index ? 'rotate-180' : ''}`}
                                    onClick={() => toggleContent(index)}
                                >
                                    <FaAngleDown />
                                </div>
                            </div>
                            {openIndex === index && (
                                <div className=' p-2 text-sm border-2'>
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Sec />
            <Third />
            <Fourth />
            <Fivth/>
            <Footer/>


        </>
    );
}

export default Main;
