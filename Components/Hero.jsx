import React from 'react';
import Typed from 'react-typed';
import ab from '../Assets/ab.jpg'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className="max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">


          <div className=''>
              <img src={ab} alt="" className=' rounded-full md:h-fit h-[60%] w-24 mt-20 p-4 relative top-0 left-3 mx-20 my-95'/>
          </div>

            <p className='text-lime-600 font-bold p-2'>PORTFOLIO OF A WEB DEVELOPER</p>
            <h1 className='md:text-7xl sm:text-6xl text-1xl font-bold md:py-6'>Hello, My name is
JOSEPH James Kayode</h1>


        <div className='flex justify-center items-center'>
            <p className='md:text-3.5xl sm:text-3xl text-xl font-bold py-5'>Experienced Frontend developer using</p>
            <Typed
           className='md:text-4xl sm:text-3xl text-xl font-bold p-2'
          strings={['HTML', 'CSS', 'TAILWIND', 'REACTJS']} typeSpeed={125} backSpeed={150} loop/>

          


        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-400'>I Design, Brand and develop services for customers of all sizes, specializing in creating stylish, modern websites and online stores..</p>
        <button className='bg-lime-500 rounded-md w-[150px] mx-auto my-6 py-3 text-black  font-medium'>Get Started</button>
        </div>
      
    </div>
  ); 
}

export default Hero;
