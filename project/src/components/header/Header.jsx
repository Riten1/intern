import React, { useId } from 'react'
import { useNavigate } from 'react-router-dom'
import Vector from '../../images/Vector.png'


const Header = () => {
  let id = useId()

  const navigate = useNavigate();

  const navItems = [{
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Agency',
    path: '/agency',
  },
  {
    name: 'Case study',
    path: '/agency',
  },
  {
    name: 'Resources',
    path: '/resources',
  },
  
]


  return (
    <div className='flex w-full h-28 pl-20 pr-20 pt-8 pb-8 justify-between' >

     <div className='mt-2 font-'>
      boostim
     </div>
     <div className='flex gap-x-10'>
     {
      navItems.map((eachItem) => (
        <ul>

         <div className='mt-2' key={id} onClick={() => navigate(eachItem.path)}>{eachItem.name}<select></select></div> 
        </ul>
      ))
    }
  <div className='mt-2' onClick={() => navigate('/contact')}>Contact</div>

     </div>
     <div className='flex gap-x-7'>
      <div>
      <button className='w-40 h-12 rounded-3xl border-solid border-2 border-black ' >Get Started</button>

      </div>
      <div className='rounded-full w-8 h-8 bg-black mt-2'>
      <img className='ml-1.5 mt-1.5' src={Vector}></img>
      </div>
     </div>
    
    </div>
  )
}

export default Header