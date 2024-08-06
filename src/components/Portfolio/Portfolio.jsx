import React from 'react'

function Portfolio() {
    const cardItems = [
        {
            id: 1,
            logo: "./images/mongodb.png",
            name: "Mongodb",
        },
        {
            id: 2,
            logo: "./images/reactjs.png",
            name: "Reactjs",
        },
        {
            id: 3,
            logo: "./images/nodejs.png",
            name: "Nodojs",
        },
        {
            id: 4,
            logo: "./images/java.png",
            name: "Java",
        }
    ]

    return (
        <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <div>
                <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
                <span className=" underline font-semibold">Featured Projects</span>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
                    {
                        cardItems.map(({ id, logo, name }) => (
                            <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                                <img className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" src={logo} alt={name} />
                                <div>
                                    <div className="px-2 font-bold text-xl mb-2">{name}</div>
                                    <p className="px-2 text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                                <div className=" px-6 py-4 space-x-3 justify-around ">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button>
                                    <button className="bg-green-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Source Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio
