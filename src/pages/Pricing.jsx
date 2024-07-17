import React from 'react';
import Footer from '../components/Footer';

const Pricing = () => {
    return (
      <>
                <div className="bg-white font-futurapt mx-auto max-w-7xl lg:flex items-center justify-between p-6 md:p-12 shadow-md rounded-lg mt-4">
            <div className="lg:w-1/2 w-full">
                <p className="text-base leading-4 text-gray-600">Choose your plan</p>
                <h1 className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">
                    Our pricing plan
                </h1>
                <p className="text-base leading-5 mt-5 text-gray-600">
                Discover our competitive pricing — it's the best value for exceptional quality service.
                </p>
            </div>
            <div className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8">
                <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />

                <div className="bg-white cursor-pointer shadow-md rounded-lg mt-3 flex relative z-30">
                    <div className="w-2.5 h-auto bg-indigo-700 rounded-tl-md rounded-bl-md"></div>
                    <div className="w-full p-2">
                        <div className="md:flex items-center justify-between">
                            <h2 className=" font-semibold leading-6 text-gray-800">Initial Assessment (45 mins)</h2>
                            <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">£45</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white cursor-pointer shadow-md rounded-lg mt-3 flex relative z-30">
                    <div className="w-2.5 h-auto bg-indigo-700 rounded-tl-md rounded-bl-md"></div>
                    <div className="w-full p-2">
                        <div className="md:flex items-center justify-between">
                            <h2 className="font-semibold leading-6 text-gray-800">Follow up (30 mins)</h2>
                            <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">£35</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white cursor-pointer shadow-md rounded-lg mt-3 flex relative z-30">
                    <div className="w-2.5 h-auto bg-indigo-700 rounded-tl-md rounded-bl-md"></div>
                    <div className="w-full p-2">
                        <div className="md:flex items-center justify-between">
                            <h2 className=" font-semibold leading-6 text-gray-800">Extended review (1 hour)</h2>
                            <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">£60</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white cursor-pointer shadow-md rounded-lg mt-3 flex relative z-30">
                    <div className="w-2.5 h-auto bg-indigo-700 rounded-tl-md rounded-bl-md"></div>
                    <div className="w-full p-2">
                        <div className="md:flex items-center justify-between">
                            <h2 className=" font-semibold leading-6 text-gray-800">Acupuncture (30 mins)</h2>
                            <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">£35</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white cursor-pointer shadow-md rounded-lg mt-3 flex relative z-30">
                    <div className="w-2.5 h-auto bg-indigo-700 rounded-tl-md rounded-bl-md"></div>
                    <div className="w-full p-2">
                        <div className="md:flex items-center justify-between">
                            <h2 className=" font-semibold leading-6 text-gray-800">Sport Massage (inc Deep Soft Tissue)</h2>
                            <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">£35</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white cursor-pointer shadow-md rounded-lg mt-3 flex relative z-30">
                    <div className="w-2.5 h-auto bg-indigo-700 rounded-tl-md rounded-bl-md"></div>
                    <div className="w-full p-2">
                        <div className="md:flex items-center justify-between">
                            <h2 className=" font-semibold leading-6 text-gray-800">Hydrotherapy (1 hour)</h2>
                            <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">£75</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white cursor-pointer shadow-md rounded-lg mt-3 flex relative z-30">
                    <div className="w-2.5 h-auto bg-indigo-700 rounded-tl-md rounded-bl-md"></div>
                    <div className="w-full p-2">
                        <div className="md:flex items-center justify-between">
                            <h2 className=" font-semibold leading-6 text-gray-800">Home visit (Midlothian)</h2>
                            <p className="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800">£45</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      </>

    );
}

export default Pricing;
