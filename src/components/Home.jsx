import React from 'react'
import { Link } from 'react-router-dom'

import img from '../assets/img/development.jpg'

const Home = () => {
  return (
    <div className='flex flex-row flex-wrap w-full mt-5 md:p-4 justify-center'>
      <div className='flex flex-col w-full md:w-1/3 break-words'>
        <h1 className='text-5xl font-bold text-blue-900'>Desarrollemos soluciones juntos.</h1>
        <p className='text-md text-gray-500 mt-2 w-full break-words'>Como empresa siempre brindamos soluciones que ayuden a nuestros clientes a acelerar sus procesos, ademas de brindar productos de alta calidad que solventen las necesidades de las empresas.</p>
        <Link to='/about' className='bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent duration-1000 rounded mt-3 w-1/2 place-self-start md:w-1/3 text-center align-rigth'>Acerca de</Link>
      </div>
      <div className='w-1/2 justify-around hidden md:flex'>
        <img src={img} alt='img' className='w-2/3'/>
      </div>
    </div>
  )
}

export default Home