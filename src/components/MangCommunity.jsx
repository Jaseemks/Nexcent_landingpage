import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export const MangCommunity = () => {
    return (
        <div className='flex flex-col space-y-4 items-center'>
            <span className='text-4xl md:text-6xl text-[#4D4D4D]'>Manage your entire community</span>
            <span className='text-4xl md:text-6xl text-[#4D4D4D]'>in a single system</span>
            <span className='text-[#4D4D4D]'>Who is Nextcent suitable for?</span>
            <div className="flex flex-wrap items-center justify-evenly w-full pb-10">
                <div className="card bg-base-100 w-full sm:w-96 md:w-96 lg:w-96 shadow-sm mb-6 md:mb-0">
                    <figure className="px-10 pt-10">
                        <img
                            src="/assets/Icon.png"
                            alt="Membership Organisations"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <span className="card-title text-4xl text-[#4D4D4D]">Membership <br /> Organisations</span>
                        <p className="text-[#4D4D4D]">Our membership management <br />software provides full automation of<br />membership renewals and payments</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-full sm:w-96 md:w-96 lg:w-96 shadow-sm mb-6 md:mb-0">
                    <figure className="px-10 pt-10">
                        <img
                            src="/assets/Icon (1).png"
                            alt="National Associations"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <span className="card-title text-4xl text-[#4D4D4D]">National <br /> Associations</span>
                        <p className="text-[#4D4D4D]">Our membership management <br />software provides full automation of<br />membership renewals and payments</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-full sm:w-96 md:w-96 lg:w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="/assets/Icon (2).png"
                            alt="Clubs And Groups"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <span className="card-title text-4xl text-[#4D4D4D]">Clubs And <br /> Groups</span>
                        <p className="text-[#4D4D4D]">Our membership management <br />software provides full automation of<br />membership renewals and payments</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-full bg-[#F5F7FA] h-auto sm:h-[400px] md:h-[256px] lg:h-[256px] py-8'>
                <div className='flex flex-col w-full md:w-1/2 justify-center items-center text-center md:text-left'>
                    <span className='text-3xl md:text-4xl font-bold text-[#4D4D4D]'>Helping a local</span>
                    <span className='text-3xl md:text-4xl font-bold text-[#43A046]'>Business reinvent itself</span>
                    <span className='text-sm md:text-base text-[#4D4D4D]'>We reached here with our hard work and dedication</span>
                </div>
                <div className='flex w-full md:w-1/2 flex-col justify-evenly items-center md:items-start'>
                    <div className='flex flex-col md:flex-row justify-evenly items-center mb-4'>
                        <div className='flex items-center'>
                            <img src="/assets/Icon (3).png" alt="Icon 1" />
                            <div className='flex flex-col mx-4'>
                                <h1 className='text-xl md:text-2xl font-bold text-[#4D4D4D]'>2,345,341</h1>
                                <h1 className='text-[#4D4D4D]'>Members</h1>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <img src="/assets/Icon (4).png" alt="Icon 2" />
                            <div className='flex flex-col mx-4'>
                                <h1 className='text-xl md:text-2xl font-bold text-[#4D4D4D]'>46,328</h1>
                                <h1 className='text-[#4D4D4D]'>Members</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-evenly items-center'>
                        <div className='flex items-center'>
                            <img src="/assets/Icon (5).png" alt="Icon 3" />
                            <div className='flex flex-col mx-4'>
                                <h1 className='text-xl md:text-2xl font-bold text-[#4D4D4D]'>828,868</h1>
                                <h1 className='text-[#4D4D4D]'>Members</h1>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <img src="/assets/Icon (6).png" alt="Icon 4" />
                            <div className='flex flex-col mx-4'>
                                <h1 className='text-xl md:text-2xl font-bold text-[#4D4D4D]'>1,926,436</h1>
                                <h1 className='text-[#4D4D4D]'>Members</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-full bg-[#F5F7FA] justify-center items-center h-64 my-2 py-8'>
                <span className='text-4xl md:text-6xl font-bold text-center text-[#4D4D4D]'>
                    Pellentesque suscipit <br /> Fringilla libero eu.
                </span>
                <button className="btn bg-[#43A046] text-white mt-4 h-12 flex items-center">
                    Get a Demo
                    <FaArrowRight className="ml-1" />
                </button>
            </div>

        </div>
    )
}