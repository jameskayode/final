import React from 'react'

const Main = () => {
  return (
    <div>
       <div className='text-white'>
        <div className="max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">

            <p className='text-lime-600 font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with Data.</h1>


        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-5'>Fast, Flexible Financing for </p>
          <Typed
           className='md:text-5xl sm:text-4xl text-xl font-bold p-2 '
          strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop/>


        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-400'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-lime-500 rounded-md w-[150px] mx-auto my-6 py-3 text-black  font-medium'>Get Started</button>
        </div>
      
    </div>
  ); 
}
    

export default Main
