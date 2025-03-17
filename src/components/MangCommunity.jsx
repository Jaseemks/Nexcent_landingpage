import React from 'react'

export const MangCommunity = () => {
    return (
        <div className='flex flex-col space-y-4 items-center'>
            <span className='text-6xl text-[#4D4D4D]'>Manage your entire community</span>
            <span className='text-6xl text-[#4D4D4D]'>in a single system</span>
            <span className='text-[#4D4D4D]'>Who is Nextcent suitable for?</span>
            <div className='flex flex-row items-center justify-evenly w-full pb-10'>
                <div className="card bg-base-100 w-96 shadow-sm ">
                    <figure className="px-10 pt-10">
                        <img
                            src="/assets/Icon.png"
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <span className="card-title text-4xl text-[#4D4D4D] ">Membership <br /> Organisations</span>
                        <p className='text-[#4D4D4D]'>Our membership management <br />software provides full automation of<br />membership renewals and payments</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="/assets/Icon (1).png"
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <span className="card-title text-4xl text-[#4D4D4D] ">National <br /> Associations</span>
                        <p className='text-[#4D4D4D]'>Our membership management <br />software provides full automation of<br />membership renewals and payments</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="/assets/Icon (2).png"
                            alt=""
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <span className="card-title text-4xl text-[#4D4D4D] ">Clubs And <br /> Groups</span>
                        <p className='text-[#4D4D4D]'>Our membership management <br />software provides full automation of<br />membership renewals and payments</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <span className='text-4xl font-bold text-[#4D4D4D]'>Helping a local</span>
                    <span className='text-4xl font-bold text-[#43A046]'>Business reinvent itself</span>
                    <span className='text-[#4D4D4D]'>We reaches here with our hard work and dedication</span>

                </div>
                <div className=''>
                    <div>
                        <img src="/assets/Icon (3).png" alt="" />
                        <img src="/assets/Icon (4).png" alt="" />
                    </div>
                    <div>
                    <img src="/assets/Icon (5).png" alt="" />
                    <img src="/assets/Icon (6).png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}
