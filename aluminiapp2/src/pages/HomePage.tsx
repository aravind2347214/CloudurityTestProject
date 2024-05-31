import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function HomePage(props:any) {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div className='flex flex-col  min-h-[100vh]'>
      <Navbar activePage="home"/>
      <div className='flex flex-1 homebackground min-h-[100vh]'>
      <div className='min-w-full min-h-full flex-1 bg-[#000000ac] flex-col flex px-10 py-10'>
        <div className='py-[300px]'>
        <div data-aos="fade-down"  className='px-5 text-center mx-auto text-[70px] font-bold text-white font-serif'>
          Welcome Alumnus
        </div>
        <div data-aos="fade-down"  className='text-center text-white'>Reconnect, Network, and Thrive with Your Alumni Community</div>

        </div>

        <div className='p-5 px-20 mb-10 text-center text-white' data-aos="fade-up">
    Fostering a vibrant community of alumni, where past graduates can reconnect, network, and stay engaged with their alma mater. Whether you graduated last year or decades ago, this platform is designed to keep you connected with fellow alumni and the institution that played a pivotal role in shaping your career and life.
        </div>

        <div className='flex flex-row gap-4 mb-10 text-white'>
        <div className='w-1/2 p-5 bg-[#00000075]' data-aos="zoom-in" >
        Our alumni stories section showcases the diverse paths our graduates have taken, highlighting their achievements and the impact they are making in their respective fields. This is your space to share your journey, inspire others, and celebrate your successes.

        </div>
        <div className='w-1/2 p-5 bg-[#00000075]' data-aos="zoom-in" >
        Here, you’ll find a wealth of resources tailored specifically for our alumni. Our directory allows you to find and connect with former classmates, while our events section keeps you informed about upcoming reunions, networking events, and other opportunities to engage with the community. Additionally, we offer a variety of professional development resources, including job postings, career advice, and mentorship programs to help you advance in your career.
        </div>
        </div>
 




        <div className='p-5 px-20 text-center text-white' data-aos="fade-up" >
        We believe that the bonds formed during your time at our institution are lifelong. This website is your gateway to staying connected, giving back, and continuing to be a part of the rich legacy of our alumni community. Welcome back, and let’s continue to grow together!
        </div>

       

        
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
