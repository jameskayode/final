  import React from 'react'
  //import { Link } from 'react-router-dom';
  import Elam from '../Assets/ELAM.png'
  import Weer from '../Assets/weer.PNG'

  import elam2 from '../Assets/elam2.png'
  import idcard from '../Assets/idcard.png'
  
  import rc from '../Assets/rc.png'
  import ub from '../Assets/ub.png'
  import wc from '../Assets/wc.png'


  const Projects = () => {
    return (
      <div className='w-full py-[-10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
              <div className='w-full shadow-xl  flex flex-col p-4 my-4 round-lg hover:scale-105 duration-300'>
                  <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Elam} alt="/" />
                  <h2 className='text-2xl font-bold text-center py-8'>ELAMFIT CLUB</h2>
            <p className='text-center text-2xl '>An app with Features that help users choose there fitness plan</p>
          
            <button className='bg-[#00df9a] w-[200px] rounded-md  my-6 mx-auto px-6 py-3 font-bold'>Learn More</button>
                

              </div>
              <div className='w-full shadow-xl  flex flex-col p-4 my-4 round-lg hover:scale-105 duration-300'>
                  <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Weer} alt="" /> 
                  <h2 className='text-2xl font-bold text-center py-8'>PHED PRORATA PROJECT FORM</h2>
            <p className='text-center text-2xl'>A user friendly form that takes the details of customers for billing computation</p>
            <div className=" flex justify-center items-center">
        <a href="https://phedprorata.netlify.app/"  >
            <button className='bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto px-6 ml-15 py-3 text-center font-bold'>Learn More</button>
            </a>
            </div>
              </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <img src={elam2} className="grid-col-span-1" alt="image1" />
      
      <img src={idcard} className="grid-col-span-2" alt="image3" />
      
      <img src={rc} className="grid-col-span-3" alt="image3" />
      <img src={ub} className="grid-col-span-4" alt="image3" />
      <img src={wc} className="grid-col-span-5" alt="image3" />
    </div>
      
                
  </div>
  );
  }

  export default Projects
