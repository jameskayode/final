import React from 'react'
import Lap from '../Assets/laptop.jpg'
const About = () => {
  return (
    
        <div className='w-full bg-white py-16 px-4'>
          <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Lap} alt="" className='w-[500px] mx-auto my-4'/>
           
            <div className='flex flex-col justify-center'>
              <p className='text-[#00df9a] font-bold items-center justify-center '>BRIEF ACADEMIC PROFILE</p>
              <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>About Me</h1>
              <p>
              It is a long established fact that a reader will be distracted by the readable content.                   


                A graduate of Electrical/Electronics Engineering.
                
                I'm a Experienced frontend developer, master Forex coach and a seasoned Graphics designer. 
                
                I'm the founder of EagleFX Academy, GuruTech Institute Academics that has raised Profitable Traders and developers. 
                I've fond balance between Life and Work, I'm a totally happy person, inspiring speaker and firm investor, 
                but it didn't come easily.You can use my previous experience in order not to fall into the same trap.
              </p>
              <div className='justify-center flex items-center'> <a href="https://drive.google.com/file/d/1ElRshfN2D8o_ktGSJ-VpEoWeVTOIwdhQ/view?usp=sharing">
              <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>RESUME</button></a>
              </div>
            </div>
          </div>
        </div>
                
             
               



      );
    };
    

export default About
