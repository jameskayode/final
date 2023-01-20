import React, { useState } from 'react'
import { DiCssdeck } from "react-icons/di";
import {AiOutlineMenu} from 'react-icons/ai';
import { Link} from 'react-scroll';



const Nav = () => {
/*let Links =[
    {name:"HOME",link:"/" },
    {name:"PROJECTS",link:"/Projects"},
    {name:"ABOUT",link:"#About"},
    {name:"CONTACT",link:"#Footer"},
  ];*/


  
const [open,setOpen]=useState(false);

//const handleClick=()=>setOpen(!open)
const closeMenu =()=>setOpen(false)
return (

  <div className='shadow-md w-full fixed top-0 left-0'>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800'>
      <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <DiCssdeck></DiCssdeck>
      
      </span>
      GuruTech
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    <AiOutlineMenu >
    <ion-icon name={open ? 'close':'menu'}></ion-icon></AiOutlineMenu>
    </div>

    <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white border-b-[#000300] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "nav-menu active" : "nav-menu"}'>
    <li className='md:ml-7  md:my-0 my-7'>
      
    <a href='/' onClick={closeMenu}>Home</a>
    </li>
    <li className='md:ml-7  md:my-0 my-7'>
   <Link to='projects' spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Projects</Link>
    </li>
    </ul>
    </div>
  </div>
  )
}

export default Nav
