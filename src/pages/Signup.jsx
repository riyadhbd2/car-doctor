import React, { useContext } from 'react'
import signup from '../assets/images/login/login.svg'
import { Link } from 'react-router'
import { AuthContext } from '../providers/AuthProvider'

const Signup = () => {

    // using context api
    const {createUser} = useContext(AuthContext);

    const handleSignup = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
           
        })
        .then(error = console.log(error))
    }
  return (
    <div className='flex items-center justify-center gap-10 mt-10 mb-10'>
        <div >
            <img src={signup} alt="" />
        </div>
        <form onSubmit={handleSignup} className='flex flex-col gap-2 border p-8 rounded-xl'>
            <h1 className='text-center text-2xl font-bold'>Sign Up</h1>
            <h3>Email</h3>
            <input className='border ' type="email" name="email" id="" placeholder='email' required />
            <h3>Password</h3>
            <input className='border' type="password" name="password" id="" placeholder='password' required />
            <button className='bg-violet-500 text-white py-1 rounded-lg' type="submit">Sign Up</button>
            <p>Already signup? <button><Link to="/login" className='text-sm text-orange-400'>Login</Link></button></p>
        </form>
    </div>
  )
}

export default Signup