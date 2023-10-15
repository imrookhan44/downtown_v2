import React from 'react'

function Header() {
  return (
    <div>
      <nav className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 items-center mx-auto p-4 bg-[#2f91cb]"><div><img src="https://down-town23.vercel.app/images/logo.png" alt="logo" className="h-5" /></div><ul className="flex flex-wrap gap-x-4 gap-y-1 text-lg md:text-2xl font-bold"><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a href="#">TICKETS</a></li><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a href="#exhibition-section">EXHIBITION</a></li><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a href="#location-section">LOCATION</a></li><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a href="#events-section">EVENTS</a></li><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a href="#education-section">EDUCATION</a></li><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a href="#contact-news-section">CONTACT</a></li><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a href="#contact-news-section">NEWS</a></li><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a href="#faq-section">FAQ</a></li><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a href="https://shop.basquiat.com/" target="_blank" rel="noopener noreferrer">SHOP</a></li></ul></nav>

    </div>
  )
}

export default Header