import React from 'react';
import ano from '../../assets/images/anonymous-black.jpg'
import SliderOne from '../SliderOne';
 const  Home = () =>  {
    return (
        <>
        <div className="border h-screen pt-20 px-10">
            <h1>home</h1>
            <div class="flex mb-4">
                <div class="w-1/2 bg-gray-400 h-12"></div>
                <div class="w-1/2 bg-gray-500 h-12"></div>
                </div>
                

                <SliderOne />
        </div>

      
            {/* <img width="300" src={ano} /> */}
        </>
    )
}

export default Home;