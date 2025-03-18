import React, { useState } from 'react';

export const Body = () => {
    // State to track the active carousel item
    const [activeItem, setActiveItem] = useState(1);

    return (
        <div>
            <div className="carousel w-full bg-[#F5F7FA] py-20">
                <div id="item1" className="carousel-item w-full">
                <div className='flex flex-col space-y-4 px-5 md:px-20'>
                        <span className='text-4xl md:text-8xl text-[#4D4D4D]'>Lessons and insights</span>
                        <span className='text-4xl md:text-8xl text-[#66BB69]'>from 8 years</span>
                        <span className='text-lg'>Where to grow your business as a photographer: site or social media?</span>
                        <button className="btn bg-[#66BB69] w-29 text-white">Register</button>
                    </div>
                    <div className='sec2'>
                        <img
                            src="/assets/Illustration.png"
                            className="w-full"
                            alt="Carousel 1"
                        />
                    </div>

                </div>
                <div id="item2" className="carousel-item w-full">
                
                </div>
                <div id="item3" className="carousel-item w-full">
                <div className='flex flex-col space-y-4 px-20'>
                        <span className='text-8xl text-[#4D4D4D]'>Lessons and insights</span>
                        <span className='text-8xl text-[#66BB69]'>from 8 years</span>
                        <span className='text-lg'>Where to grow your business as a photographer: site or social media?</span>
                        <button className="btn bg-[#66BB69] text-white w-29">Register</button>
                    </div>
                    <div className='sec2'>
                        <img
                            src="/assets/Illustration.png"
                            className="w-full"
                            alt="Carousel 1"
                        />
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a
                    href="#item1"
                    className={`btn btn-xs w-4 h-4 rounded-full ${activeItem === 1 ? 'bg-[#66BB69]' : 'bg-[#C8E6C9]'} hover:bg-[#66BB69]`}
                    onClick={() => setActiveItem(1)}
                ></a>
                <a
                    href="#item2"
                    className={`btn btn-xs w-4 h-4 rounded-full ${activeItem === 2 ? 'bg-[#66BB69]' : 'bg-[#C8E6C9]'} hover:bg-[#66BB69]`}
                    onClick={() => setActiveItem(2)}
                ></a>
                <a
                    href="#item3"
                    className={`btn btn-xs w-4 h-4 rounded-full ${activeItem === 3 ? 'bg-[#66BB69]' : 'bg-[#C8E6C9]'} hover:bg-[#66BB69]`}
                    onClick={() => setActiveItem(3)}
                ></a>
            </div>
        </div>
    );
};

