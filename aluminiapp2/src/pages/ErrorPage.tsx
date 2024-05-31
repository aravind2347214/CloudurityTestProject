import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='flex items-center justify-center bg-black w-[100vw] h-[100vh] flex-col text-[#eaeaeab9]'>
      <img src={require("../assets/logonew.png")} className='w-[50px]' alt="" />
        <div className='font-semibold text-[30px]'>404</div>
        <div>This page does not exist</div>
        <Link to ="/" className='mt-5 hover:underline underline-offset-2'>Home Page</Link>
    </div>
  )
}

export default ErrorPage
