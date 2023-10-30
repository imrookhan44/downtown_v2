import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function Events() {

  return (
    <>
      <section id="events-section" className="location-section bg-[yellow]  p-10 md:p-32">        <Carousel responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"

      >
        <div className='flex items-center justify-center gap-x-32'>
          <div className=' w-[50%]'>
            <img src="https://assets-global.website-files.com/64d6c63d04a893ff7ee74a01/6525f8a5cd1ec75020775b42_Event-2023-10-28-KP_LegendaryHalloween_Flyer-KP.jpg" alt="" className='


            w-full h-fit object-cover

            ' />
          </div>
          <div className='w-[20%]'>
            <h1
              className='text-4xl font-bold text-[#000000]'>LEGENDARY HALLOWEEN</h1>
            <p
              className='text-[#000000] text-xl font-normal mt-32'

            >Join King Pleasure® and Legendary Damon for LA’s most coveted Halloween celebration. Come dressed as your favorite artist, musician, or personality from the 80's art world.</p>
          </div>
        </div>
        {/* <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div> */}
      </Carousel>;
      </section>

    </>
  )
}

export default Events