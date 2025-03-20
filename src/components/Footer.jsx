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
