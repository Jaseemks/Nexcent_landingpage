import React from 'react'

export const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#263238] text-[#FFFFFF] p-10">
        <div className='flex flex-col justify-evenly'>
        <aside className='flex flex-col items-center sm:items-start'>
            <img className="logo w-32 sm:w-40" src="/assets/logo_white.png" alt="Logo" />
            <p className="mt-4 text-center sm:text-left">
              Copyright © 2020 Nexcent Itd.
              <br />
              All rights reserved
            </p>
          </aside>
          <div className="grid grid-flow-col gap-4">
            <a>
              <img className="logo" src="/assets/Social Icons.png" alt="Logo" />
            </a>
            <a>
              <img className="logo" src="/assets/socialmedia1.png" alt="Logo" />
            </a>
            <a>
              <img className="logo" src="/assets/Social Icons-2.png" alt="Logo" />
            </a>
            <a>
              <img className="logo" src="/assets/Social Icons-4.png" alt="Logo" />
            </a>
          </div>
        </div>

        <nav>
          <h6 className="text-2xl font-semibold">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Contact us</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Testimonials</a>
        </nav>
        <nav>
          <h6 className="text-2xl font-semibold">Support</h6>
          <a className="link link-hover">Help center</a>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Legal</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Status</a>
        </nav>
        <form>
          <h6 className="text-2xl font-semibold">Stay up to date</h6>
          <fieldset className="w-80">
            <label className="input bg-[#89939E] opacity-50">
              <input type="search" className="grow text-whitebg-[#89939E]" placeholder="Your email address" />
              <img className="logo" src="/assets/send.png" alt="Logo" />
            </label>
          </fieldset>
        </form>
      </footer>
    </div>
  )
}





// import React from 'react';

// export const Footer = () => {
//   return (
//     <div>
//       <footer className="footer sm:footer-horizontal bg-[#263238] text-[#FFFFFF] p-10">
//         <div className='flex flex-col sm:flex-row justify-between sm:items-center w-full'>
//           {/* Logo and Copyright Section */}
//           <aside className='flex flex-col items-center sm:items-start'>
//             <img className="logo w-32 sm:w-40" src="/assets/logo_white.png" alt="Logo" />
//             <p className="mt-4 text-center sm:text-left">
//               Copyright © 2020 Nexcent Itd.
//               <br />
//               All rights reserved
//             </p>
//           </aside>

//           {/* Social Media Icons */}
//           <div className="flex flex-row justify-center sm:justify-start gap-4 mt-4 sm:mt-0">
//             <a href="#" className="w-8 sm:w-10">
//               <img className="logo w-full" src="/assets/Social Icons.png" alt="Social Icon 1" />
//             </a>
//             <a href="#" className="w-8 sm:w-10">
//               <img className="logo w-full" src="/assets/socialmedia1.png" alt="Social Icon 2" />
//             </a>
//             <a href="#" className="w-8 sm:w-10">
//               <img className="logo w-full" src="/assets/Social Icons-2.png" alt="Social Icon 3" />
//             </a>
//             <a href="#" className="w-8 sm:w-10">
//               <img className="logo w-full" src="/assets/Social Icons-4.png" alt="Social Icon 4" />
//             </a>
//           </div>
//         </div>

//         {/* Company Links */}
//         <nav className="mt-8 sm:mt-0">
//           <h6 className="text-2xl font-semibold">Company</h6>
//           <a className="link link-hover">About us</a>
//           <a className="link link-hover">Blog</a>
//           <a className="link link-hover">Contact us</a>
//           <a className="link link-hover">Pricing</a>
//           <a className="link link-hover">Testimonials</a>
//         </nav>

//         {/* Support Links */}
//         <nav className="mt-8 sm:mt-0">
//           <h6 className="text-2xl font-semibold">Support</h6>
//           <a className="link link-hover">Help center</a>
//           <a className="link link-hover">Terms of use</a>
//           <a className="link link-hover">Legal</a>
//           <a className="link link-hover">Privacy policy</a>
//           <a className="link link-hover">Status</a>
//         </nav>

//         {/* Newsletter Section */}
//         <form className="mt-8 sm:mt-0">
//           <h6 className="text-2xl font-semibold">Stay up to date</h6>
//           <fieldset className="w-full sm:w-80 mt-4 flex items-center">
//             <label className="input bg-[#89939E] opacity-50 flex items-center w-full">
//               <input 
//                 type="search" 
//                 className="grow text-white bg-[#89939E] p-2 rounded-l-md" 
//                 placeholder="Your email address" 
//               />
//               <button type="submit" className="bg-[#43A046] p-2 rounded-r-md">
//                 <img className="logo w-6 h-6" src="/assets/send.png" alt="Send" />
//               </button>
//             </label>
//           </fieldset>
//         </form>
//       </footer>
//     </div>
//   );
// };
