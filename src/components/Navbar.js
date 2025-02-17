import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import{toast} from"react-hot-toast"

function Navbar(props) {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
        <Link to='/'>
           <img src={logo} alt='logo' width={160} height={32} loading='lazy'/>
        </Link>

        <nav>
            <ul className='flex text-richblack-100 gap-x-6'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
   {/* Button */}
        <div className='flex items-center gap-x-4'>
            {!isLoggedIn &&
            <Link to='/login'>
                <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                    Login
                </button>
            </Link>
            }
            { !isLoggedIn &&
                <Link to='/Signup'>
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                        onClick={()=>{
                        setIsLoggedIn(false);
                    }

                    }>
                        Sign Up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to='/'>
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
                        onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged out!")
                    }
                    }>
                        Logout
                    </button>
                </Link>
            }
            { isLoggedIn && 
                <Link to='/dashboard'>
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                        Dashboard
                    </button>
                </Link>
            }
           
        </div>
    </div>
  )
}

export default Navbar