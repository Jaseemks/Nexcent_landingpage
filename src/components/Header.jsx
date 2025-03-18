// import React from 'react'

// export const Header = () => {
//     return (
//         <div>
//             <div className="navbar bg-[#F5F7FA] ">
//                 <div className="flex flex-row items-center">
//                     <img className="logo" src="/assets/Logo.png" alt="Logo" />
//                 </div>
//                 <div className="flex justify-end space-x-24 items-center w-full">
//                     <a href="#home">Home</a>
//                     <a href="#service">Service</a>
//                     <a href="#feature">Feature</a>
//                     <a href="#product">Product</a>
//                     <a href="#testmonial">Testimonial</a>
//                     <a href="#faq">FAQ</a>
//                  <div className='flex justify-end space-x-24 items-center'>   
//                     <a href="#login" className='text-[#66BB69]'>Login</a>
//                     <button className="btn bg-[#66BB69] text-white">Sign up</button>
//                 </div>   
//                 </div>

//             </div>
//         </div>
//     )
// }


import React from 'react'

export const Header = () => {
    return (
        <div>
            <div className="navbar bg-[#F5F7FA] p-4">
                <div className="flex flex-row items-center justify-between w-full">
                    <img className="logo" src="/assets/Logo.png" alt="Logo" />
                    
                    <div className="hidden lg:flex justify-end space-x-32 items-center w-full">
                        <a href="#home">Home</a>
                        <a href="#service">Service</a>
                        <a href="#feature">Feature</a>
                        <a href="#product">Product</a>
                        <a href="#testmonial">Testimonial</a>
                        <a href="#faq">FAQ</a>

                        <div className='flex justify-end space-x-8 items-center'>
                            <a href="#login" className='text-[#66BB69]'>Login</a>
                            <button className="btn bg-[#66BB69] text-white">Sign up</button>
                        </div>
                    </div>

                </div>
                <div className="lg:hidden flex flex-col items-center space-y-4 mt-4">
                    <a href="#home">Home</a>
                    <a href="#service">Service</a>
                    <a href="#feature">Feature</a>
                    <a href="#product">Product</a>
                    <a href="#testmonial">Testimonial</a>
                    <a href="#faq">FAQ</a>

                    <a href="#login" className='text-[#66BB69]'>Login</a>
                    <button className="btn bg-[#66BB69] text-white">Sign up</button>
                </div>
            </div>
        </div>
    )
}
