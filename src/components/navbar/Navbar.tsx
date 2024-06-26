import { Link, useNavigate } from 'react-router-dom'
import React from 'react'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Loja de game</div>

            <div className='flex gap-4'>              
              <Link to='/home' className='hover:underline'>Home</Link>
              <Link to='/categoria' className='hover:underline'>Categoria</Link>
             
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar