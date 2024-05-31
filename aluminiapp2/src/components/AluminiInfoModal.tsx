import moment from 'moment'
import React from 'react'

function AluminiInfoModal(props:any) {
    const {alumni,setInfoModal} = props
  return (
    <div 
    onClick={()=>setInfoModal({isOpen:false,activeAlumini:{}})
    }
    className='top-0 left-0 absolute w-[100vw] h-[100vh] bg-[#00000082] flex justify-center items-center' >
    <div 
    onClick={(e:any)=>{e.stopPropagation()}}
    className='bg-C55 p-5 w-[90%] md:max-w-[500px] gap-[10px] flex flex-col shadow-xl bg-black text-white border-[3px] border-[#727834] font-serif text-[20px]' >
        <div className='text-[40px] font-bold text-center'>{alumni?.name}</div>
        <div className='flex flex-row '>
            <div className='mr-3 text-[#727834] w-1/2'>Year Of Graduation : </div>
            <div >{alumni.year}</div>
        </div>
        <div className='flex flex-row'>
            <div className='mr-3 text-[#727834] w-1/2'>Deparment : </div>
            <div >{alumni.department}</div>
        </div>
        <div className='flex flex-row'>
            <div className='mr-3 text-[#727834] w-1/2'>Date of Birth : </div>
            <div >{moment(alumni.dob).format("LL")}</div>
        </div>
        <div className='flex flex-row'>
            <div className='mr-3 text-[#727834] w-1/2'>Emil : </div>
            <div >{alumni.year}</div>
        </div>
        <div className='flex flex-row'>
            <div className='mr-3 text-[#727834] w-1/2'> Specialization : </div>
            <div >{alumni.specialization}</div>
        </div>
        <div className='flex flex-row'>
            <div className='mr-3 text-[#727834] w-1/2'>Extra Curriculars : </div>
            <div >{alumni.extracurricular}</div>
        </div>
        <div className='flex flex-row'>
            <div className='mr-3 text-[#727834] w-1/2'>Co Curriculars : </div>
            <div >{alumni.co_curricular}</div>
        </div>
        


    </div>
</div>
  )
}

export default AluminiInfoModal
