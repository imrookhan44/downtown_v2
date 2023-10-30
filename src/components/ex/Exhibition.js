import React from 'react'
import ReactPlayer from 'react-player'

function Exhibition() {
  return (
    <>
      <section id="exhibition-section" className="bg-[#e43d5d] py-6 md:py-10"><h1 className="font-bold text-4xl md:text-6xl text-center pb-4 md:pb-8">Exhibition</h1>
        <div>
          <p className="text-xl mt-8 mb-8 text-center px-10 font-normal">Organized and curated by The Estate of Jean-Michel Basquiat, this exhibition features over 200 never-before-seen and rarely-shown paintings, drawings, multimedia presentations, ephemera, and artifacts. This intimate perspective is shared through the lens of his family – intertwining his artistic endeavors with his personal life, influences, and the times in which he lived.
          </p>
        </div>
        <div className="mx-auto flex justify-center">
          <ReactPlayer muted autoplay loop={true} url='https://www.youtube.com/watch?v=Oo06f-zOFBo' />
        </div>
      </section>

    </>
  )
}

export default Exhibition