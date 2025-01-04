import React, { useContext } from 'react'
import login from '../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../providers/AuthProvider'

const Login = () => {

    const {loginUser} = useContext(AuthContext);

    const location = useLocation();
    console.log(location);

    const navigate = useNavigate();

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        loginUser(email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
            navigate(location.state? location.state : '/');
            
           
        })
        .then(error = console.log(error))
    }

  return (
    <div className='flex items-center justify-center gap-10 mt-10 mb-10'>
        <div className=''>
            <img src={login} alt="" />
        </div>
        <form onSubmit={handleLogin} className='flex flex-col gap-2 border p-8 rounded-xl'>
            <h1 className='text-center text-2xl font-bold'>Login</h1>
            <h3>Email</h3>
            <input className='border ' type="email" name="email" id="" placeholder='email' required />
            <h3>Password</h3>
            <input className='border' type="password" name="password" id="" placeholder='password' required />
            <button className='bg-violet-500 text-white py-1 rounded-lg' type="submit">Login</button>
            <p>Didn't signup yet? <button><Link to="/signup" className='text-sm text-orange-400'>Signup</Link></button></p>
            
        </form>
    </div>
  )
}

export default Login