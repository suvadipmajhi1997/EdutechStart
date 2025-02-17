import React, { useState } from 'react'
import toast from 'react-hot-toast';
import{AiOutlineEye,AiOutlineEyeInvisible } from'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm=({setIsLoggedIn})=> {
    const[formData,setFormData] =useState({
        email:"",password:"",
    })

    const [showPassword,setShowPassword] = useState(false);
    const navigate= useNavigate();

    function changeHandler(event){
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        //Send the form data to the server
        toast.success('Logged in');
        navigate('/dashboard');
    }

  return (
    <div className='flex flex-col w-full mt-6 gap-y-4'>
        <form onSubmit={submitHandler}>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]S'>Email Address
                    <sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                type="email"
                name="email"
                value={formData.email}
                required
                placeholder='Enter your email'
                onChange={changeHandler}
                />
            </label>
            <label className='relative w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 mt-3 leading-[1.375rem]S'>Password
                <sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]' 
                type={showPassword?('text'):('password')}
                 name="password"
                 value={formData.password}
                 required
                 placeholder='Enter your password'
                 onChange={changeHandler}
                />
                <span className='absolute right-3 top-[83px] cursor-pointer'  
                    onClick={()=> setShowPassword((prev)=>!prev)}>
                    {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
                <Link to="#">
                <p className='mt-1 ml-auto text-xs text-blue-100 max-w-max'>Forgot Password</p>
                </Link>
            </label>
            <button className='w-full font-medium bg-yellow-50 text-richblack-900 px-[12px] py-[8px] rounded-[8px] mt-5'>
                Sign In
            </button>
        </form>
    </div>
  )
}

export default LoginForm