import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log("email is", email);
    console.log("password is,", password);

    setemail("");
    setpassword("");
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-[url("/login.jpg")] bg-cover bg-center'>
      <div className='border-2 rounded-2xl border-red-600 p-10 shadow-xl transition duration-300 hover:shadow-2xl hover:scale-105 bg-black bg-opacity-40 backdrop-blur-md'>
        <form
          onSubmit={submitHandler}
          className='flex flex-col items-center justify-center gap-4 transition-all duration-300'
        >
          <h2 className="text-2xl text-red-500 font-bold mb-4 transition duration-300 hover:text-red-400">Login</h2>

          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            className='w-72 text-white outline-none bg-transparent border-2 border-red-600 py-3 px-5 rounded-full placeholder:text-gray-400 transition-all duration-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-400'
            type="email"
            placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            className='w-72 text-white outline-none bg-transparent border-2 border-red-600 py-3 px-5 rounded-full placeholder:text-gray-400 transition-all duration-300 focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-400'
            type="password"
            placeholder='Enter your password'
          />
          <button
            className='w-72 text-white bg-gradient-to-r from-red-600 to-red-800 border-none py-3 px-5 rounded-full mt-2 transition-all duration-300 hover:brightness-110 hover:scale-105'
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
