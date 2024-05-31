import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';
import AluminiInfoModal from '../components/AluminiInfoModal';

function SearchPage(props: any) {
  const navigate = useNavigate();
  const [infoModal, setInfoModal]: any = useState({ isOpen: false, activeAlumini: {} });
  const loginState = useSelector((state: any) => state.authReducer.loginState);
  const [studentList, setStudentList]: any = useState([]);
  const [filteredStudentList, setFilteredStudentList] = useState<any>([]);
  const [criteria, setCriteria] = useState<any>({ name: '', year: '', department: '' });


  useEffect(() => {
    window.scrollTo(0, 0);
    if (loginState === null) navigate('/');
    getAllStudents();
  }, [loginState, navigate]);

  const getAllStudents = async () => {
    try {
      const response = await axios.get('http://localhost:8000/get-all-students');
      setStudentList(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
      alert('Error fetching students.');
    }
  };

  useEffect(()=>{
    setFilteredStudentList([])

  },[criteria])

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCriteria({ ...criteria, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    filterStudents(criteria);
  };

  const filterStudents = (criteria: any) => {
    const filtered = studentList.filter((student: any) => {
      console.log("Student year tye",typeof(student.year.toString()))
      return (
        (!criteria.name || student.name.toLowerCase().includes(criteria.name.toLowerCase())) &&
        (!criteria.year || student.year.toString().includes(criteria.year.toString())) &&
        (!criteria.department || student.department.toLowerCase().includes(criteria.department.toLowerCase()))
      );
    });
    setFilteredStudentList(filtered);
  };

  const handleItemClick = (student: any) => {
    setInfoModal({ isOpen: true, activeAlumni: student });
    window.scrollTo(0, 0);
  };

  return (
    <div className='flex flex-col min-h-[100vh]'>
      <Navbar activePage='search' />
      <div className='flex-1'>
        <div className='flex flex-1 homebackground min-h-[80vh]'>
          <div className='min-w-full min-h-full flex-1 bg-[#000000ac] flex-col flex px-10 py-10'>
            <div className='text-[60px] text-center mt-[100px] text-white font-bold font-serif' data-aos="fade-down">Search Your Peers and More</div>
            <div className='bg-[#00000079] flex flex-col my-[100px] p-5 w-[80%] mx-auto' data-aos="fade-up">
              <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <div className='flex flex-row justify-between gap-3 p-2'>
                  <div className='flex flex-col w-1/2'>
                    <label className='text-white'>Name</label>
                    <input type='text' className='p-2' name='name' onChange={handleChange} placeholder='Rahul Sharma' />
                  </div>
                  <div className='flex flex-col w-1/4'>
                    <label className='text-white'>Year</label>
                    <input type='text' className='p-2' name='year' onChange={handleChange} placeholder='2014' />
                  </div>
                  <div className='flex flex-col w-1/4'>
                    <label className='text-white'>Department</label>
                    <input type='text' className='p-2' name='department' onChange={handleChange} placeholder='Computer Science' />
                  </div>
                </div>
                <div className='flex justify-end px-2'>
                  <button type='submit' className='px-[30px] py-2 text-white bg-[#727834] font-semibold'>Search</button>
                </div>
              </form>
            </div>
            {filteredStudentList.length > 0 ? (
              <div className='py-10 mx-10'>
                <div className='text-[30px] font-serif text-white mb-10'>Search Results</div>
                <div className='flex flex-row flex-wrap gap-[5px]'>
                  {filteredStudentList.map((student: any) => (
                    <div
                      onClick={() => handleItemClick(student)}
                      key={student.id}
                      className='px-5 py-2 bg-black border-[1px] border-b-[4px] w-[200px] border-[#727834] cursor-pointer'
                    >
                      <div className='font-bold text-[20px] text-white'>{student.name}</div>
                      <div className='text-white'>{student.year}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className='py-10 mx-10 font-bold text-center text-white'>Currently no results </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
      {infoModal.isOpen && (
        <AluminiInfoModal alumni={infoModal.activeAlumni} setInfoModal={setInfoModal} />
      )}
    </div>
  );
}

export default SearchPage;







