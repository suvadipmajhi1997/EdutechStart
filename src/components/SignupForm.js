import React, { useState } from 'react'
import{AiOutlineEye,AiOutlineEyeInvisible } from'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const SignupForm=({setIsLoggedIn})=> {

    const[formData,setFormData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
        
    })

    const [showPassword,setShowPassword] = useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false);
    const[accountType,setAccountType] = useState('student');
    const navigate = useNavigate();

    function changeHandler(event){
        setFormData((prev)=>({
            ...prev,
            [event.target.name]:event.target.value
           }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        //validation logic
        if(formData.password!==formData.confirmPassword){
            toast.error('password not match');
            return;
        }
        
        setIsLoggedIn(true);
        toast.success("Account created successfully");
        navigate('/dashboard');
    }
    const accountData={
        ...formData
    };
    const finalData={
        ...accountData,
        accountType
    }
    console.log(finalData);
  return (
    <div>
        <div className='flex flex-row p-1 my-6 rounded-full bg-richblack-800 gap-x-1 max-w-max'>
          <button className={`${accountType==='student'?
            'bg-richblack-900 text-richblack-5':
            'bg-transparent text-richblack-200'
            } py-2 px-5 rounded-full transition-all duration-200` }
           onClick={()=>setAccountType('student')} >
            Student
          </button>
          <button className={`${accountType==='instructor'?
            'bg-richblack-900 text-richblack-5':
            'bg-transparent text-richblack-200'
            } py-2 px-5 rounded-full transition-all duration-200` }
           onClick={()=>setAccountType('instructor')}>
            Instructor
          </button>
        </div>

        <form onSubmit={submitHandler}>
            <div className='flex flex-row gap-x-4'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 mt-3 leading-[1.375rem]S'>First Name
                    <sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                 type="text" 
                 name="firstName"
                 required
                 placeholder='Enter First Name'
                 onChange={changeHandler} />
            </label>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 mt-3 leading-[1.375rem]S'>Last Name
                    <sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                 type="text" 
                 name="lastName"
                 required
                 placeholder='Enter Last Name'
                 onChange={changeHandler} />
            </label>
            </div>
            <label  className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 mt-3 leading-[1.375rem]S'>Email
                    <sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                type="email" 
                name="email" 
                required
                placeholder='Enter your email'
                onChange={changeHandler}/>
            </label>
        <div className='flex flex-row gap-x-4'>    
            <label  className='relative w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 mt-2 leading-[1.375rem]S'>Password
                    <sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                type={showPassword?('text'):('password')}
                    name="password"
                    value={formData.password}
                    required
                    placeholder='Enter your password'
                    onChange={changeHandler}
                    />
                    <span className='absolute right-3 top-[48px] cursor-pointer'
                    onClick={()=> setShowPassword((prev)=>!prev)}>
                    {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
            </label>
            
            <label  className='relative w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 mt-2 leading-[1.375rem]S'>Confirm Password
                <sup className='text-pink-200'>*</sup></p>
                <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                type={showConfirmPassword?('text'):('password')}
                name="confirmPassword"
                value={formData.confirmPassword}
                required
                placeholder='Confirm password'
                onChange={changeHandler} 
                />
                <span className='absolute right-3 top-[48px] cursor-pointer'
                onClick={()=> setShowConfirmPassword((prev)=>!prev)}>
                {showConfirmPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>
        </div>    
            <button className='w-full font-medium bg-yellow-50 text-richblack-900 px-[12px] py-[8px] rounded-[8px] mt-8'>
                Create Account
            </button>
        </form>
    </div>
  )
}

export default SignupForm