import React, {useState} from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
    const [nav, setNav] = useState(false)

    const handleNav=()=>{
        setNav(!nav);
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-lime-600'>GuruTech.</h1>
      
      <div className='hidden md:flex'>
        <Link to={/}  className='p-4'>Home</Link>
       </div>



      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={30}/>  : <AiOutlineMenu size={30}></AiOutlineMenu>}
        
      <div className={nav ? 'fixed h-full w-[60%] left-0 top-0 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-200' : 'fixed left-[-100%]'}>
      
      <h1 className='w-full text-3xl font-bold text-lime-600 pt-8 px-4'>REACT.</h1>
        
        <ul className='p-4 uppercase'>
        <li className='p-3 border-b border-gray-600'>Home</li>
        <li className='p-3 border-b border-gray-600'>company</li>
        <li  className='p-3 border-b border-gray-600'>Resources</li>
        <li  className='p-3 border-b border-gray-600'>About</li>
        <li className='p-3'>Contact</li>
        </ul>
      </div>
      </div>
    </div>
  );
}


export default Header
