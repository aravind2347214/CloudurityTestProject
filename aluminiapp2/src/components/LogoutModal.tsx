import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import * as authAction from "../redux/actions"

function LogoutModal(props:any) {
    const {setLogoutModal}=props
    const dispatch=useDispatch()
    const navigate= useNavigate()

    const handleLogout=()=>{
        dispatch(authAction.logoutAction())
        setLogoutModal(false)
        navigate('/')
    }
    const handleModalClose=()=>{
        setLogoutModal(false)   

    }

  return (
<div className='top-0 left-0 absolute w-[100vw] h-[100vh] bg-[#00000054] flex justify-center items-center z-[999]'>
    <div className='bg-C55 p-5 w-[90%] md:max-w-[350px] max-h-[300px] shadow-xl bg-black' >
    <div className="mt-4 mb-6 text-[14px] text-white">
        Are you sure you want to <strong>Log out</strong> from Alumnus  
      </div>
      <div className='flex justify-end gap-4 mt-2'>
        <button className={` bg-inactiveC11  text-C11 font-bold text-[12px] py-2 px-5`}  onClick={handleModalClose}>Cancel</button>
        <button className={`hover:bg-inactiveC11 text-C11 font-bold text-[12px] py-2 px-5 bg-[#727834] text-white`} onClick={handleLogout}>Log Out</button>
      </div>
    </div>
</div>
  )
}

export default LogoutModal
