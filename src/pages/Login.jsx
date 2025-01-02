import React from 'react'
import login from '../assets/images/login/login.svg'

const Login = () => {
  return (
    <div className='flex items-center justify-center gap-10 mt-10 mb-10'>
        <div className='border'>
            <img src={login} alt="" />
        </div>
        <div className='flex flex-col gap-2 border p-8 rounded-xl'>
            <h1 className='text-center text-2xl font-bold'>Login</h1>
            <h3>Email</h3>
            <input className='border ' type="email" name="email" id="" placeholder='email' required />
            <h3>Password</h3>
            <input className='border' type="password" name="password" id="" placeholder='password' required />
            <button className='bg-violet-500 text-white py-1 rounded-lg' type="submit">Login</button>
        </div>
    </div>
  )
}

export default Login