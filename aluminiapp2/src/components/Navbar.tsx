import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import LogoutModal from './LogoutModal';

function Navbar(props:any) {
 const{activePage}=props


 const loginState = useSelector(
  (state: any) => state.authReducer.loginState
);

const [logoutModal,setLogoutModal]:any = useState<Boolean>(false)
  return (
    <div className='flex flex-row  bg-[#000000dd] justify-between px-10 py-2 font-serif text-[#727834] items-center fixed min-w-[100vw] z[100]' data-aos="fade-down">
    <Link to="/" className='flex flex-row items-center gap-2 font-serif font-bold'>
      <img src={require("../assets/logonew.png")} className='w-[30px]' alt="" />
      <div>Alumnus</div>
    </Link>
    <div className='flex flex-row justify-between gap-[40px] text-[14px]'>
      {
        loginState!==null&&
        <div className={`${activePage==="search"?"font-semibold text-white":""} hover:text-white`}>
        <Link to="/search">Search</Link>
      </div>
      }

      <div className={`${activePage==="about"?"font-semibold text-white":""} hover:text-white`}>
        <Link to="/about">About</Link>
      </div>
      {
        loginState===null&&
        <div className={`${activePage==="login"?"font-semibold text-white":""} hover:text-white`}>
        <Link to="/login">Login</Link>
        </div>
      }

     {
      loginState==="admin"&&
      <div className={`${activePage==="admin"?"font-semibold text-white":""} hover:text-white`}>
      <Link to="/admin">Admin</Link>
      </div>
     }
     {
      loginState!==null&&
      <button
      onClick={()=>setLogoutModal(true)} 
      >
      <div>Logout</div>
      </button>
     }




    </div>
    {
      logoutModal&&
      <LogoutModal setLogoutModal={setLogoutModal} />
    }

  </div>
  )
}

export default Navbar
