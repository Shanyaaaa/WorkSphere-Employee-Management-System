import React from 'react'
import { setLocalStorage } from '../../../utils/LocalStorage'


const Header = ({data}) => {
console.log(data)

const logOutUser = () => {
  localStorage.removeItem('loggedInUser'); 
  window.location.reload(); 
}


  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-serif'>HELLO <br /> <span className='text-2xl'> {data?.firstName}💬</span> </h1>
      <button onClick={logOutUser} className='bg-red-500 text-lg font-medium font-serif text-shadow-white px-5 py-2 rounded-smalling'> Log Out </button>
      
    </div>
  )
}

export default Header
