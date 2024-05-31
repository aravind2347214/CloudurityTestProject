import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AboutPage(props:any) {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='flex flex-col  min-h-[100vh]'>
    <Navbar activePage="about"/>
    <div className='flex flex-1 homebackground min-h-[80vh]'>
      <div className='min-w-full min-h-full flex-1 bg-[#000000ac] flex-col flex px-10 py-10'>
        <div className='text-[60px] font-serif text-white text-center my-[200px] font-bold' data-aos="fade-down">More About Us</div>
        <div className='flex flex-col gap-6 font-serif'>
          <div data-aos="fade-up" className='bg-[#0000007b] p-5 text-white mx-10 text-left py-10 flex flex-row items-center'>
            <div className='pr-10' >
            <div className=' text-[30px] font-bold  my-3' >Our Mission</div>
            <div className='font-extralight'>Our mission is to build and sustain a robust alumni network that fosters meaningful connections, professional growth, and lifelong engagement with our institution. We strive to provide platforms and opportunities for alumni to reconnect, collaborate, and give back to their alma mater. Through events, mentorship programs, and professional development resources, we aim to support the personal and professional journeys of our alumni. We are committed to celebrating their achievements, sharing their stories, and amplifying their impact in their respective fields. Our mission is to create a supportive and inclusive community that not only values the past but also embraces the future, ensuring that the bonds formed during the time at our institution continue to enrich the lives of our alumni and contribute to the greater good.</div>
            </div>
            <img src={require("../assets/Mission.png")} className='h-[300px] aspect-auto border-[4px] border-[#727834]' alt="" />
          </div>
          <div data-aos="fade-up" className='bg-[#0000007b] p-5 text-white mx-10 text-center py-10'>
            <div className=' text-[30px] font-bold  my-3'>Our Vision</div>
            <div>Our vision is to create a global network of empowered alumni who are engaged, inspired, and connected to their alma mater and each other. We aim to foster a community where lifelong learning, collaboration, and innovation thrive, transcending geographical boundaries and professional domains. By leveraging the diverse talents and experiences of our alumni, we aspire to drive positive change in society, promote excellence in various fields, and support each other's growth and success. Our vision is to cultivate an environment where alumni feel a profound sense of belonging and pride, contributing to the continuous evolution and prestige of our institution. We envision a future where our alumni community is a dynamic force, championing shared values, supporting future generations, and enhancing the reputation and impact of our institution</div>
            
          </div>
          <div data-aos="fade-up" className='bg-[#0000007b] p-5 text-white mx-10 text-right py-10 flex flex-row items-center'>
          <img src={require("../assets/values.jpg")} className='h-[300px] aspect-auto border-[4px] border-[#727834]' alt="" />
          <div className='pl-10'>

            <div className=' text-[30px] font-bold  my-3'>Our Values</div>
            <div>Our values are the foundation of our alumni community and guide our actions and initiatives. We believe in the power of connection and collaboration, fostering a network where mutual respect, inclusivity, and support are paramount. Integrity and excellence are at the core of everything we do, reflecting our commitment to upholding the highest standards in all our endeavors. We value lifelong learning and continuous improvement, encouraging our alumni to pursue their passions and strive for personal and professional growth. Community and service are central to our ethos, inspiring our alumni to give back and make a positive impact on society. Lastly, we cherish the legacy of our institution and the shared experiences that bind us, nurturing a sense of pride and belonging that transcends time and place. These values guide us in building a vibrant, engaged, and impactful alumni network.</div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default AboutPage
