import React, { useState } from 'react'

const Login = ({handleLogin}) => {
 //TWO WAY BINDING 

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email, password)
    console.log("email is",email);
    console.log("password is,", password);
 
    setemail("")
    setpassword("")
    } 

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl  border-red-600 p-15'>
            <form 
            onSubmit={(e) =>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
              <input 
              value={email}
              onChange={(e)=>{
                setemail(e.target.value)
              }}
                required 
                className = 'text-white outline-none bg-transparent border-2 border-red-600 py-3 px-5 rounded-full placeholder:text-gray-400' type ="email" placeholder='Enter your email'  />
              <input 
               value={password}
               onChange={(e)=>{
                 setpassword(e.target.value)
               }}
               required className = 'text-white outline-none bg-transparent border-2 border-red-600 py-3 px-5 mt-4 rounded-full placeholder:text-gray-400'type="password" placeholder='Enter your password' />
              <button className = 'text-white outline-none border-2 bg-red-600 py-3 px-5 rounded-full mt-3 placeholder:text-white'>Log in </button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
