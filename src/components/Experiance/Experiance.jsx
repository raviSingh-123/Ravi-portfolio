import React from 'react'

function Experiance() {
    const cardItem = [
        {
          id: 1,
          logo:'./images/html.png',
          name: "HTML",
        },
        {
          id: 2,
          logo: './images/tailwindcss.png',
          name: "TailwindCSS",
        },
        {
          id: 3,
          logo: './images/java.png',
          name: "Java",
        },
        {
          id: 4,
          logo: './images/js.png',
          name: "JavaScript",
        },
        {
          id: 5,
          logo: './images/mongodb.png',
          name: "Mongodb",
        },
        {
          id: 6,
          logo: 'reactjs.png',
          name: "ReactJs",
        },
        {
          id: 7,
          logo: './images/nodejs.png',
          name: "NodeJs",
        },
      ];
      return (
        <div
          name="Experiance"
          className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
        >
          <div>
            <h1 className="text-3xl font-bold mb-5">Experiance</h1>
            <p className="  ">
              I've more than 1 years of experiance in below technologies.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
              {cardItem.map(({ id, logo, name }) => (
                <div
                  className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
                  key={id}
                >
                  <img src={logo} className="w-[150px] rounded-full" alt="" />
                  <div>
                    <div className="">{name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    
    
export default Experiance
