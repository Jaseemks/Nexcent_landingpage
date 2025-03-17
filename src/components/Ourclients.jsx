import React from 'react'

export const Ourclients = () => {
    return (
        <div className='flex flex-col space-y-4 items-center py-10'>
            <span className='text-6xl text-[#4D4D4D]'>Our Clients</span>
            <span className='text-[#717171]'>We have been working with some Fortune 500+ clients</span>
            <div className='flex flex-row items-center justify-evenly w-full'>
                <img src="/assets/Logo (1).png" alt="Logo 1" className="w-16" />
                <img src="/assets/Logo (2).png" alt="Logo 2" className="w-16" />
                <img src="/assets/Logo (3).png" alt="Logo 3" className="w-16" />
                <img src="/assets/Logo (4).png" alt="Logo 4" className="w-16" />
                <img src="/assets/Logo (5).png" alt="Logo 5" className="w-16" />
                <img src="/assets/Logo (6).png" alt="Logo 6" className="w-16" />
                <img src="/assets/Logo (7).png" alt="Logo 7" className="w-16" />
            </div>
        </div>
    )
}

