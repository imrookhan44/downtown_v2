import React from 'react'

function Map() {
  return (
    <>
      <section id="location-section" className="location-section bg-[#e5e2db] p-10 md:p-20"><div><div className="flex flex-col md:flex-row"><div><h2 className="text-3xl md:text-5xl font-bold mb-5">JEAN-MICHEL AND THE NEW YORK ART SCENE</h2>
        {/* <p className="text-xl md:text-2xl font-bold my-3">100 S GRAND AVE <br />LOS ANGELES, CA 90012</p> */}
        <p className="text-md font-light">Self Parking is located between W. 2nd Street and W. 1st Street on S. Olive Street</p>
        <p className="text-md font-light">
          JEAN-MICHEL AND THE NEW YORK ART SCENE

          Jean-Michel Basquiat was a vital part of the New York Art scene in the late 1970s and 1980s. He first met Kenny Scharf in 1979 at the School of Visual Arts. Subsequently, they were exhibited in the same group shows and their paths crossed innumerable times in the downtown clubs and the East Village art scene.

          Both Scharf and Jean-Michel produced commissions for the Palladium nightclub. Jeffrey Deitch, art dealer and curator first encountered Jean-Michel's work in 1978 and in 1980 wrote the first mention of Jean-Michel's work in the press. Since then, he has remained deeply supportive of his work.

        </p></div>

        <div className='flex justify-end m-auto'>
          <iframe width="660" height="315" src="https://www.youtube.com/embed/ZjIMecry5H4?si=Ev1ddbZBLnAlqM9b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen autoplay="1"></iframe>
        </div>
      </div></div></section>

    </>
  )
}

export default Map