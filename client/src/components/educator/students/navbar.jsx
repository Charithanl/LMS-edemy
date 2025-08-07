import React, { useContext } from 'react'
import { assets } from '../../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../../context/AppContext'

const Navbar = () => {

    const {navigate, isEducator} = useContext(AppContext);

 const isCourseListPage = location.pathname.includes('/course-list');

 const {openSignIn} = useClerk()
 const { user } = useUser();
  return (

    <div className={`flex justify-between items-center px-5 sm:px-10 md:px-10 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-gray-100' : ''}`}>
        <img onClick={() => navigate('/')} src={assets.logo} alt="Logo"  className='w-28 lg:w-32 cursor-pointer'/>
        <div className='hidden md:flex gap-5 items-center text-gray-500'>
            <div className='flex gap-3 items-center'>
                { user && 
                <>
                    <button onClick={() => {navigate('/educator')}}>{isEducator ? 
                    'Educator Dashboard' : 'Become Educator'}</button>
                | <Link to="/my-enrollments">my enrollments</Link>
                </>
                }
            </div>
            { user ? <UserButton/> :
                <button  onClick={() => openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>}
        </div>
         

        {/* Mobile Navbar */}
        <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500' >
            <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs text-xs'>
            { user && <>

                <button onClick={() => {navigate('/educator')}}>{isEducator ? 
                    'Educator Dashboard' : 'Become Educator'}</button>
            | <Link to="/my-enrollments">my enrollments</Link>
            </>
            }
            </div>
            { user ? <UserButton/> :
                <button onClick={() => openSignIn()}><img src={assets.user_icon} alt="Profile" className='w-8 h-8' /></button>}
        </div>
    </div>
  )
}

export default Navbar
