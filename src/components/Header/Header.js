import { Modal } from 'flowbite-react'
import React, { useState } from 'react'

function Header() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div>
        <nav className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 items-center mx-auto p-4 bg-[#2f91cb]"><div><img src="https://down-town23.vercel.app/images/logo.png" alt="logo" className="h-5" /></div><ul className="flex flex-wrap gap-x-4 gap-y-1 text-lg md:text-2xl font-bold"><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a
          onClick={() => setOpenModal(true)}
          href="#">NFTS</a></li><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a href="#exhibition-section">EXHIBITION</a></li><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a href="#location-section">LOCATION</a></li><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a href="#events-section">EVENTS</a></li><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a href="#education-section">EDUCATION</a></li><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a href="#contact-news-section">CONTACT</a></li><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a href="#contact-news-section">NEWS</a></li><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a href="#faq-section">FAQ</a></li><li className="hover:text-yellow-400 duration-200 cursor-pointer"><a href="https://shop.basquiat.com/" target="_blank" rel="noopener noreferrer">SHOP</a></li></ul></nav>

      </div>
      <Modal show={openModal} size={"5xl"} onClose={() => setOpenModal(false)}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className=" grid
          gap-5
          grid-cols-1 md:grid-cols-2
          grid-rows-1 md:grid-rows-2
          ">
            <div className='relative'>
              <img src="https://www.filepicker.io/api/file/NCUX1oxLSwKSRDjoJTnM" alt=""
                className='w-full h-auto'
              />
              <div className='flex items-center gap-3 justify-between w-full absolute bottom-0 p-5 bg-black'>
                <p className='text-white'>
                  Lorem, ipsum dolor sit amet.
                </p>
                <button
                  className='text-white bg-yellow-400 px-5 py-2 rounded-md'

                >Book</button>
              </div>
            </div>
            <div className='relative'>
              <img src="https://www.filepicker.io/api/file/ZvYehPPlTYOJgtjShMxJ" alt=""
                className='w-full h-auto'
              />
              <div className='flex items-center gap-3 justify-between w-full absolute bottom-0 p-5 bg-black'>
                <p className='text-white'>
                  Lorem, ipsum dolor sit amet.
                </p>
                <button

                  className='text-white bg-yellow-400 px-5 py-2 rounded-md'

                >Book</button>
              </div>
            </div>

          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>I accept</Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default Header