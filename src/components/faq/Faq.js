// import React from 'react'

// function Faq() {
//   return (
//     <>
//       <section id="faq-section" className="faq-section bg-[#e43d5d] grid grid-cols-12 p-10 md:p-20"><h1 className="text-6xl font-bold col-span-12 pb-10">FAQ</h1><h1 className="text-2xl font-bold pb-6 col-span-12">GENERAL</h1><div className="col-span-12 md:col-span-10"><div className="shadow-md"><div className="border-b"><button className="flex justify-between items-center w-full p-4"><span className="font-bold">What are the operating hours?</span><span className="transition-transform ">▼</span></button></div><div className="border-b"><button className="flex justify-between items-center w-full p-4"><span className="font-bold">Can I buy tickets at the venue?</span><span className="transition-transform ">▼</span></button></div><div className="border-b"><button className="flex justify-between items-center w-full p-4"><span className="font-bold">Where can I park?</span><span className="transition-transform ">▼</span></button></div><div className="border-b"><button className="flex justify-between items-center w-full p-4"><span className="font-bold">How long will the exhibition be in Los Angeles?</span><span className="transition-transform ">▼</span></button></div><div className="border-b"><button className="flex justify-between items-center w-full p-4"><span className="font-bold">Is photography allowed in the exhibition?</span><span className="transition-transform ">▼</span></button></div><div className="border-b"><button className="flex justify-between items-center w-full p-4"><span className="font-bold">Is there a coat check or bag check?</span><span className="transition-transform ">▼</span></button></div></div></div></section>

//     </>
//   )
// }

// export default Faq
import React, { useState } from 'react';

function Faq() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      // If the clicked accordion is already open, close it
      setOpenAccordion(null);
    } else {
      // Open the clicked accordion
      setOpenAccordion(index);
    }
  };

  const faqData = [
    {
      question: "What are the operating hours?",
      answer: "Monday: 12:20pm – 6:30pm  Tuesday: CLOSED Wednesday: 11am – 6:30pm Thursday: 11am – 6:30pm Friday: 11am – 6:30pm Saturday: 10am – 6:30pm Sunday: 10am – 6:30pm Last ticket sold at 6pm all days.",
    },
    {
      question: "Can I buy tickets at the venue?",
      answer: "There is limited availability for walk-up ticket sales. Onsite ticket sales are subject to availability. Tickets may be sold out. We strongly recommend purchasing tickets in advance.",
    },
    {
      question: "Where can I park?",
      answer: "Parking is available at The Grand in the lower-level parking garage. Self-parking with validation is available for $4.50 for three hours. After the three-hour self-validation, rates increase to $5.00 each hour to a max of $42.00. The entrance to Self Parking is located between W. 2nd Street and W. 1st Street on S. Olive Street in Los Angeles, CA 90012. Alternatively, the following GPS Coordinates on Google Maps will provide directions: 34.054637, -118.248174",
    },
    {
      question: "How long will the exhibition be in Los Angeles?",
      answer: "Tickets can be purchased here for Jean-Michel Basquiat King Pleasure© through October 15th, 2023"
    },
    {
      question: "Is photography allowed in the exhibition?",
      answer: "Personal photography is allowed inside the exhibition. Commercial photography is strictly prohibited without prior approval. The use of flash, tripods, stabilizers, selfie sticks, gimbals, or lenses over 150mm is strictly prohibited."
    },
    {
      question: "Is there a coat check or bag check?",
      answer: "Unfortunately, we do not have a coat check, and visitors are not able to store coats or bags on premise. All backpacks, shoulder bags, and strollers need to stay with you at all times. Bags, backpacks, Scooters, Skateboards, Bicycles and any items larger than 11 x 15 x 5 inches are not permitted. Baby carrier backpacks are not permitted; soft, front-facing baby carriers and strollers are welcome."
    },
  ];

  return (
    <section id="faq-section" className="faq-section bg-[#e43d5d] grid grid-cols-12 p-10 md:p-20">
      <h1 className="text-6xl font-bold col-span-12 pb-10">FAQ</h1>
      <h1 className="text-2xl font-bold pb-6 col-span-12">GENERAL</h1>
      <div className="col-span-12 md:col-span-10">
        <div className="shadow-md">
          {faqData.map((item, index) => (
            <div key={index} className="border-b">
              <button
                className="flex justify-between items-center w-full p-4"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-bold">{item.question}</span>
                <span className="transition-transform">{openAccordion === index ? "▲" : "▼"}</span>
              </button>
              {openAccordion === index && (
                <div className="p-4">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
