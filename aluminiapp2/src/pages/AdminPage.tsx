import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function AdminPage(props:any) {
  const navigate = useNavigate()

  const loginState = useSelector(
    (state: any) => state.authReducer.loginState
  );
  
  useEffect(()=>{
    window.scrollTo(0,0)
    if(loginState!=="admin") navigate("/")
    
  },[])

  const studentEmptyState = {
    name: '',
    dob: '',
    contact: '',
    email: '',
    department: '',
    year: '',
    specialization: '',
    extracurricular: '',
    co_curricular: ''

  }
  const [newStudent, setNewStudent] = useState<any>(studentEmptyState);

  const [newYear,setNewYear] = useState<any>("")
  const [newDepartment,setNewDepartment] = useState<any>("")

  const handleStudentInputchange =(e:any)=>{
    setNewStudent({
      ...newStudent,
      [e.target.name]: e.target.value,
    });
  }

  const handleYearInputchange =(e:any)=>{
    setNewYear(e.target.value);
  }

  const handleDepartmentInputchange =(e:any)=>{
    setNewDepartment(e.target.value);
  }

  const handleNewStudentSubmit = async () => {

    try {
      const response = await axios.post('http://localhost:8000/add-student', newStudent);
      console.log(response.data);
      alert('Student added successfully!');
      setNewStudent(studentEmptyState)
    } catch (error) {
      console.error('Error adding student:', error);
      alert('Error adding student.');
      setNewStudent(studentEmptyState)

    }
  };

  const handleNewYearSubmit = async () => {
    console.log("New year",newYear)
    if(newYear===""){alert("Invalid Year");return}
    try {
      const response = await axios.post('http://localhost:8000/add-year', { year: newYear });
      console.log(response.data);
      alert('Year added successfully!');
      setNewYear("")
    } catch (error) {
      console.error('Error adding year:', error);
      alert('Error adding year.');
      setNewYear("")

    }

  };

  const handleNewDepartmentSubmit = async () => {
    if(newDepartment===""){alert("Invalid Year");return}
    try {
      const response = await axios.post('http://localhost:8000/add-department', { name: newDepartment });
      console.log(response.data);
      alert('Department added successfully!');
      setNewDepartment("")

    } catch (error) {
      console.error('Error adding department:', error);
      alert('Error adding department.');
      setNewDepartment("")
    }
  };




  return (
<div className='flex flex-col  min-h-[100vh]'>
      <Navbar activePage="admin"/>
      <div className='flex flex-1 homebackground min-h-[80vh]'>
      <div className='min-w-full min-h-full flex-1 bg-[#000000ac] flex-col flex px-10 py-10'>
        <div className='text-white font-bold text-[30px]  font-serif py-10'>
          Welcome Admin
        </div>
        <div className='flex flex-row flex-wrap gap-[40px]'>
        <div className='w-[60%] p-5 bg-black' data-aos="fade-up">
          <div className='text-white text-[20px] font-semibold font-serif'>
            Add New Student
          </div>
          <div className='flex flex-row gap-[8px] flex-wrap p-3'>
          
            <input value={newStudent.name}  type="text" name="name" id="" placeholder='Name' onChange={handleStudentInputchange} className='w-[45%] p-2 outline-none' />
            <input value={newStudent.dob} title='Date of birth' type="date" name="dob" id=""  placeholder='Date of Birth' onChange={handleStudentInputchange}className='w-[45%] p-2 outline-none ' />
            <input value={newStudent.email}  type="email" name="email" id="" placeholder='Email' onChange={handleStudentInputchange} className='w-[45%] p-2 outline-none '/>
            <input value={newStudent.contact}  type="number" name="contact" id="" placeholder='Contact Number' onChange={handleStudentInputchange} className='w-[45%] p-2 outline-none '/>
            <input value={newStudent.department}  type="text" name="department" id="" placeholder='Department' onChange={handleStudentInputchange} className='w-[45%] p-2 outline-none '/>
            <input value={newStudent.year}   type="number" name="year" id="" placeholder='Year Of Graduation' onChange={handleStudentInputchange} className='w-[45%] p-2 outline-none '/>
            <input value={newStudent.specialization}  type="text" name="specialization" id="" placeholder='Specialization' onChange={handleStudentInputchange} className='w-[45%] p-2 outline-none '/>
            <input value={newStudent.extracurricular}  type="text" name="extracurricular" id="" placeholder='Extracurriculars' onChange={handleStudentInputchange} className='w-[45%] p-2 outline-none '/>
            <input value={newStudent.co_curricular}  type="text" name="co_curricular" id="" placeholder='Co-Curriculars' onChange={handleStudentInputchange} className='w-[45%] p-2 outline-none '/>
          </div>
          <div className='flex justify-end mt-4'>
            <button onClick={handleNewStudentSubmit} className="px-6 py-2 text-white bg-[#727834]">Add</button>
          </div>
        </div>
        <div className='flex flex-col w-1/3 gap-[40px]'>
        <div className='p-5 bg-black ' data-aos="fade-up">
          <div className='text-white text-[20px] font-semibold font-serif'>
            Add New Year
          </div>
          <div>
            <input value={newYear}  type="number" name="year" id="" placeholder='Year Of Graduation' onChange={handleYearInputchange} className='w-full p-2 outline-none '/>
          </div>
          <div className='flex justify-end mt-4'>
            <button onClick={handleNewYearSubmit} className="px-6 py-2 text-white bg-[#727834]">Add</button>
          </div>
        </div>

        <div className='p-5 bg-black ' data-aos="fade-up">
          <div className='text-white text-[20px] font-semibold font-serif'>
            Add New Department
          </div>
          <div>
            <input value={newDepartment} type="text" name="name" id="" placeholder='Department Name' onChange={handleDepartmentInputchange} className='w-full p-2 outline-none '/>

          </div>
          <div className='flex justify-end mt-4'>
            <button onClick={handleNewDepartmentSubmit} className="px-6 py-2 text-white bg-[#727834]">Add</button>
          </div>
        </div>
        </div>

        </div>


        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AdminPage
