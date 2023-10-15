import React from 'react'

function Home() {
  return (
    <>
      <div id="hero-section" className="bg-[#2f91cb] flex flex-col md:flex-row md:justify-between items-center px-8 md:px-32 py-4 md:py-6 font-bold"><div><p className="text-4xl md:text-6xl lg:text-8xl">JEAN- <br /> MICHEL <br /> BASQUIAT</p><p className="text-[#ecd517] text-4xl md:text-6xl lg:text-8xl">KING <br /> PLEASURE</p><p className="pt-6 font-bold">PRESENTED BY THE ESTATE <br /> OF JEAN-MICHEL BASQUIAT</p></div><div><p className="text-3xl md:text-5xl pt-2">LOS ANGELES</p><p className="text-base md:text-xl"> EXTENDED THROUGH OCTOBER 15TH</p><img src="https://down-town23.vercel.app/images/cover.jpg" alt="Hero Image" className="h-[500px]" /></div></div>

    </>
  )
}

export default Home